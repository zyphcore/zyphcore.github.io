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

app.post('/upload', upload.array('files'), async (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).send('No files uploaded.');

  const webhookUrl = config.webhook_url;

  try {
    for (const file of req.files) {
      const filePath = path.join(__dirname, file.path);
      const formData = new FormData();
      formData.append('file', fs.createReadStream(filePath), file.originalname);

      await axios.post(webhookUrl, formData, {
        headers: formData.getHeaders()
      });

      fs.unlink(filePath, () => {}); // Delete file after upload
    }

    res.send('All files uploaded and sent to Discord!');
  } catch (error) {
    res.status(500).send('Error sending to Discord: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
