function getChatbotResponse(message) {
  const msg = message.toLowerCase();
  if (msg.includes('crop')) return 'Please enter your city and soil type for crop recommendation.';
  if (msg.includes('fertilizer')) return 'Tell me your crop and soil pH level for fertilizer advice.';
  if (msg.includes('irrigation')) return 'Irrigation depends on crop and rainfall. What crop are you growing?';
  if (msg.includes('market')) return 'You can check mandi prices on eNAM or Agmarknet.';
  return 'Sorry, I didn’t understand. Try asking about crop, fertilizer, or irrigation.';
}

module.exports = { getChatbotResponse };
