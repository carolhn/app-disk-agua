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
      typeDocument: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'type_document'
      },
      cpfCnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'CPF_CNPJ'
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
