
---

# 🚀 GitHub Setup Guide

This guide will walk you through the complete process of setting up **Git**, creating a **GitHub account**, and pushing your first project.

---

## 🧩 Table of Contents

| No. | Section                                                    | Description                               |
| --- | ---------------------------------------------------------- | ----------------------------------------- |
| 1   | [Create GitHub Account](#-1-create-a-github-account)       | Sign up and set up your profile           |
| 2   | [Install Git](#-2-install-git)                             | Download and configure Git on your system |
| 3   | [Configure Git](#-3-configure-git)                         | Set up your name and email for commits    |
| 4   | [Create GitHub Repository](#-4-create-a-github-repository) | Make a new repository                     |
| 5   | [Link Local Repo to GitHub](#-5-link-local-repo-to-github) | Connect your local project with GitHub    |
| 6   | [Push Code to GitHub](#-6-push-your-code-to-github)        | Upload your project                       |

---

## 🔹 1. Create a GitHub Account

| Step | Action                                         |
| ---- | ---------------------------------------------- |
| 1️⃣  | Go to [GitHub](https://github.com)             |
| 2️⃣  | Click on **Sign Up**                           |
| 3️⃣  | Enter your **name, email, and password**       |
| 4️⃣  | Verify your **email address**                  |
| 5️⃣  | Set up your **profile picture** and basic info |

💡 **Tip:** Use a **professional username** like `hassan-bin-waqar` for better visibility.

---

## 🔹 2. Install Git

| Step | Action                                                |
| ---- | ----------------------------------------------------- |
| 1️⃣  | Download Git from [git-scm.com](https://git-scm.com/) |
| 2️⃣  | Install it using the default settings                 |
| 3️⃣  | Verify the installation:                              |

```bash
git --version
```

✅ If you see the version, Git is installed successfully.

---

## 🔹 3. Configure Git

Set your **global username** and **email**:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

🔹 To **verify configuration**:

```bash
git config --list
```

---

## 🔹 4. Create a GitHub Repository

| Step | Action                                                   |
| ---- | -------------------------------------------------------- |
| 1️⃣  | Go to your [GitHub Repositories](https://github.com/new) |
| 2️⃣  | Click on **New**                                         |
| 3️⃣  | Enter a **repository name**                              |
| 4️⃣  | Add a short **description** *(optional)*                 |
| 5️⃣  | Choose **Public** or **Private**                         |
| 6️⃣  | *(Optional)* Select **Initialize with README**           |
| 7️⃣  | Click **Create Repository** ✅                            |

---

## 🔹 5. Link Local Repo to GitHub

Run the following commands **inside your project folder**:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
```

---

## 🔹 6. Push Your Code to GitHub

Upload your project to GitHub:

```bash
git push -u origin main
```

---

## 🎯 Final Notes

* ✅ Always **commit often** with meaningful messages.
* ✅ Keep your local and remote branches in **sync**:

  ```bash
  git pull origin main
  ```
* ✅ Use `.gitignore` to **exclude unnecessary files**.

---

## 🔗 Useful Resources

| Resource       | Link                                               |
| -------------- | -------------------------------------------------- |
| GitHub Website | [https://github.com](https://github.com)           |
| Git Download   | [https://git-scm.com/](https://git-scm.com/)       |
| GitHub Docs    | [https://docs.github.com](https://docs.github.com) |

---
