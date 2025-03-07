import { cn } from "@/lib/utils";
import Image from "next/image";

const GeneralHero = ({ image, title, content, hashTag, bordered }) => {
  return (
    <div className="bg-white dark:bg-primary px-10 py-16 text-center flex flex-col items-center gap-5 border-none">
      <div
        className={cn(
          bordered
            ? "xl:border-l-[1px] xl:border-r-[1px] border-secondary"
            : "",
          "flex flex-col items-center gap-5 xl:px-10 pb-10"
        )}
      >
        <Image src={image} height={100} width={100} alt="Icon" />
        <div className="flex flex-col gap-3 xl:w-[550px]">
          <h3 className="text-secondary font-yesevaOne text-[33px] font-light">
            {title}
          </h3>
          <p className="text-secondary paragraph leading-6">{content}</p>
          {hashTag && (
            <h4 className="text-secondary font-raleway font-bold text-[18px]">
              {hashTag}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralHero;
