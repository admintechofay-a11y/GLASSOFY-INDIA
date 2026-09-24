import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { handleEmailApi } from './server/apiMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route for nodemailer contact email
app.post('/api/send-email', (req, res) => {
  handleEmailApi(req, res);
});

// Serve production static assets
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Glassofy Server] Production server running on http://localhost:${PORT}`);
  console.log(`[Glassofy Server] Nodemailer API active on POST http://localhost:${PORT}/api/send-email`);
});
