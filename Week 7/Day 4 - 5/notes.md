# Week 07 – React State Management

## 🎯 Learning Objectives
- Understand **React state** and **props**.
- Learn about **Context API** for managing global state.
- Build a small app using **useState** and **useContext** hooks.

---

## 🧩 Key Concepts

### 1. State
- State represents data that can change over time.
- Managed inside a component using the `useState` hook.

Example:
```js
const [count, setCount] = useState(0);
```

### 2. Context
- Used to share data between components without prop drilling.
- Create with `createContext()` and use with `useContext()`.

### 3. useContext Hook
- Lets you consume context values directly.

Example:
```js
const theme = useContext(ThemeContext);
```

---

## 🧪 Reflection
In this week’s project, we:
- Created a global theme using **Context API**.
- Used **useState** to manage a counter.
- Demonstrated **state sharing** across multiple components.
