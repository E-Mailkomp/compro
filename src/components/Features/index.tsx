// import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container ">
        <div className="title">
          <h1 className="text-center text-5xl font-bold">
            <span>Why Join Us?</span>
          </h1>
          <p className="mt-2 text-center">
            Bergabung dengan &lt;CODE/&gt; CREW berarti menjadi bagian dari
            komunitas yang mendukung perkembangan karir, keterampilan, dan
            wawasan teknologi Anda.
          </p>
        </div>

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
