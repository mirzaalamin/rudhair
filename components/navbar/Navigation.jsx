import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  return (
    <div className="py-5 px-10 z-30 bg-primary text-[#fff] sticky top-0 drop-shadow-sm">
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default Navigation;
