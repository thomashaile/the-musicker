const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {

        const sql = `SELECT * FROM media_types`;

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
        const sql = `SELECT * FROM media_types WHERE MediaTypeId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json(rows)
        });
    },
    create: (req, res) => {
        // read row data from body
        const newMedia = req.body;
        const sql = `INSERT INTO media_types (MediaTypeId,Name)
        VALUES(${newMedia.id},'${newMedia.name}')`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("New media type added successfully...")
        });
    },
    update: (req, res) => {
        // read row data from body
        const id = req.params.id;
        const newMedia = req.body;
        const sql = `UPDATE media_types SET Name ='${newMedia.name}' WHERE MediaTypeId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("Media type record updated.....")
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        const sql = `DELETE FROM media_types WHERE MediaTypeId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json("Media Type Successfully Deleted")
        });
    }
}

module.exports = controllers;