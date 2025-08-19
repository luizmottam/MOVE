import LinkGroup from "./LinkGroup";
import { footerLinks } from "./footer.config";
import {Instagram, Twitter, Facebook} from 'lucide-react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 mx-[10rem] my-2">
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">
            Inscreva-se para receber atualizações
          </h2>
          <div className="flex gap-5">
            <input
              className="border rounded-lg p-1.5"
              type="email"
              name="email"
              placeholder="Digite seu email"
              id=""
            />
            <input
              type="button"
              value="Inscreva-se"
              className="bg-[var(--pc)] text-white font-semibold px-6 rounded-lg"
            />
          </div>
        </div>
        {footerLinks.map((section, index) => (
          <LinkGroup key={index} title={section.title} links={section.links} />
        ))}
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img className="h-12" src="favicon.svg" alt="" />
          <p className="font-">Mobility On-demand for Versatility Experience</p>
        </div>
        <div className="flex gap-5">
          <Link to='/#' className="hover:text-gray-400 hover:transform "><Twitter/></Link>
          <Link to='/#' className="hover:text-gray-400"><Instagram/></Link>
          <Link to='/#' className="hover:text-gray-400"><Facebook/></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
