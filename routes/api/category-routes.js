const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/category` endpoint

router.get('/', async (req, res) => {
  // find all categories

  Category.findAll({
    // be sure to include its associated Products
    include: [Product],

  }).then(categories => res.json(categories))
    .catch(err =>
      res.status(500).json(err));

});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [Product]
  }).then(category => res.json(category))
    .catch(err =>
      res.status(500).json(err));
});

//==================================
router.post('/', async (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(category => res.json(category))
    .catch(err =>
      res.status(500).json(err));
});



router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then(category => res.json(category))
    .catch(err =>
      res.status(500).json(err));
});



router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body, {
    where: {
      id: req.params.id
    },
  }).then(category => res.json(category))
    .catch(err =>
      res.status(500).json(err));
});



module.exports = router;
