"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("Stores", "email", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("Stores", "biz_number", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("Stores", "password", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
