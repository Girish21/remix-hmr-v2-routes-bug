import * as React from "react";

export function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="flex items-center gap-4 my-4">
      <p>
        Count: <i>{count}</i>
      </p>
      <button
        className="border border-slate-900 px-2 py-1 rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
    </div>
  );
}
