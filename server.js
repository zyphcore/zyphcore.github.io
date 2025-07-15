const express = require('express');
const multer  = require('multer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const config = require('./config.json');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('.'));

app.post('/upload', upload.single('files'), async (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  const webhookUrl = process.env.WEBHOOK_URL;

  try {
    const file = req.file;
    const filePath = path.join(__dirname, file.path);
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath), file.originalname);

    await axios.post(webhookUrl, formData, {
      headers: formData.getHeaders()
    });

    fs.unlink(filePath, () => {}); // Delete file after upload

    res.send('File uploaded and sent to Discord!');
  } catch (error) {
    res.status(500).send('Error sending to Discord: ' + error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listening on port", PORT));
