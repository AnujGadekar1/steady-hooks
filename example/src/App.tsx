import { useState, useEffect, useRef } from "react";
import {
  useStableAsync,
  useDebouncedValue,
  useIsMobile,
  useClickOutside
} from "steady-hooks";

function fakeApi(query: string) {
  return new Promise<string[]>(resolve =>
    setTimeout(() => resolve([`Result for "${query}"`]), 1000)
  );
}

export default function App() {
  const [input, setInput] = useState("");
  const debounced = useDebouncedValue(input, 500);
  const isMobile = useIsMobile();
  const boxRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(true);

  const { run, data, loading } = useStableAsync(fakeApi);

  useEffect(() => {
    if (debounced) run(debounced);
  }, [debounced]);

  useClickOutside(boxRef, () => setOpen(false));

  return (
    <div style={{ padding: 20 }}>
      <h1>steady-hooks example</h1>

      <p>Device: {isMobile ? "Mobile" : "Desktop"}</p>

      <input
        placeholder="Search..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      {open && (
        <div
          ref={boxRef}
          style={{ marginTop: 20, padding: 10, border: "1px solid black" }}
        >
          Click outside me to close
        </div>
      )}
    </div>
  );
}
