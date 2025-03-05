import Image from "next/image";

const Hero = ({}) => {
  return (
    <div className="relative bg-[url(https://rudhair.co.uk/wp-content/uploads/2019/03/33-VF_v2.jpg)] bg-no-repeat bg-cover overflow-hidden max-md:h-[60vh] flex items-center justify-center">
      <video
        className="z-10 absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/rudhair.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="min-h-screen bg-[#3333339e] w-full  flex items-center justify-center z-20">
        <Image
          src="/images/homepage-logo.png"
          height={250}
          width={250}
          alt="Logo"
          className="xl:h-[400px] xl:w-[400px] transition"
        />
      </div>
    </div>
  );
};

export default Hero;
