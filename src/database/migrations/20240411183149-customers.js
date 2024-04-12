'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_document: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'typeDocument'
      },
      CPF_CNPJ: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'cpfCnpj'
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};
