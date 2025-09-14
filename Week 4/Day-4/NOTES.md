# 📘 JavaScript Functions – Learning Notes

## 🔹 What are Functions?
Functions are **reusable blocks of code** designed to perform a specific task.  
They help make code **organized, readable, and maintainable**.

---

## 🔹 Types of Functions
1. **Regular Function**
   ```js
   function greet(name) {
     return `Hello, ${name}!`;
   }
   console.log(greet("Ali"));
   ```

2. **Arrow Function**
   ```js
   const greet = (name) => `Hello, ${name}!`;
   console.log(greet("Ali"));
   ```

3. **Anonymous Function**
   ```js
   setTimeout(function() {
     console.log("Runs after 2 seconds");
   }, 2000);
   ```

---

## 🔹 Project: Color Changer App 🎨
We created an interactive project where clicking a button **changes the background color** and displays the new hex code.  

- **getRandomColor()** → Regular function (generates a random color).  
- **changeBackgroundColor** → Arrow function (applies the new color to the page).  

This shows how functions can make our code **modular and reusable**.

---

## 🔹 Key Takeaways
- ✅ Functions allow us to avoid repeating code.  
- ✅ Arrow functions are concise and widely used in modern JavaScript.  
- ✅ Functions are essential for building **scalable projects**.  

---

## ✨ Motivation
> *“Functions are the language we use to teach our code new skills. The more functions we write, the smarter and more reusable our applications become.”*

Keep practicing—this is where your code begins to feel powerful and structured. 🚀
