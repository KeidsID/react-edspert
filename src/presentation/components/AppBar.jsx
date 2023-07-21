const AppBar = () => {
  const navs = [
    { link: "#", title: "Program" },
    { link: "#", title: "Bidang Ilmu" },
    { link: "#", title: "Tentang Edspert" },
  ];

  return (
    <header className="sticky top-0 flex justify-between items-center bg-[#152A46] text-white px-8 sm:px-16 py-8">
      <h6 className="text-xl font-bold mr-8">LOGO</h6>
      <div id="actions" className="flex items-center">
        <nav className="flex">
          {navs.map((e, i) => (
            <a key={i} href={e.link} className="text-white no-underline mx-2.5">
              {e.title}
            </a>
          ))}
        </nav>
        <button className="mx-4 flex">Masuk/Daftar</button>
      </div>
    </header>
  );
};

export default AppBar;
