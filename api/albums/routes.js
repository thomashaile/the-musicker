const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.getAll);

router.get('/:id', controllers.getOne);
router.get('artist/:id', controllers.getOneByArtist);

router.post('/', controllers.create);

router.put('/:id', controllers.update);

router.delete('/:id', controllers.delete);

module.exports = router;