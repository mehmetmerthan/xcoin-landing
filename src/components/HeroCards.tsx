import coin from "../assets/coin-logo.png";
export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <img
        src={coin}
        alt="Image Description"
        className="absolute top-8 right-64 w-64 h-64"
      />
    </div>
  );
};
