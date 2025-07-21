import { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [input, setInput] = useState("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

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

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const destinos = [
    { title: "Lancha", desc: "Passeios exclusivos e conforto na água" },
    { title: "Jetski", desc: "Liberdade e adrenalina sobre as ondas" },
    { title: "Quadriciculo", desc: "Aventura em qualquer terreno" },
    { title: "UTV", desc: "Off-road com tração e conforto para todo" },
  ];

  return (
    <div className="dropdown" ref={dropdownRef}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Selecionar categoria"
        onClick={toggleDropdown}
        readOnly
      />

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {destinos.map((d, i) => (
              <li key={i}>
                <strong>{d.title}</strong>
                <br />
                <span>{d.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
