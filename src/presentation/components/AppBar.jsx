const AppBar = () => {
  const navs = [
    { link: "#", title: "Program" },
    { link: "#", title: "Bidang Ilmu" },
    { link: "#", title: "Tentang Edspert" },
  ];

  return (
    <header className="flex justify-between items-center bg-[#152A46] text-white px-16 py-8">
      <h1 className="text-xl mr-4">LOGO</h1>
      <div id="actions" className="flex items-center">
        <nav>
          {navs.map((e, i) => (
            <a key={i} href={e.link} className="text-white no-underline mr-2.5">
              {e.title}
            </a>
          ))}
        </nav>
        <button className="mx-4">Masuk/Daftar</button>
      </div>
    </header>
  );
};

export default AppBar;
