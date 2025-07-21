import { useState, useRef, useEffect } from "react";
import { DayPicker } from "`react-day-picker`";
import "react-day-picker/dist/style.css";
import "./CalendarDropdown.css"; // CSS customizado

export default function CalendarDropdown() {
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
    <div className="calendar-wrapper" ref={dropdownRef}>
      <button className="input-like" onClick={toggleDropdown}>
        {range.from
          ? `${formatDate(range.from)} → ${formatDate(range.to)}`
          : "Insira as datas"}
      </button>

      {isOpen && (
        <div className="calendar-dropdown">
          <div className="calendar-tabs">
            <button className="active">Datas</button>
          </div>

          <DayPicker
            mode="range"
            numberOfMonths={1}
            selected={range}
            onSelect={setRange}
            locale="pt-BR"
            weekStartsOn={0}
          />
        </div>
      )}
    </div>
  );
}
