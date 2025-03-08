import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "../mode/ThemeToggler";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <div className=" hidden max-md:flex justify-between items-center">
      <div>
        <Link href="/">
          <Image src="/images/logo.png" height={50} width={50} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <Sheet>
          <SheetTrigger>
            <Image
              src="./images/hamburger.svg"
              alt="Hamburger icon"
              height={34}
              width={34}
            />
          </SheetTrigger>
          <SheetContent className="bg-primary text-white">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <div className="flex justify-start">
                  <nav className="flex flex-col items-start gap-6 font-raleway font-semibold text-sm min-h-screen">
                    <NavLinks isMobile />
                  </nav>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default MobileNavigation;
