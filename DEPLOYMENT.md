# Deployment Guide - DKA FOUNDATION Platform

## Local Development

```bash
git clone https://github.com/dkansah/dka-foundation-platform.git
cd dka-foundation-platform

# No build step required for static files
# Simply open index.html in your browser or use a local server:
python -m http.server 8000
# or
node http-server
```

## GitHub Pages Deployment

1. Push to `main` branch
2. Go to Repository Settings → Pages
3. Select `main` branch as source
4. Site will be live at `https://dkansah.github.io/dka-foundation-platform`

## Vercel Deployment

```bash
npm install -g vercel
vercel
```

Follow prompts to connect and deploy.

## Netlify Deployment

1. Connect GitHub repository to Netlify
2. Set build command: (leave empty for static)
3. Deploy!

## Environment Variables

Create `.env.local` file:

```
REACT_APP_CHARITY_NUMBER=xxxxx
REACT_APP_DONATION_LINK=https://...
REACT_APP_ANALYTICS_ID=...
```

## Production Checklist

- [ ] Update config.json with real foundation details
- [ ] Add real charity registration number
- [ ] Configure donation gateway (Stripe/PayPal)
- [ ] Set up email service (SendGrid/Mailgun)
- [ ] Enable HTTPS
- [ ] Add analytics (Google Analytics/Plausible)
- [ ] Set up CDN for images
- [ ] Configure domain name
- [ ] Add GDPR compliance notice
- [ ] Test donation flow
- [ ] Verify email templates

## Monitoring

- Monitor site uptime with Uptime Robot
- Track analytics with Google Analytics
- Set up alerts for donation failures
- Monitor email delivery rates

---

For support, contact: contact@dkafoundation.org
