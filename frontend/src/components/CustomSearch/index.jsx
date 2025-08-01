import { useState, useEffect } from "react";
import { Search, Check } from "lucide-react";

const CustomSearch = (props) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [cidadesData, setCidadesData] = useState({});

  useEffect(() => {
    fetch("/data/cidades.json")
      .then((res) => res.json())
      .then((json) => setCidadesData(json))
      .catch((err) => console.error("Erro ao carregar cidades:", err));
  }, []);

  // Convertendo JSON original em [{ label: cidade, description: estado }]
  const allOptions = Object.entries(cidadesData).flatMap(([estado, cidades]) =>
    cidades.map((cidade) => ({
      label: cidade,
      description: estado,
    }))
  );

  const filteredOptions = allOptions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-sm">
      {/* Input */}
      <div className="relative border border-transparent hover:border-gray-300 rounded-lg">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Digite um município"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)} // permite clicar no dropdown
          className="bg-[var(--primary-color-variant)] py-3 ps-10 pe-4 w-full rounded-lg sm:text-sm focus:outline-none"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-[var(--primary-color-variant)] border border-gray-200 rounded-lg shadow-lg max-h-72 overflow-y-auto">
          {filteredOptions.length === 0 && (
            <p className="p-4 text-sm text-gray-500">
              Nenhum município encontrado.
            </p>
          )}

          {filteredOptions.map((item, index) => (
            <button
              key={`${item.label}-${index}`}
              onClick={() => {
                setSelected(item);
                setQuery(item.label + ", " + item.description);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                selected?.label === item.label ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex flex-col items-start">
                <span className="font-medium text-gray-800">{item.label}</span>
                <span className="text-sm text-gray-500">
                  {item.description}
                </span>
              </div>
              {selected?.label === item.label && (
                <Check className="w-4 h-4 text-blue-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSearch;
