const PageFooter = () => {
  const navs = [
    {
      header: "Program",
      navs: [
        { link: "#", title: "Online Course" },
        { link: "#", title: "Mini Bootcamp" },
        { link: "#", title: "Bootcamp" },
      ],
    },
    {
      header: "Bidang Ilmu",
      navs: [
        { link: "#", title: "Digital Marketing" },
        { link: "#", title: "Product Management" },
        { link: "#", title: "English" },
        { link: "#", title: "Programming" },
      ],
    },
    {
      header: "Tentang Edspert",
      navs: [
        { link: "#", title: "Bantuan" },
        { link: "#", title: "Kontak Kami" },
        { link: "#", title: "Media Sosial" },
      ],
    },
  ];

  return (
    <footer className="relative">
      <div className="absolute bottom-0 right-0 circle-1/4"></div>

      <section className="relative flex flex-row justify-between px-page py-24 text-black/60">
        <div id="about" className="flex flex-col basis-1/3 gap-4">
          <h6>TAGLINE edspert disini</h6>
          <p>
            Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55581
          </p>
        </div>
        <div id="navs" className="flex flex-col gap-24">
          <nav className="flex flex-row gap-8">
            {navs.map((e, i) => (
              <section key={i} className="flex flex-col gap-3">
                <h6 className="text-black">{e.header}</h6>
                {e.navs.map((e, i) => (
                  <a key={i} href={e.link}>
                    {e.title}
                  </a>
                ))}
              </section>
            ))}
          </nav>
          <p>
            Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default PageFooter;
