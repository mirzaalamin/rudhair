import GeneralHero from "@/components/aboutHero/GeneralHero";
import Essential from "@/components/tables/Essential";
import ServicesTable from "@/components/tables/ServicesTable";

const page = () => {
  return (
    <div>
      <GeneralHero
        image="/images/logo.png"
        title="Services & prices"
        content="RudHair offers a full range of hair cuts and colours treatments, as well as styling for special occasions. Give us a call or pop in for a chat to discuss your requirements."
        bordered
      />

      <div
        className="xl:min-h-[500px] min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/rudhair-banner-3.jpg')" }}
      ></div>

      <ServicesTable />
      <Essential />

      <div
        className="xl:min-h-[500px] min-h-[200px] bg-cover bg-top"
        style={{ backgroundImage: "url('/images/rudhair-banner-4.jpg')" }}
      ></div>
    </div>
  );
};

export default page;
