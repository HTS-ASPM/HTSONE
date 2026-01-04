# Web3Forms Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Web3Forms Access Key

1. **Go to Web3Forms:** https://web3forms.com/
2. **Enter your email:** contact@hts.consulting
3. **Click "Create Access Key"**
4. **Copy the access key** (it will be emailed to you as well)

**That's it! No account signup required.**

---

### Step 2: Add the Access Key to Your Code

Open `/app/frontend/src/LandingPage.jsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key in **two places**:

**Location 1: Demo Request Form (Line ~145)**
```javascript
body: JSON.stringify({
  access_key: 'YOUR_ACTUAL_KEY_HERE', // Replace this
  subject: 'New HTSOne Demo Request',
  ...
})
```

**Location 2: Contact Sales Form (Line ~180)**
```javascript
body: JSON.stringify({
  access_key: 'YOUR_ACTUAL_KEY_HERE', // Replace this
  subject: `HTSOne ${selectedPlan} Plan Inquiry`,
  ...
})
```

---

### Step 3: Test the Forms

1. **Rebuild the app:**
   ```bash
   cd /app/frontend
   yarn build
   ```

2. **Test locally:**
   ```bash
   yarn start
   ```

3. **Test the forms:**
   - Scroll to bottom and enter an email in "Get Started" form
   - Click any pricing plan "Contact Sales" button
   - Fill out the contact form

4. **Check your email:** contact@hts.consulting

---

## 📧 What Emails You'll Receive

### From "Get Started" Form:
```
Subject: New HTSOne Demo Request
From: HTSOne Website
Email: [user's email]
Message: New demo request from: [user's email]
```

### From Pricing "Contact Sales" Form:
```
Subject: HTSOne [Plan Name] Plan Inquiry
From: [User's name]
Email: [User's email]
Company: [User's company]
Plan: [Starter/Professional/Enterprise]
Message: [User's custom message]
```

---

## ⚙️ Web3Forms Features (Free Tier)

✅ **Unlimited submissions** (truly free!)
✅ **Email notifications** to contact@hts.consulting
✅ **Spam protection** included
✅ **No signup required** - just the access key
✅ **GDPR compliant**
✅ **Works with static sites** (perfect for Cloudflare Pages)

---

## 🔧 Advanced Configuration (Optional)

### Custom Email Template

Add these fields to customize the email format:

```javascript
body: JSON.stringify({
  access_key: 'YOUR_KEY',
  subject: 'New HTSOne Demo Request',
  from_name: 'HTSOne Website',
  email: demoEmail,
  message: `New demo request from: ${demoEmail}`,
  
  // Optional: Custom redirect after submission
  redirect: 'https://yoursite.com/thank-you',
  
  // Optional: Custom email template
  template: 'custom'
})
```

### Add Honeypot for Extra Spam Protection

Add this hidden field to your forms:

```html
<input type="hidden" name="honeypot" value="">
```

---

## 🐛 Troubleshooting

### Issue: "Access key is invalid"
**Solution:** Make sure you copied the entire key (it's quite long). Check for spaces before/after the key.

### Issue: "Not receiving emails"
**Solution:** 
- Check spam folder
- Verify the email contact@hts.consulting is correct
- Wait 1-2 minutes (first email can be delayed)
- Check Web3Forms dashboard: https://web3forms.com/dashboard

### Issue: "Form not submitting"
**Solution:**
- Check browser console for errors
- Ensure you have internet connection
- Verify the access key is replaced in BOTH locations

### Issue: "CORS error"
**Solution:** Web3Forms has CORS enabled by default. If you see this, check:
- You're using `https://api.web3forms.com/submit` (not http)
- Headers are set correctly

---

## 📊 Form Validation & User Experience

**Current Implementation:**

✅ Email validation (built-in HTML5)
✅ Required fields marked with *
✅ Loading states ("Sending..." button text)
✅ Success messages ("Thank you! We'll contact you shortly")
✅ Error handling ("Network error. Please try again")
✅ Form reset on success
✅ Disabled inputs during submission
✅ Modal auto-closes after successful submission

---

## 🔒 Security

**What's Protected:**
- ✅ Access key is public (by design, rate-limited by Web3Forms)
- ✅ Spam protection via rate limiting
- ✅ Server-side validation by Web3Forms
- ✅ HTTPS only (enforced by Cloudflare Pages)

**What's NOT Needed:**
- ❌ Backend API (Web3Forms handles it)
- ❌ Database (Web3Forms stores submissions)
- ❌ Authentication (not required for contact forms)

---

## 📈 Monitoring Submissions

**View Your Submissions:**
1. Go to https://web3forms.com/dashboard
2. Enter your email: contact@hts.consulting
3. Click "Send Login Link"
4. Check your email and click the link
5. View all submissions in the dashboard

**Dashboard Features:**
- View all submissions
- Export to CSV
- Spam filtering
- Analytics

---

## 🚀 Ready for Production

Once you've added your access key:

1. ✅ Test both forms locally
2. ✅ Verify emails arrive at contact@hts.consulting
3. ✅ Build for production: `yarn build`
4. ✅ Deploy to Cloudflare Pages
5. ✅ Test on live site

---

## 💡 Pro Tips

**Tip 1: Use Environment Variables (Later)**
For better security, move the access key to environment variable:

```javascript
// In .env
REACT_APP_WEB3FORMS_KEY=your_key_here

// In code
access_key: process.env.REACT_APP_WEB3FORMS_KEY
```

**Tip 2: Add Auto-Reply**
Web3Forms supports auto-reply emails. Enable in dashboard.

**Tip 3: Multiple Forms**
You can use the same access key for multiple forms on your site.

**Tip 4: Track Conversions**
Add Google Analytics events when forms are successfully submitted.

---

## 📞 Support

**Web3Forms Support:**
- Website: https://web3forms.com/
- Docs: https://docs.web3forms.com/
- Email: support@web3forms.com

**Quick Start Link:**
https://web3forms.com/#get-started

---

## ✅ Checklist

Before deploying to production:

- [ ] Get Web3Forms access key
- [ ] Replace `YOUR_WEB3FORMS_ACCESS_KEY` in both locations
- [ ] Test "Get Started" form
- [ ] Test all 3 "Contact Sales" buttons (Starter, Professional, Enterprise)
- [ ] Verify emails arrive at contact@hts.consulting
- [ ] Test on mobile device
- [ ] Build production version: `yarn build`
- [ ] Deploy to Cloudflare Pages

---

**🎉 Your forms are now live and will send emails to contact@hts.consulting!**
