import { useState, useRef, useEffect } from "react";
import cidades from "./cidades.json";
import "./SearchDropdown.css";

export default function SearchDropdown() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState(cidades);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setIsOpen(true);
    setFiltered(
      cidades.filter((cidade) =>
        cidade.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (cidade) => {
    setInput(cidade);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-dropdown" ref={dropdownRef}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Para onde você vai?"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && filtered.length > 0 && (
        <ul className="dropdown-list">
          {filtered.map((cidade, i) => (
            <li key={i} onClick={() => handleSelect(cidade)}>
              {cidade}
            </li>
          ))}
        </ul>
      )}

      {isOpen && filtered.length === 0 && (
        <ul className="dropdown-list">
          <li className="no-result">Nenhum resultado encontrado</li>
        </ul>
      )}
    </div>
  );
}
