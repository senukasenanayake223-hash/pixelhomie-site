# Pixelhomie website-order page

Open `index.html` to preview it. This page collects a client's website project details, then opens WhatsApp with a ready-to-send request.

Before publishing:

1. Change the example prices and package text in `index.html` if needed.
2. In `app.js`, replace `94770000000` with your own WhatsApp number in international format (for Sri Lanka: `94` then your number without the first `0`).
3. Submit a test request to make sure it opens your WhatsApp chat.
4. Publish the files for free with GitHub Pages. Upload everything in this folder to a public repository. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Later, after registering `pixelhomieweb.com`, add these DNS records for GitHub Pages:
   - `A` record for `@` → `185.199.108.153`
   - `A` record for `@` → `185.199.109.153`
   - `A` record for `@` → `185.199.110.153`
   - `A` record for `@` → `185.199.111.153`
   - `CNAME` record for `www` → `YOUR-GITHUB-USERNAME.github.io`
6. Back in **Settings → Pages**, enter `pixelhomieweb.com` as the custom domain and enable **Enforce HTTPS** once it becomes available. DNS can take a few minutes to 24 hours to update.

This is a quote-request form, not a payment checkout. You can discuss price, timeline and deposit with each client after they send the request.
