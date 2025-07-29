import "./Header.css";

// Componente de Logo
const Logo = ({ iconLogo, nameLogo }) => (
  <div className="flex items-center gap-x-2">
    <img src={iconLogo} alt={`${nameLogo} logo`} className="h-10" />
    <a
      href="#"
      className="text-3xl font-semibold focus:outline-none focus:opacity-80"
    >
      {nameLogo}
    </a>
  </div>
);

// Componente de Login/Cadastro
const Login = () => (
  <div className="flex items-center gap-x-6">
    <a
      href="#"
      className="font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400
                 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
    >
      Entrar
    </a>
    <button
      type="button"
      className="py-2 px-4 inline-flex items-center gap-x-2
                 font-medium text-white
                 bg-[var(--second-color)] border border-transparent rounded-full
                 shadow-2xs
                 hover:bg-[var(--second-color-hover)] hover:scale-105
                 cursor-pointer transition-[background] duration-300 ease-in-out"
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
        className="font-medium text-white-800 hover:text-gray-400 focus:outline-none focus:text-gray-400
                   dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
      >
        {namePage}
      </a>
    ))}
  </>
);

// Componente principal Header
export default function Header() {
  const iconLogo = "./favicon.svg";
  const nameLogo = "M.O.V.E";

  const pages = [
    { namePage: "Sobre Nós", linkPage: "/sobre" },
    { namePage: "Ajuda", linkPage: "/ajuda" },
  ];

  return (
    <header className="bg-white dark:bg-neutral-800">
      <nav className="text-lg w-full max-w-[95%] mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Logo iconLogo={iconLogo} nameLogo={nameLogo} />

        {/* Login */}
        <div className="sm:order-3">
          <Login />
        </div>

        {/* Menu de páginas */}
        <div
          id="hs-navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
          aria-labelledby="hs-navbar-alignment-collapse"
        >
          <div className="flex flex-col gap-20 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <Pages pages={pages} />
          </div>
        </div>
      </nav>
    </header>
  );
}
