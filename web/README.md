# DKA FOUNDATION Web Application

A responsive, cinematic website for DKA FOUNDATION featuring donation integration, volunteer signup, and partnership inquiries.

## 📁 Structure

```
web/
├── index.html          # Main website
├── css/
│   └── styles.css      # All styling
└── js/
    └── app.js          # Interactive functionality
```

## 🚀 Features

- **Hero Section** - Cinematic opening with call-to-action
- **About** - Mission, vision, and values
- **Services** - 6 focus areas with icons
- **Impact Dashboard** - Stats and charts
- **Donation Platform** - One-time and recurring gifts
- **Get Involved** - Partner, volunteer, advocate signup
- **Contact** - Foundation information
- **Responsive Design** - Mobile-friendly

## 🛠️ Customization

### Update Foundation Info
Edit `index.html` lines:
- Contact: Lines 273-276
- Social links: Add in footer
- Imagery: Replace with actual photos

### Integration Points
- **Donation Gateway**: Replace alert() in `app.js` with Stripe/PayPal API
- **Email Service**: Connect forms to SendGrid/Mailgun
- **Analytics**: Add Google Analytics tag
- **CRM**: Integrate with Salesforce/HubSpot

## 🎨 Branding

**Colors:**
- Primary Blue: `#003366`
- Accent Gold: `#FFD700`
- Success Green: `#00A86B`

**Fonts:**
- Main: Segoe UI, Tahoma, Geneva
- Custom: Add Google Fonts if needed

## 📱 Deployment

1. Upload to GitHub Pages
2. Or deploy to Netlify/Vercel
3. Configure custom domain
4. Enable HTTPS

## 🔒 Security

- Add CSRF tokens for forms
- Validate all inputs server-side
- Use HTTPS for all transactions
- GDPR compliance for data collection

## 📊 Analytics

Add tracking for:
- Page views
- Donation conversions
- Form submissions
- User engagement

---

For production deployment, add backend API for form processing and payment handling.
