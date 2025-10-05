#  Week 07 (Day 2–3): Learn Redux Toolkit — MERN Stack Internship

## 1. Introduction to Redux
When building complex React applications, managing state across multiple components becomes challenging. This is where **Redux** comes in.

Redux is a predictable state container for JavaScript apps that helps manage global state in one central store. However, traditional Redux required a lot of boilerplate code — which made it difficult for beginners.  
That’s where **Redux Toolkit (RTK)** comes in.

---

## 2. What is Redux Toolkit (RTK)?
Redux Toolkit is the official, recommended way to write Redux logic.  
It simplifies Redux by:
- Reducing boilerplate code
- Providing built-in utilities like `createSlice()` and `configureStore()`
- Supporting the latest React patterns (Hooks, Immer)

> Think of Redux Toolkit as the “modern way” of using Redux — easier, faster, and cleaner.

---

## 3. Why Use Redux Toolkit?
✅ Less boilerplate  
✅ Improved developer experience  
✅ Immutable state updates (via Immer)  
✅ Integration with DevTools  
✅ Scalable for large apps

---

## 4. Redux Toolkit Core Concepts

| Concept | Description |
|----------|--------------|
| Store | Centralized state container |
| Slice | Logical grouping of state and reducers |
| Reducer | Function modifying state based on actions |
| Action | Describes what happened |
| Dispatch | Sends action to store |
| Selector | Extracts data from store |

---

## 5. Setting Up Redux Toolkit in React

### Step 1: Install Packages
```bash
npm install @reduxjs/toolkit react-redux
```

### Step 2: Create a Slice
**File:** `/src/features/counter/counterSlice.js`
```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

### Step 3: Configure Store
**File:** `/src/app/store.js`
```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
```

### Step 4: Provide Store to React
**File:** `/src/index.js`
```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Step 5: Use Redux in Components
**File:** `/src/App.js`
```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default App;
```

---

## 6. Redux Toolkit Flow
1. Store holds global state  
2. Slice defines state logic and actions  
3. Provider makes store available to app  
4. useSelector reads data  
5. useDispatch sends actions

---

## 7. Best Practices
- Keep slices small and focused  
- Use Immer’s immutable updates  
- Use `createAsyncThunk` for API calls  
- Avoid direct mutations  
- Use Redux DevTools for debugging

---

## 8. Real-World Use Cases
- Global themes, authentication, e-commerce cart, dashboards

---

## 9. Common Mistakes
❌ Forgetting `<Provider>`  
❌ Mutating state outside reducers  
❌ One big slice instead of modular design

---

## 10. Key Takeaways
- Redux Toolkit is the modern way to use Redux  
- Simplifies global state management in React  
- Essential for production-grade MERN apps

---

## 11. Next Steps
🚀 Integrate Redux into existing projects  
⚙️ Practice `createAsyncThunk` for API calls  
🧩 Manage authentication state with Redux

---

## 🧠 Final Thought
> Learning Redux Toolkit is like upgrading your toolbox — you write less, debug faster, and build smarter.
