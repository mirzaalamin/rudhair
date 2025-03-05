import { cn } from "@/lib/utils";
import Link from "next/link";

const Button = ({ label, url, hoverColor }) => {
  return (
    <button
      className={cn(
        hoverColor ? `hover:bg-[#fff]  hover:text-secondary` : "bg-secondary",
        "px-3 py-1 bg-secondary"
      )}
    >
      <Link
        href={url}
        // className="text-base font-medium font-raleway text-[#d8d8d8] hover:text-[#fff]"
        className={cn(
          hoverColor ? ` hover:text-secondary` : ` hover:text-[#fff]`,
          "text-[#d8d8d8] text-base font-medium font-raleway"
        )}
      >
        {label}
      </Link>
    </button>
  );
};

export default Button;
