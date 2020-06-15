const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {

        const sql = `SELECT * FROM playlists`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(rows)
        });
    },
    getTrackByPlaylist: (req, res) => {
        const id = req.params.id;
        const sql = `SELECT playlist_track.TrackId As TrackId, tracks.Name As TrackName FROM playlist_track  
        LEFT JOIN tracks ON playlist_track.TrackId = tracks.TrackId WHERE PlaylistId = "${id}"`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json(rows)
        });
    },
    getOne: (req, res) => {
        const id = req.params.id;
        const sql = `
                SELECT * FROM playlists WHERE PlaylistId = $ { id }
                `;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json(rows)
        });
    },
    addTrack: (req, res) => {
        // read row data from body
        const newList = req.body;
        const sql = `
                INSERT INTO playlists(PlaylistId, TrackId)
                VALUES($ {req}, '${newList.name}')
                `;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("New play list created successfully...")
        });
    },
    create: (req, res) => {
        // read row data from body
        const newList = req.body;
        const sql = `
                INSERT INTO playlists(PlaylistId, Name)
                VALUES($ { newList.id }, '${newList.name}')
                `;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("New play list created successfully...")
        });
    },
    update: (req, res) => {
        // read row data from body
        const id = req.params.id;
        const newList = req.body;
        const sql = `
                UPDATE playlists SET Name = '${newList.name}'
                WHERE PlaylistId = $ { id }
                `;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("Play list record updated.....")
        });
    },
    deletePlayList: (req, res) => {
        const id = req.params.id;
        const sql = `DELETE FROM playlists WHERE PlaylistId = "${id}"`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("Playlist Deleted Successfully")
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        const sql = `DELETE FROM playlist_track WHERE TrackId = "${id}"`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json("Track Successfully Deleted from the playlist")
        });
    }
}

module.exports = controllers;