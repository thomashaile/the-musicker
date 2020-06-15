const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from API');
});

router.use('/albums', require('./albums'));
router.use('/albumss', require('./albumss'));
router.use('/artists', require('./artists'));
router.use('/genres', require('./genres'));
router.use('/playlists', require('./playlists'));
router.use('/playlists/list', require('./playlists'));
router.use('/playlists/remove', require('./playlists'));
router.use('/playlists/track', require('./playlists'));
router.use('/tracks', require('./tracks'));
router.use('/tracks/tracks', require('./tracks'));



module.exports = router;