// chatbot.js
import { extractIntent } from './nlp.js';

const responses = {
  order: "Please provide your order number to check the status or track your shipment.",
  return: "Our return policy allows returns within 30 days of purchase. Items must be unused and in original packaging. Would you like to start a return?",
  shipping: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 days. Need more details?",
  human: "I can connect you to a human agent. Please hold, and someone will assist you shortly.",
  faq: "Common questions include order status, returns, and shipping times. Ask me about any of these!",
  default: "I'm not sure I understand. Try asking about order status, returns, shipping, or type 'contact human' for live support."
};

function addMessage(message, isUser) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
  const intent = extractIntent(userMessage);
  return responses[intent] || responses['default'];
}

// attach event listeners after DOM loads
window.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const chatBox = document.getElementById('chat-box');

  sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
      addMessage(userMessage, true);
      const botResponse = getBotResponse(userMessage);
      setTimeout(() => addMessage(botResponse, false), 500);
      userInput.value = '';
    }
  });

  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && userInput.value) {
      sendButton.click();
    }
  });

  // Initial greeting
  addMessage("Hello! I'm your AI customer service chatbot, available 24/7. Ask about orders, returns, shipping, or type 'contact human' for live support.", false);
});
