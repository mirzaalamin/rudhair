import NavLinks from "./NavLinks";

const DesktopNavigation = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex gap-10 font-raleway font-semibold text-sm max-md:hidden">
        <NavLinks />
      </nav>
    </div>
  );
};

export default DesktopNavigation;
