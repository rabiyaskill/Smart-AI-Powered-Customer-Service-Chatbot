// nlp.js
export function extractIntent(userMessage) {
  const text = userMessage.toLowerCase();

  if (text.includes("order") || text.includes("status") || text.includes("track") || text.includes("package")) {
    return "order";
  } else if (text.includes("return") || text.includes("refund") || text.includes("exchange")) {
    return "return";
  } else if (text.includes("shipping") || text.includes("delivery") || text.includes("ship")) {
    return "shipping";
  } else if (text.includes("human") || text.includes("agent") || text.includes("support")) {
    return "human";
  } else if (text.includes("faq") || text.includes("help") || text.includes("question")) {
    return "faq";
  }
  return "default";
}
