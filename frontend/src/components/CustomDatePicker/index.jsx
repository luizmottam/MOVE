import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CustomDatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const formatDate = (date) => {
    return date?.toLocaleDateString("pt-BR") ?? "";
  };

  return (
    <div
      className="relative w-full max-w-xs border border-transparent hover:border hover:border-gray-200 rounded-lg"
      ref={dropdownRef}
    >
      {/* Botão estilo input */}
      <button
        onClick={toggleDropdown}
        className="w-auto py-3 px-4 text-left bg-white rounded-lg text-sm text-gray-800 focus:outline-none"
      >
        {range.from
          ? `${formatDate(range.from)} → ${formatDate(range.to)}`
          : "Escolha a data"}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="mb-4 text-sm font-medium text-gray-600">
            Selecione o intervalo
          </div>

          <DayPicker
            mode="range"
            numberOfMonths={1}
            selected={range}
            onSelect={setRange}
            locale="pt-BR"
            weekStartsOn={0}
            className="text-sm"
            disabled={{ before: new Date() }} // 🚫 desabilita datas passadas
          />
        </div>
      )}
    </div>
  );
}
