const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.getAll);

router.get('/:id', controllers.getOne);
router.get('/list/:id', controllers.getTrackByPlaylist);

router.post('/', controllers.create);

router.post('/track/', controllers.addTrack);

router.put('/:id', controllers.update);

router.delete('/:id', controllers.delete);
router.delete('/remove/:id', controllers.deletePlayList);

module.exports = router;