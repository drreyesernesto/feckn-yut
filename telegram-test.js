import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BOT_TOKEN = "8207876989:AAGcJdODwY74sVflJXDeXOjqa4KaSFff--s";
const CHAT_ID = "1037827212";

async function testTelegram() {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("❌ BOT_TOKEN or CHAT_ID missing in .env");
    return;
  }

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const res = await axios.post(url, {
      chat_id: CHAT_ID,
      text: "✅ Telegram test message from your Node.js script!"
    });

    console.log("✅ Message sent successfully:", res.data);
  } catch (err) {
    console.error("❌ Telegram error:", err.response?.data || err.message);
  }
}

testTelegram();
