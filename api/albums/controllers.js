const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {

        const sql = `SELECT
        tracks.TrackId AS TrackId,tracks.Name AS TrackName,
        albums.AlbumId AS AlbumId,albums.Title AS AlbumTitle,albums.ArtistId AS ArtistId,
        artists.Name AS ArtistName
    FROM
        tracks
        LEFT JOIN albums ON albums.AlbumId = tracks.AlbumId
        LEFT JOIN artists ON artists.ArtistId = albums.ArtistId`;

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
        const sql = `SELECT 
        albums.AlbumId AS AlbumId,
        albums.Title AS AlbumTitle,albums.ArtistId AS ArtistId,
        artists.Name AS ArtistName
    FROM
        albums
        LEFT JOIN artists ON artists.ArtistId = albums.ArtistId 
        WHERE AlbumId = "${id}"`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json(rows)
        });

    },
    getOneByArtist: (req, res) => {
        const id = req.params.id;
        const sql = `SELECT * FROM albums WHERE ArtistId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            console.log(rows)
            res.json(rows)
        });

    },
    create: (req, res) => {
        // read row data from body
        const newAlbum = req.body;
        const sql = `INSERT INTO albums (AlbumId,Title,ArtistId)
        VALUES(${newAlbum.id},'${newAlbum.title}',${newAlbum.artistId})`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("New album added successfully...")
        });
    },
    update: (req, res) => {
        // read row data from body
        const id = req.params.id;
        const newAlbum = req.body;
        const sql = `UPDATE albums SET Title ='${newAlbum.title}',ArtistId =${newAlbum.artistId} WHERE AlbumId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("Album record updated.....")
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        const sql = `DELETE FROM albums WHERE AlbumId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json("Album Successfully Deleted")
        });
    }
}

module.exports = controllers;