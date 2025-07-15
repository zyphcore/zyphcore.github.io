const express = require('express');
const multer  = require('multer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const config = require('./config.json');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('.'));

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  const filePath = path.join(__dirname, req.file.path);
  const webhookUrl = config.webhook_url;

  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath), req.file.originalname);

  try {
    await axios.post(webhookUrl, formData, {
      headers: formData.getHeaders()
    });
    res.send('File uploaded and sent to Discord!');
  } catch (error) {
    res.status(500).send('Error sending to Discord: ' + error.message);
  } finally {
    fs.unlink(filePath, () => {}); // delete file after upload
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
