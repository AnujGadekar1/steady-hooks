# steady-hooks ⚓

[![npm version](https://img.shields.io/npm/v/steady-hooks.svg)](https://www.npmjs.com/package/steady-hooks)
[![npm downloads](https://img.shields.io/npm/dm/steady-hooks.svg)](https://www.npmjs.com/package/steady-hooks)
[![bundle size](https://img.shields.io/bundlephobia/minzip/steady-hooks)](https://bundlephobia.com/package/steady-hooks)
[![license](https://img.shields.io/npm/l/steady-hooks.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![tree-shakable](https://img.shields.io/badge/tree--shakable-yes-success.svg)](#)

**Stable, predictable React hooks for async, state, and browser behavior.**

`steady-hooks` is a lightweight, production-ready collection of React hooks focused on:

* 🛡️ Safety (no memory leaks, no race conditions)
* 🔁 Predictable behavior
* 🧼 Clean and minimal APIs
* 🌍 Real-world use cases

Built with **TypeScript**, fully **tree-shakable**, and **framework-agnostic**.

---

## ✨ Features

* ✅ Safe async handling (prevents stale updates & race conditions)
* ✅ Browser & environment utilities
* ✅ Zero external runtime dependencies
* ✅ Fully typed with TypeScript
* ✅ Tree-shakable
* ✅ Small bundle size

---

## 📦 Installation

```bash
npm install steady-hooks
```

or

```bash
yarn add steady-hooks
```

---

## 🚀 Usage

```ts
import { useStableAsync, useIsMobile } from "steady-hooks";
```

---

## 🪝 Available Hooks

### `useStableAsync`

Safe async execution with built-in race-condition prevention.

```ts
const { run, data, loading, error } = useStableAsync(fetchUsers);

useEffect(() => {
  run();
}, []);
```

**Use cases**

* API calls
* Search requests
* Async side effects

---

### `useDebouncedValue`

Debounce rapidly changing values.

```ts
const debouncedSearch = useDebouncedValue(search, 500);
```

---

### `useIsMobile`

Detect mobile viewport using `ResizeObserver`.

```ts
const isMobile = useIsMobile();
```

---

### `useClickOutside`

Detect clicks outside a referenced element.

```ts
useClickOutside(ref, () => setOpen(false));
```

---

### `useCountdown`

Countdown timer with start, pause, and reset controls.

```ts
const { seconds, start, pause, reset } = useCountdown(60);
```

---

### `useLocalStorage`

Persistent state synchronized across browser tabs.

```ts
const [theme, setTheme] = useLocalStorage("theme", "light");
```

---

### `usePing`

Monitor network connectivity and latency.

```ts
const { online, latency } = usePing();
```

---

### `useLatestRef`

Always access the latest value (prevents stale closures).

```ts
const latestValue = useLatestRef(value);
```

---

### `usePreviousValue`

Retrieve the previous value of state or props.

```ts
const prev = usePreviousValue(value);
```

---

### `useMounted`

Safely check if a component is currently mounted.

```ts
const isMounted = useMounted();
```

---

### `useOnceEffect`

Run an effect exactly once.

```ts
useOnceEffect(() => {
  init();
});
```

---

## 🧠 Philosophy

`steady-hooks` prioritizes **correctness over cleverness**:

* Predictable behavior over hacks
* Safe defaults
* Explicit, readable APIs

Designed for **real production systems**, not demos.

---

## 🌟 Contributing

Contributions are welcome!

* Open issues
* Suggest new hooks
* Submit pull requests

---

## 📄 License

MIT © 2026 **Anuj Gadekar**

---

## 🔗 Links

* **GitHub:** [https://github.com/AnujGadekar1/steady-hooks](https://github.com/AnujGadekar1/steady-hooks)
* **npm:** [https://www.npmjs.com/package/steady-hooks](https://www.npmjs.com/package/steady-hooks)
