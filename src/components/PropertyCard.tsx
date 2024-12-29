type PropertyCardProps = {
  img: string;
  imgAlt: string;
  date: string;
  title: string;
};

const PropertyCard = ({ img, imgAlt, date, title }: PropertyCardProps) => {
  return (
    <div>
      <img src={img} alt={imgAlt} className="shadow-2xl rounded-md" />
      <div className="pt-[30px] md:pt-[60px]">
        <p className="text-xs text-[#1E1E1E] leading-none tracking-wide">
          {date}
        </p>
        <h3 className="text-xl text-[#1E1E1E] font-medium leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PropertyCard;
