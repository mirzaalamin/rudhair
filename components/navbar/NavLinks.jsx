"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from ".";
import { SheetClose } from "../ui/sheet";

const NavLinks = ({ isMobile }) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks?.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route > 1) ||
          pathname === item.route;

        if (isMobile) {
          return (
            <SheetClose asChild>
              <Link
                href={item.route}
                key={item.route}
                className={cn(
                  isActive ? "text-secondary" : "text-[#fff]",
                  "hover:text-secondary"
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
          );
        } else {
          return (
            <Link
              href={item.route}
              key={item.route}
              className={cn(
                isActive ? "text-secondary" : "text-[#fff]",
                "hover:text-secondary"
              )}
            >
              {item.label}
            </Link>
          );
        }
      })}
    </>
  );
};

export default NavLinks;
