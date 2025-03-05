import GeneralHero from "@/components/aboutHero/GeneralHero";
import Button from "@/components/Button";

const page = () => {
  return (
    <div>
      <GeneralHero
        image="/images/logo.png"
        title="Contact Us"
        content="We invite you to visit our salon and experience the Rudhair difference. Book an appointment today and let us help you discover the perfect style that speaks to you."
        bordered
      />

      <div
        className="xl:min-h-[500px] min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/rudhair-banner-2.jpg')" }}
      ></div>

      <div className="bg-primary w-full pb-[40px] xl:py-5">
        <div className="grid grid-cols-1 xl:grid-cols-3 w-[95%] m-auto p-10">
          <div className="left-column xl:h-full h-[400]">
            <img
              src="/images/left.jpg"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="middle-column xl:min-h-[600px] px-9 ">
            <div className="flex flex-col items-center pt-16 pb-5 gap-8">
              <div className="flex flex-col items-center gap-5">
                <div className="h4 text-center">
                  <p>Sawbridgeworth: 01279 721 464 </p>
                  <span>E: info@rudhair.co.uk</span>
                </div>

                <Button label="BOOK ONLINE" url="#" hoverColor />
              </div>
              <div className="flex flex-col items-center gap-5">
                <h4 className="h4 text-center">
                  We do politely ask for 24 hours notice to cancel or change
                  your appointment to <br /> avoid a 50% charge.
                </h4>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <h4 className="h4">RudHair Sawbridgeworth</h4>
                  <div className="copyright flex flex-col items-center font-raleway text-[15px] font-light text-secondary">
                    <p>No. Four</p>
                    <p>The Square</p>
                    <p>Sawbridgeworth</p>
                    <p>Hertfordshire</p>
                    <p>CM21 9AE</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Button
                  label="GET DIRECTIONS"
                  url="https://www.google.co.uk/maps/dir//The+Square,+Sawbridgeworth+CM21+9AE/@51.812091,0.1484939,17z/data=!4m16!1m7!3m6!1s0x47d89af8f9f10d7d:0xd5027f9ecfc1f0b1!2sThe+Square,+Sawbridgeworth+CM21+9AE!3b1!8m2!3d51.8120093!4d0.1510288!4m7!1m0!1m5!1m1!1s0x47d89af8f9f10d7d:0xd5027f9ecfc1f0b1!2m2!1d0.1510288!2d51.8120093"
                  hoverColor
                />
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <h4 className="h4">Opening Hours</h4>
                  <div className="copyright flex flex-col items-center font-raleway text-[15px] font-light text-secondary">
                    <p>Monday: Closed</p>
                    <p>Tuesday: 9-5.00pm</p>
                    <p>Wednesday: 9-8.30pm</p>
                    <p>Thursday: 9-8.30pm</p>
                    <p>Friday: 9-8.30pm</p>
                    <p>Saturday: 8.30-4.30pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column xl:h-full h-[400]">
            <img
              src="/images/right.jpg"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1740599451077!6m8!1m7!1sCAoSK0FGMVFpcFByMVlzZUZnS1o5b2k1TTAzUUVKaDVYLWVUeFUySmQ4ZDZ6U1E.!2m2!1d51.81222177768481!2d0.15103547744329!3f275.17!4f10.599999999999994!5f0.4478503500022007"
          width="100%"
          height="550"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
