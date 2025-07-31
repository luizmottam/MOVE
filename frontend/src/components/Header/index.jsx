// Componente de Logo
const Logo = ({ iconLogo, nameLogo }) => (
  <div className="flex items-center gap-x-2 cursor-pointer">
    <img
      src={iconLogo}
      alt={`${nameLogo} logo`}
      className="h-8 sm:h-10 hover:opacity-80 transition-opacity"
    />
    <span className="text-2xl sm:text-3xl font-semibold hover:opacity-80">
      {nameLogo}
    </span>
  </div>
);

// Componente de Login/Cadastro
const Login = () => (
  <div className="flex items-center gap-x-4 sm:gap-x-6 mt-3 sm:mt-0">
    <a
      href="#"
      className="text-sm sm:text-base font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400"
    >
      Entrar
    </a>
    <button
      type="button"
      className="py-1.5 sm:py-2 px-4 text-sm sm:text-base inline-flex items-center gap-x-2
                 font-medium text-[var(--primary-color-variant)]
                 bg-[var(--second-color)] border border-transparent rounded-full
                 shadow-2xs hover:bg-[var(--second-color-hover)] hover:scale-105
                 transition-all duration-300"
    >
      Cadastrar
    </button>
  </div>
);

// Componente de Páginas
const Pages = ({ pages }) => (
  <>
    {pages.map(({ namePage, linkPage }) => (
      <a
        key={namePage}
        href={linkPage}
        className="font-medium text-[var(--primary-color-variant)] hover:text-gray-400 focus:outline-none"
      >
        {namePage}
      </a>
    ))}
  </>
);

// Header principal responsivo
export default function Header() {
  const iconLogo = "./favicon.svg";
  const nameLogo = "M.O.V.E";

  const pages = [
    { namePage: "Sobre Nós", linkPage: "/sobre" },
    { namePage: "Ajuda", linkPage: "/ajuda" },
  ];

  return (
    <header className="bg-[var(--primary-color)] text-[var(--primary-color-variant)]">
      <nav className="w-full max-w-[95%] mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Linha superior no mobile / alinhamento horizontal no desktop */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start sm:gap-8">
          <Logo iconLogo={iconLogo} nameLogo={nameLogo} />
          <div className="sm:hidden">
            <Login />
          </div>
        </div>

        {/* Pages centralizadas no mobile, alinhadas no desktop */}
        <div className="flex justify-center sm:justify-start gap-6 text-base w-full sm:w-auto">
          <Pages pages={pages} />
        </div>

        {/* Login visível apenas no sm+ */}
        <div className="hidden sm:block">
          <Login />
        </div>
      </nav>
    </header>
  );
}
