# 🌸 BudgetBuddy - Complete Features Guide

## ✨ What's Included

Your BudgetBuddy app now has ALL these features:

| Feature | Status | Description |
|---|---|---|
| **Google Sign-In** | ✅ Ready | Multi-user support with secure authentication |
| **Cloud Sync** | ✅ Ready | Data syncs across all your devices via Firebase |
| **Dark Mode** | ✅ Ready | Beautiful dark theme with toggle button |
| **SMS Parsing** | ✅ Ready | Auto-extract amounts from HDFC bank SMS |
| **Daily Notifications** | ✅ Ready | Reminders at 2 PM & 9 PM |
| **Category Tracking** | ✅ Ready | 5 categories with circular progress rings |
| **Budget Warnings** | ✅ Ready | Alerts when ₹300 left or over budget |
| **Discipline Score** | ✅ Ready | Gamified tracking of spending behavior |
| **Transaction History** | ✅ Ready | View all past transactions |
| **Monthly Reset** | ✅ Ready | Fresh start for new month |
| **Confetti Celebration** | ✅ Ready | When all categories under budget |
| **Vibration Feedback** | ✅ Ready | Phone vibrates on warnings |
| **PWA Installation** | ✅ Ready | Install to home screen like native app |
| **Offline Support** | ✅ Ready | Works without internet (after first load) |

---

## 👥 Multi-User Support

### How It Works

**Each user gets their own account:**
- Sign in with Google account
- Your data is private and separate
- Can't see other users' budgets or transactions
- Works across all your devices

**Perfect for:**
- You using it on phone + laptop + tablet
- Sharing the app URL with friends (they get their own account)
- Family members each having their own budget

### User Profile Features

**Top-left corner shows:**
- Your profile photo from Google
- Your first name
- "Sign Out" button

**Account Switch:**
- Sign out
- Different person signs in
- Gets their own fresh budget/transactions

---

## 🌙 Dark Mode

### How to Toggle

**Tap the sun/moon button** in top-right corner:
- ☀️ = Currently in dark mode, tap for light
- 🌙 = Currently in light mode, tap for dark

### What Changes

