import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "../mode/ThemeToggler";
import NavLinks from "./NavLinks";

const DesktopNavigation = () => {
  return (
    <div className="flex justify-between items-center max-md:hidden">
      <div>
        <Link href="/">
          <Image src="/images/logo.png" height={50} width={50} alt="Logo" />
        </Link>
      </div>
      <nav className="flex gap-10 font-raleway font-semibold text-sm max-md:hidden">
        <NavLinks />
      </nav>

      <div>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default DesktopNavigation;
