import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../config/config.js';

// This middleware will conditionally remove the debug grid from your HTML
// based on the feature flag.
export const debugGridMiddleware = (req, res, next) => {
  // Check our feature flag from the centralized config file.
  if (config.flags.showDebugGrid) {
    // In development, the flag is true, so we do nothing and let the next handler
    // (which serves the static file) send the HTML as is.
    return next();
  }

  // If the flag is false (i.e., in production), we modify the HTML on the fly.
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  // Assuming your built frontend is in a 'dist' folder relative to the project root.
  const filePath = path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error reading index.html for modification:', err);
      return res.status(500).send('Error loading page');
    }
    // Use a regular expression to safely remove the class attribute.
    const modifiedHtml = htmlData.replace(/class=".*grid-overlay.*"/, '');
    res.send(modifiedHtml);
  });
};
