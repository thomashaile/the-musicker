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
        const sql = `SELECT * FROM playlists WHERE PlaylistId = "${id}"`;
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
        const id = Number(req.body.id);
        const name = Number(req.body.name);
        const sql = `
                INSERT INTO playlist_track(PlaylistId, TrackId)
                VALUES(${id}, ${name})
                `;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("track added successfully...")
        });
    },
    create: (req, res) => {
        // read row data from body
        const id = Number(req.body.id);
        const name = req.body.name;
        const sql = `INSERT INTO playlists(PlaylistId, Name)
        VALUES(${id}, '${name}')`;
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(newList.name);
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("Playlist added successfully...")

        })
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