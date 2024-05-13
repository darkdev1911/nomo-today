import express from 'express';
import * as fs from "fs";
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001; // or any other port you prefer

// POST request to add a new entry
app.post('/addEntry', (req, res) => {
    const filePath = '/home/stefanheher/nomo_development/nomo-today/backend/dist/entries.txt';
    const entry = req.body.entry;
    fs.appendFile(filePath, entry + '\n', (err) => {
        if (err) {
            console.error('Error appending entry:', err);
            res.status(500).send('Error adding entry');
        } else {
            console.log('Entry added successfully:', entry);
            res.send('Entry added successfully!');
        }
    });
});

// GET request to get all entries
app.get('/allEntries', (req, res) => {
    const filePath = '/home/stefanheher/nomo_development/nomo-today/backend/dist/entries.txt';
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
        } else {
            const entries = data.trim().split('\n');
            res.json(entries);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});