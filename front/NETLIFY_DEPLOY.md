# Netlify deploy – fix “Base directory does not exist”

Netlify expects **repository-relative paths**, not GitHub URLs.

## 1. Use the repo `netlify.toml` (already at repo root)

The repo root has a `netlify.toml` with:

- **base** = `front` (app lives in the `front` folder)
- **command** = `npm run build`
- **publish** = `dist/front/browser` (Angular app builder output)

Commit and push this file from the **repo root** (`foodAndDrink-v3`), not from inside `front`.

## 2. Fix Netlify UI Build settings

In **Site settings → Build & deploy → Continuous Deployment → Build settings → Edit settings**:

| Field              | Wrong (example) | Correct |
|--------------------|------------------|--------|
| **Base directory** | `https://github.com/.../tree/master/front` | `front` |
| **Package directory** | Any URL | Leave **empty** (or delete the value) |
| **Build command**  | (can stay) | `npm run build` |
| **Publish directory** | Any URL | `dist/front/browser` |
| **Functions directory** | Any URL | Leave **empty** unless you use Netlify functions |

Important:

- Do **not** put GitHub URLs in Base directory, Package directory, Publish directory, or Functions directory.
- Use only simple paths: `front`, `dist/front/browser`, or leave blank.

Save, then trigger a **new deploy**.

## 3. If the site is blank white after deploy

1. **Check the Netlify build log**
   - Go to **Deploys** → click the latest deploy → **Deploy log**.
   - Confirm the build **succeeds** (no red errors). If the build fails, fix the error (often Node version or missing dependencies).
   - In the log, find the line like **“Production base: front”** and **“Deploy directory: …”**. The deploy directory should be the folder that contains `index.html` and the built `.js` files (e.g. `front/dist/front/browser` from repo root).

2. **Clear Netlify UI overrides**
   - In **Build settings**, leave **Base directory** as `front` and **Publish directory** as `dist/front/browser` (or leave Publish **empty** so Netlify uses only `netlify.toml`).
   - Remove any **URLs** from Base/Package/Publish/Functions. Save and **Trigger deploy** again.

3. **If publish path is wrong**
   - Publish path is **relative to the base directory**. So with base `front`, the value `dist/front/browser` means Netlify deploys from `front/dist/front/browser`.
   - If your Angular build puts output somewhere else, run `npm run build` inside `front`, then look at `front/dist/` and set **Publish directory** to that path (e.g. `dist/front/browser`), or update `publish` in `netlify.toml` to match.

4. **Check the browser**
   - Open the live site → **F12** → **Console**. If you see 404s for `.js` or `i18n/*.json`, the deploy path or redirects are wrong.
   - If you see script errors, fix those in the app and redeploy.
