import { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown() {
  const categorias = [
    { title: "Lancha", desc: "Passeios exclusivos e conforto na água" },
    { title: "Jetski", desc: "Liberdade e adrenalina sobre as ondas" },
    { title: "Quadriciculo", desc: "Aventura em qualquer terreno" },
    { title: "UTV", desc: "Off-road com tração e conforto para todo" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState(categorias);

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
      categorias.filter((categoria) =>
        categoria.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (categoria) => {
    setInput(categoria.title);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Selecionar categoria"
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {filtered.map((d, i) => (
              <li key={i} onClick={() => handleSelect(d)} className="dropdown-item">
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
