
---

## **📄 04-GitHub-Tasks.md**

# 📌 GitHub Tasks – Professional Guide

This document covers the **step-by-step tasks** to create, initialize, and manage a repository using **Git** and **GitHub**.
Follow each task carefully to maintain a clean and organized workflow.

---

## 🧩 **Table of Contents**

| No. | Task                                                                     | Description                                |
| --- | ------------------------------------------------------------------------ | ------------------------------------------ |
| 1️⃣ | [Create a GitHub Repository](#-task-1-create-a-new-repository-on-github) | Create a new repository on GitHub          |
| 2️⃣ | [Initialize Local Repository](#-task-2-initialize-a-local-repository)    | Set up Git in your project folder          |
| 3️⃣ | [Add README & Commit](#-task-3-add-a-readme-file--commit)                | Create, stage, and commit files            |
| 4️⃣ | [Link Local Repo](#-task-4-link-local-repo-with-github)                  | Connect local repo with remote             |
| 5️⃣ | [Push Code to GitHub](#-task-5-push-changes-to-github)                   | Upload changes to GitHub                   |
| 6️⃣ | [Take Screenshots](#-task-6-take--attach-screenshots)                    | Capture proof of commands & repo structure |

---

## **✅ Task 1: Create a New Repository on GitHub**

| Step | Action                                        |
| ---- | --------------------------------------------- |
| 1️⃣  | Go to [GitHub](https://github.com/)           |
| 2️⃣  | Click **New Repository**                      |
| 3️⃣  | Enter **repository name** and **description** |
| 4️⃣  | Set visibility: **Public** or **Private**     |
| 5️⃣  | *(Optional)* Initialize with a **README.md**  |
| 6️⃣  | Click **Create Repository** ✅                 |

---

## **✅ Task 2: Initialize a Local Repository**

* Open **Terminal** or **Git Bash**.
* Navigate to your project folder:

```bash
cd path/to/your/project
```

* Initialize Git:

```bash
git init
```

> 📝 This will create a hidden `.git` folder to track your project’s changes.

---

## **✅ Task 3: Add a README File & Commit**

* Create a `README.md` file:

```bash
echo "# My Project" >> README.md
```

* Stage the file:

```bash
git add README.md
```

* Commit the changes:

```bash
git commit -m "Added initial README file"
```

---

## **✅ Task 4: Link Local Repo with GitHub**

* Copy the **HTTPS URL** of your repository from GitHub.
* Link it to your local repo:

```bash
git remote add origin <repository-url>
```

* Verify the remote:

```bash
git remote -v
```

---

## **✅ Task 5: Push Changes to GitHub**

* Push your local commits to the GitHub repository:

```bash
git push -u origin main
```

* If your default branch is `master`, use:

```bash
git push -u origin master
```

---

## **✅ Task 6: Take & Attach Screenshots**

Make sure to capture and save screenshots for documentation:

| Screenshot     | Description               |
| -------------- | ------------------------- |
| `git init`     | Initializing repository   |
| `git commit`   | First commit confirmation |
| `git push`     | Successfully pushing code |
| Repo Structure | Final structure on GitHub |

---

## 💡 **Pro Tip**

> Always **pull the latest changes** before making updates:

```bash
git pull origin main
```

This helps prevent **merge conflicts** and keeps your repository synchronized.

---