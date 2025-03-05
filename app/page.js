import Blurb from "@/components/blurb/Blurb";
import Hero from "@/components/hero/Hero";
import ThreeColumnSection from "@/components/threeColumnSection/ThreeColumnSection";
import ROUTES from "@/routes";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <div
        id="next-section"
        className="bg-primary gap-10 flex flex-col py-[50px]"
      >
        <div className="flex flex-col items-center justify-center w-[85%] m-auto gap-10">
          <h2 className="text-3xl font-yesevaOne text-secondary">
            Welcome to Rudhair
          </h2>
          <p className="text-center paragraph text-secondary">
            At Rudhair, we believe that your hair is a reflection of your
            individuality. Established in 2016 in the heart of Sawbridgeworth,
            <br />
            our salon has been dedicated to providing awesome, unique, and
            personalized hair services to our cherished clients.
          </p>
        </div>
        <ThreeColumnSection />

        <div className="flex flex-col items-center justify-center w-[85%] m-auto gap-10">
          <h3 className="text-secondary h3 italic text-center leading-[40px]">
            The RudHair Team welcomes you with warmth and open arms.
            <br /> Trust is our Bond; we recommend, we don’t sell.
          </h3>
        </div>
      </div>
      <div className="xl:min-h-[500px] min-h-[300px] bg-[url(https://rudhair.co.uk/wp-content/uploads/2019/03/3-VF_v2.jpg)] bg-cover bg-center "></div>

      <div className="bg-primary w-full pb-[40px] xl:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 w-[95%] m-auto p-10 ">
          <Blurb
            image="/images/comb.png"
            title="Our Services"
            content="From cutting-edge cuts to vibrant color transformations, we offer a wide range of services tailored to meet your needs. Whether you’re looking for a subtle change or a bold new look, we’re here to make your hair dreams a reality."
            buttonText="SERVICES"
            buttonURL={ROUTES.SERVICES}
          />
          <Blurb
            image="/images/logo.png"
            title="About us"
            content="Established in 2016 by Stephen Ruddock – aka Mr RudHair – our Sawbridgeworth salon quickly became one of the leading hairdressers in Hertfordshire and Essex."
            buttonText="ABOUT US"
            bordered
            buttonURL={ROUTES.ABOUT}
          />
          <Blurb
            image="/images/location.png"
            title="Find us"
            content="Located in the heart of Stephen’s home-town of Sawbridgeworth, with lots of nearby parking, RudHair attracts customers from Harlow, Bishop’s Stortford and beyond."
            buttonText="CONTACT US"
            buttonURL={ROUTES.CONTACT}
          />
        </div>
      </div>
    </div>
  );
}
