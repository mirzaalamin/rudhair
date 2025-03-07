import ROUTES from "@/routes";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-primary border-t-[1px] border-secondary pt-16 pb-5 gap-8">
      <div className="flex flex-col items-center gap-5">
        <Image src="/images/logo.png" height={130} width={130} alt="Logo" />
        <div className="h4 text-center">
          <p>Sawbridgeworth: 01279 721 464</p>
          <span>
            E: <Link href="mailto:info@rudhair.co.uk">info@rudhair.co.uk</Link>
          </span>
        </div>

        <Button label="BOOK ONLINE" url="#" hoverColor="fff" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h4 className="h4 text-center underline">
          Covid-19 checklist for appointments
        </h4>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="font-raleway text-[15px] font-light text-secondary text-center flex gap-2">
          <Link href={ROUTES.HOME}>Home</Link> |
          <Link href={ROUTES.ABOUT}>About us</Link> |
          <Link href={ROUTES.SERVICES}>Services</Link> |
          <Link href={ROUTES.BLOG}>Blog</Link> |
          <Link href={ROUTES.CONTACT}>Contact</Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h4 className="h4">Follow us on Social Media</h4>
          <div className="social flex gap-2">
            <Link href="https://www.instagram.com/rudhair_/">
              <Image
                src="/images/instagram.png"
                height={40}
                width={40}
                alt="Instagram icon"
              />
            </Link>
            <Link href="https://www.facebook.com/Rudhair/">
              <Image
                src="/images/facebook.png"
                height={40}
                width={40}
                alt="Facebook icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright flex flex-col items-center font-raleway text-[15px] font-light text-secondary">
        <p>Copyright RudHair 2022</p>
        <Link href="#">Website by MW Studio</Link>
      </div>
    </div>
  );
};

export default Footer;
