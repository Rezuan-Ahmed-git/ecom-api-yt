const router = require('express').Router();
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getABrand,
  getAllBrands,
} = require('../controller/brandCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createBrand);
router.put('/:id', authMiddleware, isAdmin, updateBrand);
router.delete('/:id', authMiddleware, isAdmin, deleteBrand);
router.get('/:id', getABrand);
router.get('/', getAllBrands);

module.exports = router;
