# 烧烤点单 · BBQ pre-order page

A Chinese-language page where party guests pre-order BBQ and see everyone's orders.
Static site on GitHub Pages; orders are stored in a Google Sheet via Apps Script.

- `index.html` — the page (order tab + "大家点了什么" summary tab with shopping totals)
- `config.js` — **edit this**: title, menu, spice levels, `SCRIPT_URL`
- `apps-script/Code.gs` — backend to paste into Google Apps Script

Without `SCRIPT_URL` the page runs in demo mode (orders saved only in your own browser).

## Connect Google Sheets (≈5 min, once)

1. Create a new Google Sheet (e.g. "烧烤订单").
2. In the sheet: **Extensions → Apps Script**. Delete the sample code, paste all of `apps-script/Code.gs`, save.
3. **Deploy → New deployment** → gear icon → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, authorize (Google shows an "unverified app" warning for your own script: *Advanced → Go to … (unsafe)*), and copy the **Web app URL** (ends in `/exec`).
5. Paste it into `config.js` → `SCRIPT_URL: "https://script.google.com/macros/s/…/exec"`, commit and push.

Orders appear in the sheet's `订单` tab (one row per person). To change `Code.gs` later, use
**Deploy → Manage deployments → Edit → Version: New version** so the URL stays the same.

## Editing the menu

Edit `MENU` in `config.js`. Renaming an item is safe; don't change an item's `id` after people have ordered it.

## Local preview

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Notes

- No login: anyone with the link can order under any name. Fine for a friends' party; don't share the link publicly.
- To reset after the party, delete the data rows in the sheet.
