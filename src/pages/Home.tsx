import heroImg from "../assets/hero.png";
import arrow from "../assets/side-up-arrow.svg";
import copenhillHouse from "../assets/copenhill-house.png";
import copenhillHouse2 from "../assets/copenhill-house-2.png";
import copenhillHouse3 from "../assets/copenhill-house-3.png";
import copenhillHouse4 from "../assets/copenhill-house-4.png";
import copenhillHouse5 from "../assets/copenhill-house-5.png";
import copenhillHouse6 from "../assets/copenhill-house-6.png";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  return (
    <main>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-[#1E1E1E] text-[90px] leading-none tracking-tight max-w-[730px]">
              Beautiful and environmentally friendly homes.
            </h2>
            <p className="text-[#34302D] text-[22px] leading-[35.2px] max-w-[390px]">
              Sustainability doesn't have to come at the cost of style. That's
              why we're committed to building homes that are not only
              environmentally friendly, but also beautiful and modern.
            </p>
          </div>
        </div>
      </section>
      <section className="py-2.5">
        <div className="container mx-auto">
          <div className="flex items-center gap-10">
            <div className="text-2xl leading-[150%] text-[#1E1E1E] tracking-normal">
              Completed Projects
            </div>
            <div className="text-2xl leading-[150%] text-[#1E1E1E] tracking-normal">
              Active Projects
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <img
            src={heroImg}
            alt="hero image"
            className="shadow-2xl rounded-md"
          />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-20">
            <h2 className="font-medium text-[#1E1E1E] text-[60px] leading-none tracking-tight max-w-[800px]">
              Great design doesn't have to come at a cost to the environment.
            </h2>
            <p className="text-[#1E1E1E] text-[32px] leading-snug tracking-tight max-w-[560px]">
              From sleek, minimalist designs to more organic, nature-inspired
              homes, we've designed a wide range of modern, sustainable homes
              for clients across the country.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="py-20">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[#1E1E1E] text-[32px] font-medium leading-snug tracking-tight">
                    Projects
                  </h3>
                  <p className="text-base text-[#1E1E1E] leading-relaxed pt-[18px] pb-[30px] max-w-[300px]">
                    Our portfolio showcases a range of projects, from cozy
                    living rooms to luxurious bedrooms, and everything in
                    between. We have worked on residential projects, commercial
                    spaces, and hospitality interiors, and have experience
                    working with a variety of design styles.
                  </p>
                  <button className="bg-[#1E1E1E] text-[#EAEDF6] text-sm font-medium px-4 py-3 rounded-full">
                    Explore All
                  </button>
                </div>
                <PropertyCard
                  img={copenhillHouse2}
                  imgAlt="Copenhill House image 2"
                  date="2018"
                  title="Copenhill House"
                />
              </div>
              <PropertyCard
                img={copenhillHouse}
                imgAlt="Copenhill House image"
                date="2018"
                title="Copenhill House"
              />
            </div>
          </div>
          <div className="py-20">
            <div className="flex justify-end gap-24">
              <PropertyCard
                img={copenhillHouse3}
                imgAlt="Copenhill House image 3"
                date="2018"
                title="Copenhill House"
              />
              <div>
                <h3 className="text-[#1E1E1E] text-[32px] font-medium leading-snug tracking-tight">
                  Delicate spaces
                </h3>
                <p className="text-base text-[#1E1E1E] leading-relaxed pt-[18px] pb-[30px] max-w-[300px]">
                  We believe that a well-designed space can have a positive
                  impact on your life, and we are committed to creating spaces
                  that are not only beautiful but also functional and
                  comfortable.
                </p>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="flex justify-end gap-24">
              <PropertyCard
                img={copenhillHouse4}
                imgAlt="Copenhill House image 4"
                date="2018"
                title="Copenhill House"
              />
            </div>
          </div>
          <div className="py-20">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col justify-end">
                <PropertyCard
                  img={copenhillHouse6}
                  imgAlt="Copenhill House image 6"
                  date="2018"
                  title="Copenhill House"
                />
              </div>
              <PropertyCard
                img={copenhillHouse5}
                imgAlt="Copenhill House image5"
                date="2018"
                title="Copenhill House"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-32">
        <div className="container mx-auto">
          <h2 className="text-[#1E1E1E] text-[50px] font-medium tracking-tight leading-none">
            Awards
          </h2>
          <table className="table-auto w-full text-left mt-12">
            <thead>
              <tr className="border-b border-black/10">
                <th className="text-[#56514D] text-base leading-6 pb-10">
                  Year
                </th>
                <th className="text-[#56514D] text-base leading-6 pb-10">
                  Awards & distinctions
                </th>
                <th className="text-[#56514D] text-base leading-6 pb-10">
                  Project
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/10">
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  2022
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  Interior of the Year - AIA New York
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">
                  VIA 57 West{" "}
                  <img
                    src={arrow}
                    alt="link icon"
                    height={36}
                    width={40}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  2021
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  Merit Award - AIA New York
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">
                  Copenhill House{" "}
                  <img
                    src={arrow}
                    alt="link icon"
                    height={36}
                    width={40}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  2021
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  Gold Winnier - London Design Awards
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">
                  The Dryline{" "}
                  <img
                    src={arrow}
                    alt="link icon"
                    height={36}
                    width={40}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  2020
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  International Highrise Award - AIA
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">
                  Lego House{" "}
                  <img
                    src={arrow}
                    alt="link icon"
                    height={36}
                    width={40}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  2020
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">
                  Honor Award for Interiors - ASLA
                </td>
                <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">
                  River Ring{" "}
                  <img
                    src={arrow}
                    alt="link icon"
                    height={36}
                    width={40}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Home;