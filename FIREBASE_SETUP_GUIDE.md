# 🔥 Firebase Setup Guide for BudgetBuddy

## ⚡ Quick Overview

**Time Required:** 10-15 minutes  
**Cost:** ₹0 (Free tier)  
**What You'll Get:**
- ✅ Google Sign-In for users
- ✅ Cloud data sync across devices
- ✅ Multi-user support
- ✅ Real-time data storage

---

## 📋 Step-by-Step Setup

### Step 1: Create Firebase Project (5 minutes)

1. **Go to Firebase Console**
   - Visit: [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Sign in with your Google account

2. **Create New Project**
   - Click **"Add project"** or **"Create a project"**
   - Project name: `BudgetBuddy` (or any name you like)
   - Click **Continue**

3. **Google Analytics** (Optional)
   - Toggle OFF "Enable Google Analytics" (not needed for this app)
   - Click **Create project**
   - Wait 30 seconds for setup to complete
   - Click **Continue**

---

### Step 2: Register Your Web App (3 minutes)

1. **Add Web App**
   - In your Firebase project dashboard
   - Click the **Web icon** (`</>`) that says "Add an app to get started"
   - Or go to: Project Settings → General → Your apps → Add app

2. **Register App**
   - App nickname: `BudgetBuddy Web`
   - ✅ Check **"Also set up Firebase Hosting"** (recommended but optional)
   - Click **Register app**

3. **Copy Config Values** 
   - You'll see a code block that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "budgetbuddy-xxx.firebaseapp.com",
  projectId: "budgetbuddy-xxx",
  storageBucket: "budgetbuddy-xxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

   - **IMPORTANT:** Copy these 6 values! You'll need them in Step 4.
   - Click **Continue to console**

---

### Step 3: Enable Google Authentication (2 minutes)

1. **Open Authentication**
   - In the left sidebar, click **"Build"** → **"Authentication"**
   - Click **"Get started"**

2. **Enable Google Sign-In**
   - Go to the **"Sign-in method"** tab
   - Find **"Google"** in the list
   - Click on it
   - Toggle **"Enable"** to ON
   - **Project support email:** Select your email from dropdown
   - Click **"Save"**

---

### Step 4: Enable Firestore Database (2 minutes)

1. **Open Firestore**
   - In the left sidebar, click **"Build"** → **"Firestore Database"**
   - Click **"Create database"**

2. **Security Rules**
   - Select **"Start in test mode"** (we'll secure it later)
   - Click **Next**

3. **Location**
   - Choose **"asia-south1 (Mumbai)"** or closest to you
   - Click **"Enable"**
   - Wait ~30 seconds for database to be created

4. **Update Security Rules** (Important for production!)
   - Go to the **"Rules"** tab
   - Replace the code with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

   - Click **"Publish"**
   - This ensures each user can only access their own data!

---

### Step 5: Configure Your App (3 minutes)

1. **Open Your `index.html` File**
   - Find this section near the top:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

2. **Replace with Your Values**
   - Copy the values from Step 2
   - Replace each `YOUR_...` with your actual values

**Example:**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1234567890abcdefg",
  authDomain: "budgetbuddy-a1b2c.firebaseapp.com",
  projectId: "budgetbuddy-a1b2c",
  storageBucket: "budgetbuddy-a1b2c.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

3. **Save the File**

---

### Step 6: Authorize Your Domain (2 minutes)

This step is **critical** for Google Sign-In to work!

1. **Get Your Domain**
   - If using GitHub Pages: `https://zaynah15.github.io`
   - If using Vercel: Your Vercel domain
   - If testing locally: `http://localhost:8000` or `http://localhost:5000`

2. **Add to Firebase**
   - In Firebase Console, go to **Authentication** → **Settings** tab
   - Scroll to **"Authorized domains"**
   - Click **"Add domain"**
   - Enter your domain (e.g., `zaynah15.github.io`)
   - Click **"Add"**

**For GitHub Pages:**
- Add: `zaynah15.github.io` (without https://)

**For local testing:**
- `localhost` is already authorized by default ✅

---

## ✅ Testing Your Setup

### Test Locally First

1. **Start a local server:**
```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js
npx http-server -p 8000
```

2. **Open in browser:**
   - Go to: `http://localhost:8000`

3. **Test sign-in:**
   - Click "Continue with Google"
   - Sign in with your Google account
   - Should redirect back to the app
   - You should see your name and profile photo

4. **Test data sync:**
   - Log a transaction
   - Open Firebase Console → Firestore Database
   - Should see a `users` collection with your data!

### Deploy to GitHub Pages

1. **Upload files to GitHub:**
   - `index.html` (with your Firebase config)
   - `manifest.json`
   - `sw.js`

2. **Enable GitHub Pages:**
   - Settings → Pages → Source: main branch
   - Save

3. **Test on your phone:**
   - Visit: `https://zaynah15.github.io/budgetbuddy/`
   - Sign in
   - Log some transactions
   - Open on another device with same Google account
   - Data should sync! ✨

---

## 🔒 Important Security Notes

### Do NOT Share These Values Publicly:
- ✅ **API Key** - Safe to include in public code (it's restricted by domain)
- ✅ **Auth Domain** - Public
- ✅ **Project ID** - Public
- ✅ **Storage Bucket** - Public
- ✅ **Messaging Sender ID** - Public
- ✅ **App ID** - Public

**However:** Make sure your Firestore security rules are set correctly (Step 4) so users can only access their own data!

### Firestore Security Rules Explained:
```javascript
// Users can only read/write their own data
match /users/{userId} {
  allow read, write: if request.auth != null && request.auth.uid == userId;
}
```

This means:
- ✅ Authenticated users can access their own data
- ❌ Users cannot see other users' data
- ❌ Unauthenticated users cannot access any data

---

## 🚨 Troubleshooting

### "Firebase not configured" Error
**Problem:** App shows yellow warning box  
**Solution:** Make sure you replaced ALL 6 values in `firebaseConfig`

### "Domain not authorized" Error
**Problem:** Sign-in popup closes immediately  
**Solution:** 
1. Go to Firebase Console → Authentication → Settings
2. Add your domain to "Authorized domains"
3. For GitHub Pages: Add `zaynah15.github.io` (no `https://`)

### "Permission denied" Error
**Problem:** Can't save data to Firestore  
**Solution:**
1. Check Firestore Rules (Step 4)
2. Make sure you're signed in
3. Check browser console for specific error

### Sign-In Popup Blocked
**Problem:** Browser blocks the sign-in popup  
**Solution:**
- Allow popups for your domain in browser settings
- Or try a different browser (Chrome works best)

### Data Not Syncing
**Problem:** Changes on one device don't appear on another  
**Solution:**
1. Make sure both devices are signed in with the SAME Google account
2. Check Firebase Console → Firestore to see if data is being saved
3. Try refreshing the page

### Localhost Works But GitHub Pages Doesn't
**Problem:** App works locally but fails on GitHub Pages  
**Solution:**
1. Add your GitHub Pages domain to Firebase authorized domains
2. Make sure you're using `https://` (not `http://`)
3. Clear browser cache and try again

---

## 💰 Pricing & Limits

### Firebase Free Tier (Spark Plan)

**Firestore Database:**
- ✅ 1 GB storage
- ✅ 50,000 reads/day
- ✅ 20,000 writes/day
- ✅ 20,000 deletes/day

**This means:**
- ~5,000 transactions logged per day (way more than you need!)
- Syncs across unlimited devices
- Supports unlimited users
- **₹0 cost unless you exceed these limits**

### When You'd Need to Upgrade:
- If you have 100+ active users logging 50+ transactions each per day
- For BudgetBuddy personal use: **You'll never hit the limits!**

---

## 📊 Monitoring Usage

1. **Check Usage:**
   - Firebase Console → Firestore Database → Usage tab
   - See reads/writes per day

2. **Set Budget Alerts:**
   - Project Settings → Usage and billing
   - Set up email alerts if approaching limits

---

## 🎯 Next Steps After Setup

Once Firebase is configured:

1. **Test on Multiple Devices:**
   - Sign in on your phone
   - Sign in on your laptop
   - Log transactions on each
   - Verify they sync in real-time!

2. **Invite Friends:**
   - Share the app URL
   - Each friend signs in with their Google account
   - They each get their own separate budget data

3. **Enable Notifications:**
   - Click "Enable" when the notification banner appears
   - Get daily reminders at 2 PM & 9 PM

4. **Try Dark Mode:**
   - Tap the moon/sun icon in top-right
   - Switches between light and dark theme
   - Preference saved per user

---

## 🆘 Still Need Help?

### Check These Resources:

1. **Firebase Documentation:**
   - [Get Started with Firebase](https://firebase.google.com/docs/web/setup)
   - [Cloud Firestore](https://firebase.google.com/docs/firestore)

2. **Common Issues:**
   - Check browser console (F12) for error messages
   - Check Firebase Console → Authentication → Users (should see yourself listed)
   - Check Firestore Database → Data (should see `users` collection)

3. **Test Checklist:**
   - [ ] Firebase config values replaced in index.html
   - [ ] Google Authentication enabled
   - [ ] Firestore Database created
   - [ ] Security rules updated
   - [ ] Domain added to authorized domains
   - [ ] Can sign in successfully
   - [ ] Can see profile photo and name
   - [ ] Can log transactions
   - [ ] Data appears in Firestore Console
   - [ ] Data syncs between devices

---

**🎉 Congratulations!** You now have a fully functional multi-user budget tracker with cloud sync!

Your friends can use the same URL, each signing in with their own Google account, and everyone's data stays private and synced across their devices. ✨
