import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <div className="justify-end hidden max-md:flex">
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
    </div>
  );
};

export default MobileNavigation;
