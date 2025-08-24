## **📄 04-GitHub-Tasks.md**

````markdown
# 📌 GitHub Tasks – Professional Guide

This document covers the step-by-step tasks to create, initialize, and manage a repository using **Git** and **GitHub**.  
Follow each task carefully to maintain a clean and organized workflow.  

---

## **✅ Task 1: Create a New Repository on GitHub**
- Go to [GitHub](https://github.com/).
- Click on **New Repository**.
- Enter a repository name and description.
- Set visibility to **Public** or **Private**.
- Click **Create Repository**.

---

## **✅ Task 2: Initialize a Local Repository**
- Open **Terminal** or **Git Bash**.
- Navigate to your project folder:
  ```bash
  cd path/to/your/project
````

* Initialize Git:

  ```bash
  git init
  ```
* This will create a hidden `.git` folder to track changes.

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
* If the branch is `master`, use:

  ```bash
  git push -u origin master
  ```

---

## **✅ Task 6: Take & Attach Screenshots**

Make sure to capture and save screenshots for documentation:

* **Initialization** → `git init`
* **First Commit** → `git commit`
* **Push Command** → `git push`
* **Final Repo Structure** → From GitHub UI

---

## **💡 Pro Tip**

> Always pull the latest changes before making updates:

```bash
git pull origin main
```

This prevents **merge conflicts** and keeps your repository synchronized.

---
