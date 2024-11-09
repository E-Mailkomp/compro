import Image from "next/image";

const Visi = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-center text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Our Vision
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Visi &lt;CODE/&gt; CREW adalah membentuk komunitas belajar
                  yang solid, kolaboratif, dan inspiratif bagi mahasiswa D3
                  Teknik Informatika UNS, di mana setiap anggotanya dapat
                  mengembangkan keterampilan, pengetahuan, dan jaringan di
                  bidang teknologi. Komunitas ini bertujuan mempersiapkan
                  mahasiswa agar lebih siap menghadapi dunia kerja yang dinamis,
                  mampu mengikuti perkembangan teknologi terbaru, serta menjadi
                  individu yang inovatif dan kompeten di industri teknologi.
                </p>

                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-center text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Our Mission
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Misi &lt;CODE/&gt; CREW adalah menjadi wadah bagi mahasiswa D3
                  Teknik Informatika UNS untuk mengembangkan keterampilan ,
                  memperkaya pengalaman , dan memperluas relasi di bidang
                  teknologi. Melalui kegiatan belajar bersama, workshop, diskusi
                  , serta proyek kolaboratif, komunitas ini mendukung anggotanya
                  dalam menguasai keterampilan coding dan teknologi terbaru,
                  sekaligus meningkatkan soft skill seperti komunikasi dan kerja
                  tim yang penting untuk dunia kerja.
                </p>

                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visi;
