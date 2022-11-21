/* import { InputHTMLAttributes } from 'react' */

export function Input (props) {
  return (
    <div className="flex flex-col gap-2">
      <input
        {...props}
        className="bg-slate-200 px-4 py-3 rounded text-sm placeholder:text-zinc-500" />
    </div>
  );
}
