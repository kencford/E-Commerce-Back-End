// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(
  Category, {
  foreignKey: 'category_id',
  onDelete:"CASCADE"
  }
);

// Categories have many Products
Category.hasMany(
  Product, {
  foreignKey: 'category_id',
  }
);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag',
  // foreignKey: 'objectId', // replaces `productId`
  // otherKey: 'typeId' // replaces `categoryId`
  foreignKey: 'productId', // replaces `productId`
  otherKey: 'tagId' // replaces `categoryId`
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'tagId',
  otherKey: 'productId'
  })


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
