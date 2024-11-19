import logo from "./assets/logo.svg";
import heroImg from "./assets/hero.png";
import footerImg from "./assets/footer.png";
import arrow from "./assets/side-up-arrow.svg"
function App() {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-3">
            <div className="flex gap-2 items-center cursor-pointer">
              <img src={logo} alt="logo" height={17} width={16} />
              <div className="text-base font-medium leading-none">
                Camille Moreau Atellier
              </div>
            </div>
            <div className="flex items-center gap-14">
              <nav>
                <ul className="flex items-center gap-14">
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    Projects
                  </li>
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    Process
                  </li>
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    About
                  </li>
                  <li className="text-[#1E1E1E] text-sm cursor-pointer">
                    Ethos
                  </li>
                </ul>
              </nav>
              <button className="bg-[#1E1E1E] text-[#EAEDF6] text-sm font-medium px-4 py-3 rounded-full">
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>
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
        <section className="pt-20 pb-32">
          <div className="container mx-auto">
            <h2 className="text-[#1E1E1E] text-[50px] font-medium tracking-tight leading-none">
              Awards
            </h2>
            <table className="table-auto w-full text-left mt-12">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="text-[#56514D] text-base leading-6 pb-10">Year</th>
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
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">2022</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">Interior of the Year - AIA New York</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">VIA 57 West <img src={arrow} alt="link icon" height={36} width={40} className="cursor-pointer"/></td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">2021</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">Merit Award - AIA New York</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">Copenhill House <img src={arrow} alt="link icon" height={36} width={40} className="cursor-pointer"/></td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">2021</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">Gold Winnier - London Design Awards</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">The Dryline <img src={arrow} alt="link icon" height={36} width={40} className="cursor-pointer"/></td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">2020</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">International Highrise Award -  AIA</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">Lego House <img src={arrow} alt="link icon" height={36} width={40} className="cursor-pointer"/></td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">2020</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px]">Honor Award for Interiors - ASLA</td>
                  <td className="py-5 text-[#34302D] text-[22px] leading-[35.2px] flex gap-10 justify-between">River Ring <img src={arrow} alt="link icon" height={36} width={40} className="cursor-pointer"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer className="bg-[#131313] py-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-20">
            <div className="flex gap-20">
              <img src={footerImg} alt="footer image" />
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-3">
                  <p className="text-[#EAEDF6] text-[22px] leading-[35.2px]">
                    Have a project in mind?{" "}
                  </p>
                  <p className="text-[#EAEDF6] text-[32px] leading-tight font-medium">
                    We'll work closely with you to understand your needs and
                    create a custom design that reflects your style and values.
                  </p>
                  <button className="max-w-[101px] mt-1 text-[#1E1E1E] text-sm leading-relaxed bg-[#EAEDF6] px-4 py-3 rounded-full">
                    Let’s Chat
                  </button>
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-[#EAEDF6] text-lg leading-snug font-medium">
                      Camille Moreau Atellier
                    </h3>
                    <ul className="flex flex-col gap-4">
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        Projects
                      </li>
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        Process
                      </li>
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        Design for democracy
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-[#EAEDF6] text-lg leading-snug font-medium">
                      About the firm
                    </h3>
                    <ul className="flex flex-col gap-4">
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        Ethos
                      </li>
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        People
                      </li>
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        Privacy
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-[#EAEDF6] text-lg leading-snug font-medium">
                      Address
                    </h3>
                    <ul className="flex flex-col gap-1">
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        98 11th Street, Floor 2
                      </li>
                      <li className="text-[#EAEDF6] text-sm leading-normal">
                        San Francisco, CA 94103
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm text-[#EAEDF6] leading-normal">
              Copyright © 2023 Camille Moreau Atellier
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
