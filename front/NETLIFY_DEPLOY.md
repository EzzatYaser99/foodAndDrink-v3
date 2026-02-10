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

## 3. If publish path is wrong

If the deploy succeeds but the site is blank, the publish path may differ. After running `npm run build` inside `front`, check the created folder (e.g. `front/dist/...`) and set **Publish directory** in the UI to that path (relative to repo root, e.g. `front/dist/front/browser`), or update `publish` in `netlify.toml` to match.
