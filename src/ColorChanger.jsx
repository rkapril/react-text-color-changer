import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("");

  return (
    <div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Change Text Color"
        id="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <p style={{ color: `${color}` }}>I Love React!</p>
    </div>
  );
}
