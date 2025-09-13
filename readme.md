# AI Customer Service Chatbot

A modular AI-powered chatbot for customer service, providing 24/7 support for common queries like order status, returns, and shipping using NLP.

## File Structure
- `index.html`: Main HTML file with the chatbot UI.
- `css/styles.css`: Custom CSS for styling beyond Tailwind CSS.
- `js/chatbot.js`: Core chatbot logic (DOM manipulation, responses).
- `js/nlp.js`: NLP processing for intent detection using `compromise`.
- `assets/data/responses.json`: Response mappings for the chatbot.
- `package.json`: Node.js configuration for dependencies and scripts.
- `assets/images/`: Placeholder for UI images (currently empty).

## Setup Instructions
1. Clone the repository or download the files.
2. Install Node.js if not already installed.
3. Run `npm install` to install dependencies (e.g., `live-server`).
4. Run `npm start` to launch the chatbot on `http://localhost:8080`.
5. Open the URL in a browser to interact with the chatbot.

## Dependencies
- Tailwind CSS (via CDN)
- Compromise NLP library (via CDN)
- live-server (for local development)

## Usage
- Type queries like "track my order", "return policy", or "contact human".
- The chatbot uses NLP to detect intent and respond instantly.
- Responses are stored in `responses.json` for easy updates.

## Extending the Chatbot
- Add more intents in `nlp.js` and responses in `responses.json`.
- Integrate a backend API (e.g., via https://x.ai/api) for dynamic data like order tracking.
- Add images to `assets/images/` for UI enhancements.

## License
MIT License