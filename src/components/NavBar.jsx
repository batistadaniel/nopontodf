import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  const itensMenu = [
    { key: "MapView", nomeFull: "Mapa", nomeSm: "Mapa", icone: "fa-regular fa-map", link: "#" },
    {
      key: "Teste",
      nomeFull: "Linhas e Horários",
      nomeSm: "Horários", // rótulo reduzido para telas pequenas
      icone: "fa-regular fa-clock",
      link: "#",
    },
    { key: "favoritos", nomeFull: "Favoritos", nomeSm: "Favoritos", icone: "fa-regular fa-bookmark", link: "#" },
    { key: "oper", nomeFull: "Operacional", nomeSm: "Operacional", icone: "fa-solid fa-square-poll-vertical", link: "#" },
    { key: "frota", nomeFull: "Frota", nomeSm: "Frota", icone: "fa-solid fa-bus-simple", link: "#" },
    { key: "cfg", nomeFull: "Configurações", nomeSm: "Config.", icone: "fa-solid fa-gear", link: "https://google.com" },
  ];

  return (
    // mobile: fixed bottom bar (h-16), md+: fixed left sidebar (w-24, h-screen)
    <nav
      className="
        fixed bottom-0 left-0 right-0 h-16 bg-blue-500 flex items-center justify-start p-2 z-30
        md:fixed md:top-0 md:left-0 md:bottom-auto md:h-screen md:w-24 md:flex-col md:items-center md:py-4
      "
      aria-label="Menu principal"
    >
      <ul className="flex flex-row items-center justify-around w-full md:flex-col md:items-center md:justify-start">
        {itensMenu.map((item) => (
          <Link to={item.key} key={item.key} className="text-center md:mb-6">
            <a
              href={item.link}
              className="flex flex-col items-center text-white hover:text-gray-200 px-2"
              aria-label={item.nomeFull}
            >
              {/* ícone sempre visível */}
              <i className={`${item.icone} text-2xl`} aria-hidden="true"></i>

              {/* rótulos: mostra versão curta em sm (default), versão completa a partir de md */}
              <span className="text-xs mt-1 block md:hidden">{item.nomeSm}</span>
              <span className="hidden md:block text-sm mt-2">{item.nomeFull}</span>
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;