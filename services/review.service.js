const ReviewRepository = require("../repositories/review.repository.js");
const { Reviews, Whiskys, WhiskyLikes } = require("../models");

class ReviewService {
  reviewRepository = new ReviewRepository(Reviews, Whiskys, WhiskyLikes);

  //내가쓴 리뷰 조회
  getReview = async (user_id, whisky_id) => {
    const review = await this.reviewRepository.findOneMyReview(
      user_id,
      whisky_id
    );
    if (!review) {
      throw new Error("404/위스키리뷰가 존재하지 않습니다.");
    }

    let liked = (await this.reviewRepository.findOneLike(user_id, whisky_id))
      ? true
      : false;
    if (WhiskyLikes)
      return {
        content: review.content,
        whisky_id: whisky_id,
        whisky_kor: review.dataValues.Whisky.dataValues.whisky_kor,
        whisky_eng: review.dataValues.Whisky.dataValues.whisky_eng,
        whisky_photo: review.dataValues.Whisky.dataValues.whisky_photo,
        liked: liked,
      };
  };

  //위스키찾기
  findWhiskyById = async (whisky_id) => {
    return await this.reviewRepository.findOneWhisky(whisky_id);
  };

  //리뷰찾기
  findWhiskyReview = async (user_id, whisky_id) => {
    return await this.reviewRepository.findOneReview(user_id, whisky_id);
  };

  //리뷰등록
  createReview = async (user_id, whisky_id, content) => {
    return await this.reviewRepository.createReview(
      user_id,
      whisky_id,
      content
    );
  };

  //리뷰수정
  updateReview = async (user_id, whisky_id, content) => {
    return await this.reviewRepository.updateReview(
      user_id,
      whisky_id,
      content
    );
  };

  //리뷰삭제
  deleteReview = async (user_id, whisky_id) => {
    await this.reviewRepository.deleteReview(user_id, whisky_id);
  };
}

module.exports = ReviewService;
