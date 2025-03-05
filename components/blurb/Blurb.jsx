import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "../Button";

const Blurb = ({ image, title, content, buttonText, buttonURL, bordered }) => {
  return (
    <div
      className={cn(
        bordered
          ? "border-t border-b border-secondary xl:border-t-0 xl:border-b-0 xl:border-l xl:border-r"
          : "border-none",
        "px-10 py-16 xl:py-0 text-center flex flex-col items-center gap-5"
      )}
    >
      {image && <Image src={image} height={80} width={80} alt="Icon" />}
      <div className="flex flex-col gap-3">
        <h3 className="text-secondary h3">{title}</h3>
        <p className="text-secondary paragraph leading-6">{content}</p>
      </div>
      {buttonText && buttonURL && <Button label={buttonText} url={buttonURL} />}
    </div>
  );
};

export default Blurb;
