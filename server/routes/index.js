const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');

router.use('/user');
router.use('/type');
router.use('/brand');
router.use('/device');

module.exports = router;