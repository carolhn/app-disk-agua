'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('purchase_products', {
    purchaseId: {
     type: Sequelize.INTEGER,
     allowNull: false,
     references: {
      model: 'purchases',
      key: 'id'
     },
     onUpdate: 'CASCADE',
     onDelete: 'CASCADE'
    },
    productId: {
     type: Sequelize.INTEGER,
     allowNull: false,
     references: {
      model: 'products',
      key: 'id'
     },
     onUpdate: 'CASCADE',
     onDelete: 'CASCADE'
    },
    quantity: {
     type: Sequelize.INTEGER,
     allowNull: false
    },
    unit_price: {
     type: Sequelize.DECIMAL(10, 2),
     allowNull: false,
     field: 'unitPrice'
    },
    createdAt: {
     type: Sequelize.DATE,
     allowNull: false,
     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
     type: Sequelize.DATE,
     allowNull: false,
     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
   });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('purchase_products');
  }
};
