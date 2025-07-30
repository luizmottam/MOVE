import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomSelect = ({ options }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  const selectedLabel = options.find((opt) => opt.value === selected)?.label;

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        className="relative py-3 ps-4 pe-9 w-full flex items-center justify-between text-sm bg-[var(--primary-color-variant)] border border-transparent hover:border-gray-200 rounded-lg focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selectedLabel || "Escolha uma categoria..."}</span>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-2 w-full max-h-60 overflow-y-auto bg-[var(--primary-color-variant)] border border-gray-200 rounded-lg shadow-lg p-1 space-y-0.5 text-sm"
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected === option.value}
              className={`flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer
                ${option.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
                ${selected === option.value ? "bg-gray-100" : ""}
              `}
              onClick={() => !option.disabled && handleSelect(option.value)}
            >
              <div className="flex flex-col text-left">
                <span className="font-medium text-gray-800">{option.label}</span>
                <span className="text-sm text-gray-500">{option.description}</span>
              </div>

              {selected === option.value && !option.disabled && (
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
