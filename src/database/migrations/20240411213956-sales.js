'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      date_sales: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'dateSales'
      },
      quantity_sales: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantitySales'
      },
      unit_price_sales: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: 'unitPriceSales'
      },
      total_price_sales: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: 'totalPriceSales'
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
