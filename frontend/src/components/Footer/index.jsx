import { Facebook, Instagram, Twitter } from "lucide-react";

const pages = [
  { name: "Início", url: "/" },
  { name: "Sobre Nós", url: "/sobre-nos" },
  { name: "Como funciona", url: "/como-funciona" },
];

const pagesFunctions = [
  { name: "Alugéis", url: "/alugeis" },
  { name: "Contato", url: "/sobre-nos" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-color-variant)] dark:bg-gray-900 bg-">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-[var(--primary-color-variant)]">
              Se inscreva para receber atualizações.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-[var(--primary-color-variant)] border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-[var(--primary-color-variant)] transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Inscreva-se
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-[var(--primary-color-variant)]">
              Páginas
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {pages.map((page, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-[var(--primary-color-variant)]">
              Sobre Alugeis
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {pagesFunctions.map((page, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <a href="#">
                <img className="w-auto h-12" src="/favicon.svg" alt="" />
              </a>
              <p className="text-xl text-[var(--primary-color)] text-3xl font-semibold">
                M.O.V.E
              </p>
            </div>
            <p>Mobility On-demand for Versatility Experience</p>
          </div>

          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Twitter"
            >
              <Twitter />
            </a>

            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
