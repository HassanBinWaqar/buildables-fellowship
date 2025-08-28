# 01 — Git Notes (Concepts & Mental Models)

> A concise, beginner-friendly crash course to show you *understand* Git, not just the commands.

## What is Git (in one line)?
Git is a **distributed version control system** that tracks snapshots of your project so you can **travel through time**, **branch off**, and **collaborate safely**.

## Why Git matters
- **History & Recovery:** Roll back to any stable point if something breaks.
- **Experimentation:** Branches let you try ideas without risking `main`.
- **Collaboration:** Multiple people can work in parallel and merge changes.
- **Accountability:** Each commit has an author, timestamp, and message.

## Git vs GitHub (don’t mix them!)
- **Git:** A local tool on your machine for version control (CLI).
- **GitHub:** A remote hosting platform for Git repositories + collaboration tools (PRs, Issues, Actions).

> Analogy: Git is your **camera** (take snapshots). GitHub is your **Google Photos** (store, share, and collaborate).

## The Git Model (quick mental picture)

Working Directory -> Staging Area -> Local Repo -> Remote Repo (GitHub)
(edit files) (git add) (git commit) (git push / git pull)

- **Working Directory:** Your actual files.
- **Staging Area (Index):** A “shopping cart” of changes you plan to commit.
- **Local Repository:** The `.git` database with your full history on your machine.
- **Remote Repository:** The shared copy on GitHub.

## Snapshots, not diffs
Git stores **snapshots** of files that changed (with file deduplication), which makes it fast and powerful.

## Commits & HEAD
- A **commit** is a snapshot with a message and metadata.
- **HEAD** is a pointer to your current commit/branch.
- Moving HEAD (via commits, checkout, reset) changes what you’re “looking at.”

## Branches (safe sandboxes)
- A branch is just a **label** pointing to a series of commits.
- Common flows:
  - **Feature branches:** `feature/responsive-navbar`
  - **Bugfix branches:** `fix/login-null-check`
  - **Release branches:** `release/v1.0.0`
- Merging brings changes together. You’ll see:
  - **Fast-forward merge:** Linear history; branch just advances.
  - **Three-way merge:** Creates a merge commit to reconcile work.

## Merge vs Rebase (when to use what)
- **Merge:** Safe, preserves history; ideal for shared branches.
- **Rebase:** Clean, linear history; ideal for *your* feature branch *before* merging.
  - Rule of thumb: **Never rebase public/shared branches.**

## Conflicts (they’re normal!)
Conflicts happen when the same lines change differently in two branches. You resolve them manually, mark as resolved, and continue the merge/rebase.

## Basic team workflow (you’ll use this a lot)
1. `git pull` (sync) → 2. create a feature branch → 3. commit as you work  
4. rebase/merge `main` into your branch if needed → 5. push & open a PR → 6. review → 7. merge → 8. delete branch

## Commit messages (professional standard)
Follow **Conventional Commits**:
<type>(optional-scope): short imperative summary

feat(auth): add JWT refresh token rotation
fix(ui): handle empty state in product grid
docs(readme): add setup steps
chore: bump deps
refactor(api): simplify error handling

## Glossary (quick reference)
- **Origin:** Default name of your remote on GitHub.
- **Upstream:** Another remote you track (e.g., original repo you forked from).
- **Detached HEAD:** You’re “on” a specific commit, not a branch (safe, but unusual).
- **Tracking branch:** Local branch tied to a remote branch (e.g., `main` ↔ `origin/main`).
