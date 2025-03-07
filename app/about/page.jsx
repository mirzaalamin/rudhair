import GeneralHero from "@/components/aboutHero/GeneralHero";
import Blurb from "@/components/blurb/Blurb";

export const metadata = {
  title: "About - RudHair",
  description: "Hair salon and hair dressers in Sawbridgeworth, Hertfordshire",
  icons: {
    icon: "./images/favicon.png",
  },
};

const page = () => {
  return (
    <div>
      <GeneralHero
        image="/images/logo.png"
        title="About Us"
        content="At Rudhair, our clients are at the heart of everything we do. We proudly serve a diverse community of locals in Sawbridgeworth who appreciate the finer things in life and have a keen eye for style. With a desire for personalised service, our clients trust us to deliver exceptional hair care that aligns with their unique tastes and lifestyles.
Our clients are more than just customers; they are part of the Rudhair family. We take the time to understand their individual needs and preferences, ensuring that each visit is a personalised and enjoyable experience. Whether they’re seeking a fresh new look or maintaining their signature style, our clients know they can rely on us for expert advice and outstanding results."
        bordered
      />

      <div
        className="xl:min-h-[500px] min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/rudhair-banner.jpg')" }}
      ></div>

      <div className="bg-white dark:bg-primary w-full pb-[40px] xl:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 w-[95%] m-auto p-10">
          <Blurb
            title="Our Story"
            content="Founded by Steve, Rudhair was born out of a passion for creativity and a commitment to excellence. Over the years, we’ve grown into a trusted name in the community, known for our innovative techniques and personalized approach to hair care."
          />
          <Blurb
            title="Our Philosophy"
            content="We understand that every client is unique, and we take pride in crafting styles that reflect your personality and lifestyle. Our team of skilled stylists is dedicated to staying ahead of the latest trends while ensuring that your experience is as enjoyable as it is transformative."
            bordered
          />
          <Blurb
            title="Our Services"
            content="From cutting-edge cuts to vibrant colour transformations, we offer a wide range of services tailored to meet your needs. Whether you’re looking for a subtle change or a bold new look, we’re here to make your hair dreams a reality."
          />
        </div>
      </div>
    </div>
  );
};

export default page;
