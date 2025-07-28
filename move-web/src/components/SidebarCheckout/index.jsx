import './SidebarCheckout.css'

export default function SidebarCheckout() {
  const steps = [
    {
      title: "Rental Details",
      text: "Tue, Mar 12, 2024 12:00 PM – Sat, Mar 16, 2024 8:00 AM",
      checked: true,
    },
    { title: "Pick-Up & Return", text: "Miami, FL", checked: true },
    { title: "Vehicle", text: "Full Size SUV", checked: true },
    { title: "Extras", text: "0 Extras Added", checked: true },
    { title: "Review & Reserve", text: "", checked: false },
  ];

  return (
    <aside className="bg-[var(--primary-color)] text-white w-72 p-10 flex flex-col justify-between min-h-screen">
      {/* Logo */}
      <div>
        <div className="mb-6 font-bold text-lg flex items-center gap-2 mb-4">
          <span className='logo-name'>M.O.V.E Reserva</span>
        </div>

        {/* Steps */}
        <ul className="space-y-6 relative">
          {steps.map((step, i) => (
            <li key={step.title} className="flex items-start relative">
              {/* Linha de progresso */}
              {i < steps.length - 1 && (
                <div className="absolute left-3 top-6 h-full border-l border-gray-600" />
              )}

              {/* Ícone de status */}
              <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-400 mr-3 mt-0.5 bg-[var(--primary-color)] text-sm font-bold">
                {step.checked ? (
                  <div className="w-5 h-5 bg-yellow-400 rounded-full ac-center" />
                ) : (
                  <span className="text-yellow-400">{i + 1}</span>
                )}
              </div>

              {/* Texto */}
              <div>
                <h3 className="font-semibold text-sm">{step.title}</h3>
                {step.text && (
                  <p className="text-xs text-gray-400 leading-snug">
                    {step.text}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Total estimado */}
      <div className="card-price mt-10 pt-4 bg-[#000] rounded-[12px]">
        <div className="text-xs text-gray-400 mb-1">ESTIMATED TOTAL</div>
        <div className="text-yellow-400 font-bold text-xl">$1,006.24 *</div>
        <div className="text-xs text-gray-400">*Including taxes and fees</div>
      </div>
    </aside>
  );
}