**Light Mode:**
- Cream background (#FFF8F2)
- White cards
- Purple text
- Soft shadows

**Dark Mode:**
- Deep purple-black background (#1a0a20)
- Dark purple cards (#2d1a35)
- Light pastel text
- Glowing rings look amazing!

**Your preference saves per user** - if you prefer dark mode, it stays dark even after closing the app.

---

## 📱 SMS Parsing (Auto-Fill Amounts)

### Method 1: Paste Button (Easiest!)

1. Get HDFC SMS: `"Rs.250.00 debited from A/c..."`
2. **Long-press the SMS** → Copy
3. Open BudgetBuddy
4. Tap **"📋 Paste SMS to Auto-Fill Amount"** button
5. Amount auto-fills (₹250)
6. Category picker opens → Tap bucket → Done!

### Method 2: Share Sheet (Android Only)

**After installing the PWA:**
1. Get HDFC SMS
2. Long-press the SMS
3. Tap "Share"
4. Look for **"BudgetBuddy"** in the share menu
5. Tap it → App opens with amount filled!

### Supported SMS Formats

Works with these HDFC patterns:
- ✅ `Rs.250.00 debited from HDFC Bank A/c`
- ✅ `Rs 190.00 credited to HDFC Bank A/c`
- ✅ `INR 500 debited`
- ✅ `₹1000 credited`

---

## 🔔 Daily Notifications

### Setup

**First time using the app:**
- After 3 seconds, banner appears at top
- "Stay on track! Get daily reminders at 2 PM & 9 PM"
- Tap **"Enable"**
- Browser asks permission → **Allow**
- Done!

### What Happens

**Every day at 2 PM:**
- Notification: "Hey! 🌸 Did you spend anything today?"
- Tap notification → Quick-log modal opens
- Enter amount → Pick category → Done!

**Every day at 9 PM:**
- Same reminder
- Helps you log end-of-day spending

### Quick-Log Modal

When you tap a notification:
1. Modal appears with amount field
2. Type amount or paste SMS
3. Grid of 5 category buttons
4. Tap one → Logged!
5. Or tap "Skip" if you didn't spend

---

## 💸 Logging Transactions

### The Flow

**Standard way:**
1. Tap "💸 Log Spend" tab (if not already there)
2. Enter amount manually OR tap "📋 Paste SMS"
3. Tap **"Add ➕"**
4. Category sheet slides up from bottom
5. Shows remaining balance for each category
6. Tap the right bucket
7. Done! ✨

**Each category card shows:**
- Emoji + Name
- How much is left AFTER this transaction
- Mini progress bar
- Color-coded:
  - 🟢 Green zone: Plenty left
  - 🟡 Yellow zone: ⚡ ₹180 left (getting close)
  - 🔴 Red zone: ⚠️ Over ₹50 (would exceed budget)

**You can still log even if over budget** - the app will warn you but won't stop you.

### Quick Amount Buttons

Below the input field:
- **₹50, ₹100, ₹200, ₹500, ₹1000**
- Tap any to instantly fill that amount
- Great for common purchases

### Optional Note Field

Add context to transactions:
- "Lunch with friends"
- "Uber to airport"
- "New shoes from Nike"
- Shows in transaction history

---

## 📊 Category Tracking

### The 5 Categories

| Category | Default Budget | Emoji |
|---|---|---|
| **Food** | ₹2,000/month | 🍜 |
| **Clothing** | ₹1,500/month | 👗 |
| **Travel** | ₹1,000/month | ✈️ |
| **Education** | ₹1,500/month | 📚 |
| **Hobbies** | ₹800/month | 🎮 |

**Total:** ₹6,800/month

### Circular Progress Rings

**What they show:**
- Outer ring = progress toward budget
- Emoji in center (changes to 😵 when over)
- Category name below
- "₹X left" remaining balance

**Colors:**
- Normal: Category color (pink, blue, green, etc.)
- Warning (₹300 left): Orange
- Over budget: Red with pulsing glow

### Overall Progress Bar

**At the top of the screen:**
- Shows total spent vs total budget
- "₹2,150 / ₹6,800" (31% used)
- Color changes:
  - Green gradient: < 60% used
  - Yellow gradient: 60-90% used
  - Red gradient: > 90% used

---

## ⚠️ Budget Warnings & Alerts

### 50% Used (Soft Reminder)

**Toast notification:**
- "💡 Halfway through Food budget!"
- Blue info toast
- No vibration

### ₹300 or Less Remaining (Warning)

**Strong warning:**
- "⚠️ Only ₹180 left in Food!"
- Orange warning toast
- **Phone vibrates** (if on mobile)
- Category ring turns orange

**For Food category specifically:**
- Random nudge appears at bottom:
  - "🌿 Eat intentionally."
  - "😋 Hungry or just bored?"
  - "💭 Need or craving?"
  - Tap ✕ to dismiss

### Over Budget (Glutton Modal)

**When you exceed a budget:**
- Full-screen modal appears
- **Wobbling 😵‍💫 emoji**
- "Budget Busted! 🚫"
- "You crossed your [Food] limit."
- "No. You crossed your limit."
- Quote: "Small leaks sink great ships."
- **Vibration pattern:** strong 
- Tap **"I'll do better 💪"** to close

**Your discipline score drops** by 10 points.

---

## 🏆 Discipline Score

### How It Works

**Starts at:** 100 points

**Loses points when:**
- -10 points: Go over any budget
- -3 points: Get down to ₹300 remaining (warning zone)

**Score never goes below 0.**

**Levels:**
- 80-100: "Champion 🏆" (green)
- 60-79: "On Track 🌟" (blue)
- 40-59: "Careful 🌿" (orange)
- 0-39: "Danger Zone 🔥" (red)

**Shown in top-right** of header next to your name.

**Resets to 100** when you start a new month.

---

## 🎉 Confetti Celebration

**Triggers when:**
- You log a transaction
- AND all 5 categories are still under budget
- AND you have at least one transaction logged

**What happens:**
- Colorful confetti falls from top of screen
- Lasts 3 seconds
- Makes you feel good about staying on track! 🎊

---

## 📋 Transaction History

### Viewing History

**Tap "📋 History" tab** at top

**Each transaction shows:**
- Category emoji + name
- Optional note (if you added one)
- Date and time logged
- Amount (in red with minus sign)

**Sorted:** Newest first

**Design:**
- Smooth slide-in animation for newest transaction
- Color-coded border per category
- Scrollable list

**If no transactions yet:**
- Shows "🌸 No transactions yet!"
- Prompts you to log first spend

---

## ⚙️ Editing Budgets

### How to Edit

1. Tap **"⚙️ Edit Budgets"** button at bottom
2. Setup screen appears
3. Change any category amount:
   - Food: ₹___
   - Clothing: ₹___
   - Travel: ₹___
   - Education: ₹___
   - Hobbies: ₹___
4. Tap **"Save & Continue 🚀"**
5. Returns to main screen with updated budgets

**Your spending amounts don't change** - only the budgets are updated.

**Good for:**
- Adjusting budgets mid-month
- Increasing a category you're using more
- Decreasing one you don't need as much

---

## 🔄 Monthly Reset

### How to Reset

**At the end of the month:**
1. Tap **"🔄 New Month"** button
2. Confirmation: "Reset for new month?"
3. Tap **OK**

**What resets:**
- ✅ All spending amounts → ₹0
- ✅ Transaction history → cleared
- ✅ Discipline score → 100
- ✅ Month label → updates to new month

**What stays:**
- ✅ Your budget amounts (₹2000 for food, etc.)
- ✅ Your notification settings
- ✅ Your theme preference (dark/light)

**Celebration:**
- "🌸 Fresh start!" success toast
- Confetti animation
- Clean slate for new month!

---

## 🔄 Cloud Sync Features

### Real-Time Sync

**Every change you make:**
- Saves to Firebase Firestore
- Syncs across all your devices
- Happens automatically

**Syncing indicator:**
- Small "Syncing..." badge bottom-right
- Appears briefly when saving
- Disappears when complete

### Multi-Device Usage

**Use on multiple devices:**
1. Sign in with same Google account on phone
2. Sign in with same account on laptop
3. Log transaction on phone → appears on laptop
4. Change budget on laptop → updates on phone

**Perfect for:**
- Logging on phone while shopping
- Reviewing on laptop at home
- Checking on tablet

### Offline Support

**Works offline after first load:**
- Can view all data
- Can log transactions
- **Changes save locally**
- Auto-syncs when back online

**First load requires internet** to:
- Download app files
- Sign in with Google
- Load your data from cloud

---

## 📱 PWA Installation

### Installing on Phone (Android)

**Using Chrome:**
1. Visit your GitHub Pages URL
2. Tap menu (⋮) → **"Install app"** or **"Add to Home Screen"**
3. Choose name → Add
4. Icon appears on home screen

**Using Samsung Internet:**
1. Visit URL
2. Tap menu → "Add page to"
3. Home screen
4. Done!

**After installation:**
- Opens full-screen (no browser bar)
- Looks like native app
- Can receive notifications
- Works offline
- Shows in app drawer

### Installing on Desktop

**Chrome/Edge:**
1. Visit URL
2. Look for install icon (⊕) in address bar
3. Or: Menu → "Install BudgetBuddy..."
4. Click Install
5. App opens in own window

**Adds to:**
- Start menu (Windows)
- Applications (Mac)
- Desktop shortcut (optional)

---

## 🎨 UI Customization

### Available Themes

**Light Mode (Default):**
- Cream background
- Soft pastels
- Best for daytime use

**Dark Mode:**
- Deep purple-black
- Glowing effects
- Easier on eyes at night

**Toggle anytime** with sun/moon button.

### Color-Coded Categories

Each category has its own color:
- 🍜 Food: Pink (#FFB6C1)
- 👗 Clothing: Blue (#B5D8FF)
- ✈️ Travel: Mint (#C1F0DC)
- 📚 Education: Lavender (#E6E6FA)
- 🎮 Hobbies: Peach (#FFD6BA)

**Helps you quickly identify:**
- Which category in history
- Progress in rings
- Warnings and alerts

---

## 🎯 Tips for Best Experience

### Daily Routine

**Morning:**
- Enable notifications once

**During Day:**
- Get spending SMS → Long-press → Copy
- Open BudgetBuddy → Tap "📋 Paste SMS"
- Pick category → Done!
- Takes < 10 seconds

**Evening (9 PM):**
- Notification reminds you
- Tap notification to quick-log
- Or open app to review the day

**End of Month:**
- Review transaction history
- Check discipline score
- Tap "🔄 New Month" when ready

### Staying Under Budget

**Strategies:**
1. **Check before spending:**
   - Open app
   - Look at rings
   - "Can I afford this?"

2. **Use the warnings:**
   - Orange (₹300 left) = slow down
   - Red (over) = stop spending in that category

3. **Track immediately:**
   - Don't wait until end of day
   - Log right after purchasing
   - Use SMS paste for speed

4. **Review weekly:**
   - Check history on Sundays
   - See where money is going
   - Adjust budgets if needed

### Friend Sharing

**To let friends use it:**
1. Share your GitHub Pages URL
2. They open it → Sign in with their Google
3. They get their own account
4. Can't see your data (and you can't see theirs)

**Each friend gets:**
- Own budgets
- Own transactions
- Own discipline score
- Own theme preference
- Own notification settings

---

## 🔒 Privacy & Security

### Your Data

**Stored in:**
- Firebase Firestore (Google's database)
- Your browser's localStorage (as backup)

**Who can see it:**
- ✅ Only you (when signed in)
- ❌ Not other users
- ❌ Not even the app creator

**Security rules ensure:**
- Each user can only access their own data
- Sign-in required to read/write
- Data encrypted in transit

### Signing Out

**When you sign out:**
- Removed from this device
- Still saved in cloud
- Sign back in on any device to restore

**Data persists** across:
- Sign out → sign in
- Uninstall → reinstall
- Device change

---

## 📈 Future Feature Ideas

While not built yet, here are features that could be added:

**Analytics:**
- Spending trends over months
- Category comparison charts
- Average daily spending

**Goals:**
- "Save ₹5000 by next month"
- Progress bar toward goal
- Celebration when achieved

**Recurring Transactions:**
- "Netflix ₹500 every month"
- Auto-logs on schedule

**Split Transactions:**
- "Lunch ₹600: ₹300 food + ₹300 travel"
- Divides into multiple categories

**Export Data:**
- Download CSV of all transactions
- Generate PDF reports
- Email monthly summary

**Widgets:**
- Android home screen widget
- iOS lock screen widget
- Quick log without opening app

---

## 🆘 Troubleshooting

### Common Issues

**Problem:** Share sheet doesn't show BudgetBuddy  
**Solution:** Must install as PWA first, then Android will add it to share menu

**Problem:** Notifications don't work  
**Solution:** Check phone's Do Not Disturb mode and app notification permissions

**Problem:** Dark mode doesn't save  
**Solution:** Make sure you're signed in (theme preference tied to account)

**Problem:** Data doesn't sync between devices  
**Solution:** Verify you're using the SAME Google account on both devices

**Problem:** "Firebase not configured" warning  
**Solution:** Follow FIREBASE_SETUP_GUIDE.md to add your config values

---

## 📱 Technical Specs

**Built with:**
- React 18
- Firebase Authentication
- Cloud Firestore
- PWA (Progressive Web App)
- Service Workers
- Web Notifications API
- Clipboard API
- Vibration API
- Share Target API

**Supported browsers:**
- Chrome/Edge (Android & Desktop) - ✅ Full support
- Safari (iOS) - ⚠️ Limited (no share target, notifications)
- Firefox - ✅ Most features work

**Supported devices:**
- Android phones - ✅ All features
- iPhones - ⚠️ Most features (no SMS share, limited notifications)
- Tablets - ✅ All features
- Desktop - ✅ All features (no vibration)

---

**🎉 You're all set!** Enjoy tracking your spending with BudgetBuddy! 🌸
