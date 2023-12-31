import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);

  const scrollHandler = () => setIsScrollOnTop(window.scrollY <= 20);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const navs = [
    { link: "/", title: "Program" },
    { link: "#", title: "Bidang Ilmu" },
    { link: "#", title: "Tentang Edspert" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center px-page py-8 ${
        isScrollOnTop ? "" : "shadow-xl"
      }`}
    >
      <Link to={"/"} className="hover:text-white hover:no-underline">
        <h5 className="mr-8">LOGO</h5>
      </Link>
      <div id="actions" className="flex items-center">
        <nav className="flex">
          {navs.map((e, i) => (
            <Link
              key={i}
              to={e.link}
              className="text-white no-underline mx-2.5"
            >
              {e.title}
            </Link>
          ))}
        </nav>
        <button className="mx-4 flex">Masuk/Daftar</button>
      </div>
    </header>
  );
};

export default AppBar;
