# React – Detailed Notes (Functional Components + Hooks)

## 1. Core Concepts
- Components as functions: `function MyComp(props) { return <div/> }`.
- JSX: JavaScript XML. Use camelCase for attributes (`className`, `htmlFor`).

## 2. Hooks
- `useState` for local state.
- `useEffect` for side effects (data fetching, subscriptions).
- `useRef` for mutable refs (DOM access, storing timers).
- `useContext` for simple global state.
- `useReducer` for complex state transitions.

## 3. Data fetching & effects
- Avoid race conditions: cancel or ignore older requests in `useEffect`.
- Example:
```js
useEffect(() => {
  let mounted = true;
  fetch('/api/data').then(r => r.json()).then(data => { if(mounted) setData(data) });
  return () => { mounted = false; }
}, []);
```

## 4. Routing
- React Router v6 basics: `<BrowserRouter><Routes><Route path="/" element={<Home/>}/></Routes></BrowserRouter>`.

## 5. Performance
- `React.memo` for pure components.
- `useMemo` & `useCallback` to memoize expensive values/functions.
- Code-splitting with `React.lazy()` and `<Suspense>`.

## 6. Forms & validation
- Controlled components vs uncontrolled.
- Use libraries (Formik, React Hook Form) for large forms.

## 7. Testing
- Unit tests with Jest, component tests with React Testing Library.
- Example test: render component, findByText, simulate events.

## 8. Styling
- Tailwind + React approach: utility classes + component composition.
- CSS-in-JS alternatives: styled-components, emotion.

