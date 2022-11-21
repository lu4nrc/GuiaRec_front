import Button from "./Button";

const headerLinks = [
  {
    title: "Quem somos",
    link: "#quemsomos",
  },
  {
    title: "Serviços",
    link: "#servicos",
  },
  {
    title: "Portfólio",
    link: "#",
  },
  {
    title: "Vitrine",
    link: "#vitrine",
  },
  {
    title: "Fale Conosco",
    link: "#",
  },
];

const Header = () => {
  return (
    <div className="w-full fixed z-10">
      <div className="shadow-lg relative bg-white/50 backdrop-blur-sm">
        <div className=" flex justify-between p-3 max-w-screen-xl mx-auto">
          <div className="flex items-center">
          <p className="font-light text-2xl ">Guia<span className="text-primary font-black">REC</span></p>
          </div>
          <ul className="hidden  md:flex m-2 p-0">
            {headerLinks.map((item) => {
              return (
                <li className="flex items-center " key={item.title}>
                  <a
                    className="font-montserrat font-semibold pl-3 text-slate-500 focus:text-primary transition"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex space-x-2">
          <Button link="https://www.whatsapp.com/?lang=pt_br" title="Vamos conversar?" />
          <a href="/Login" className="block text-center text-primary border-2 border-primary text-xl px-8 py-4 rounded-xl">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
