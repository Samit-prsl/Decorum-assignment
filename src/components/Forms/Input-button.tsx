import { X } from "lucide-react";
import React from "react";

const InputButton: React.FC<{
  value: string;
  onChange: (newValue: string) => void;
  error?: string | boolean;
}> = ({ value, onChange, error }) => {
  const values = value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);

  const handleKeyDown = (e: {
    key: string;
    preventDefault: () => void;
    target: { value: string };
  }) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newValue = e.target.value.trim();
      if (newValue && !values.includes(newValue)) {
        onChange([...values, newValue].join(", "));
      }
      e.target.value = "";
    }
  };

  const removeValue = (valueToRemove: string) => {
    onChange(values.filter((v) => v !== valueToRemove).join(", "));
  };

  return (
    <div
      className={`flex flex-wrap items-center border rounded-md p-1 ${
        error ? "border-red-500" : "border-input"
      }`}
    >
      {values.map((v, i) => (
        <span
          key={i}
          className="bg-gray-200 text-gray-900 text-sm rounded-full px-2 py-1 mx-1 flex items-center"
        >
          {v}
          <button
            onClick={() => removeValue(v)}
            className="ml-1 focus:outline-none"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
      <input
        className="flex-1 outline-none bg-transparent min-w-[50px] px-2 py-1"
        onKeyDown={
          handleKeyDown as unknown as React.KeyboardEventHandler<HTMLInputElement>
        }
        placeholder={values.length === 0 ? "Type and press Enter" : ""}
      />
    </div>
  );
};

export default InputButton;
