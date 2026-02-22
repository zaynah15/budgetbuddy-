const { onSchedule } = require("firebase-functions/v2/scheduler");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getMessaging } = require("firebase-admin/messaging");

initializeApp();

const MESSAGES = [
  "Did you spend anything recently? Log it now! 💸",
  "Track your spending — 30 seconds is all it takes 🧾",
  "Any unlogged expenses? Keep your budget on track 👜",
  "Quick log your recent spending before you forget! 💰",
  "How's the budget going? Log your spends! ✨",
  "Money check-in time! Open Spendora 📲",
];

exports.sendSpendingReminder = onSchedule(
  { schedule: "30 1,4,7,10,13,16 * * *", timeZone: "Asia/Kolkata" },
  async () => {
    const db = getFirestore();
    const messaging = getMessaging();
    const body = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

    const usersSnap = await db.collection("users").get();
    const sends = [];

    usersSnap.forEach(doc => {
      const { fcmToken } = doc.data();
      if (!fcmToken) return;
      sends.push(
        messaging.send({
          token: fcmToken,
          notification: { title: "Spendora 💸", body },
          webpush: {
            notification: {
              icon: "https://zaynah15.github.io/budgetbuddy/logo.png",
              badge: "https://zaynah15.github.io/budgetbuddy/logo.png",
              vibrate: [200, 100, 200],
            },
            fcmOptions: {
              link: "https://zaynah15.github.io/budgetbuddy/",
            },
          },
        }).catch(e => console.log("Failed for", doc.id, e.message))
      );
    });

    await Promise.all(sends);
    console.log(`Sent ${sends.length} notifications`);
  }
);