import footerImg from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#131313] py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <img src={footerImg} alt="footer image" />
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-3">
                <p className="text-[#EAEDF6] text-[22px] leading-[35.2px]">
                  Have a project in mind?{" "}
                </p>
                <p className="text-[#EAEDF6] text-2xl lg:text-[32px] leading-tight font-medium">
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
  );
};

export default Footer;
