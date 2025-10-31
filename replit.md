# Portfolio Website

## Overview
This is a simple static portfolio website displaying "Hello World". The project was imported from GitHub and configured to run in the Replit environment.

## Project Structure
- `index.html` - Main HTML file
- `CSS/Myportfolio.css` - Stylesheet (currently empty)
- `JS/Myportfolio.js` - JavaScript file (currently empty)
- `server.js` - Express server for serving static files
- `package.json` - Node.js dependencies

## Recent Changes (October 31, 2025)
- Imported project from GitHub
- Created Express server to serve static files on port 5000
- Configured server with cache-control headers for proper preview functionality
- Set up workflow for frontend
- Configured deployment for autoscale
- Added .gitignore for Node.js

## Technical Setup
- **Framework**: Static HTML/CSS/JS served via Express
- **Port**: 5000 (frontend)
- **Host**: 0.0.0.0 (allows Replit proxy access)
- **Deployment**: Autoscale (stateless website)

## Running the Project
The project automatically starts via the `npm start` command which runs the Express server on port 5000.
