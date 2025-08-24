
## `03-GitHub-Setup-Steps.md`

```md
# 03 — GitHub Setup Steps (VS Code + HTTPS or SSH)

> Step-by-step with screenshots

## 1) Create the GitHub repo
1. Go to GitHub → New Repository.
2. Name: `buildables-mern-fellowship` (or your chosen name).
3. Visibility: Public (unless told otherwise).
4. Initialize **without** README (we’ll add ours).
5. Copy the remote URL (HTTPS or SSH).

> Screenshot: `repo-structure.png` (home page of the repo)

## 2) Connect local → remote

```bash
git init
git add .
git commit -m "chore: bootstrap repository with Days 1–4"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
