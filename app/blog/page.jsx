import GeneralHero from "@/components/aboutHero/GeneralHero";
import BlogCard from "@/components/cards/BlogCard";

const page = () => {
  const posts = [
    {
      title: "Embrace the Bloom: Spring Hair Trends to Refresh Your Look",
      image: "/images/blog-1.jpeg",
      excerpt:
        "As the chill of winter fades and the world begins to bloom, it's the perfect time to refresh your look with the latest spring hair trends. At Rudhair, we're excited to share some inspiring styles that will have you stepping into the new season with confidence and...",
    },
    {
      title: "We’re reopening soon!",
      image: "/images/blog-2.png",
      excerpt:
        "Hi everyone! We hope you’re all keeping safe and well during this weird time - we know some of you are desperate to see us and we can’t wait to see you too. If you saw our reopening video on our Facebook page last week, you probably already know about some of the...",
    },
    {
      title: "RudHair awarded 5 stars in Customer Experience award",
      image: "/images/blog-3.jpeg",
      excerpt:
        "At RudHair, we believe our clients are everything. When someone leaves our salon, we ask them to rate the experience – because only you can tell us if we are getting things right. Our metrics are measured by Phorest Salon Software. Based on your reviews, we were...",
    },
    {
      title:
        "Pushing Creativity to its limits: RudHair wins Goldwell Color Zoom Challenge award",
      image: "/images/blog-4.jpeg",
      excerpt:
        "RudHair beat off thousands of entries to win a top spot in the 2019 Goldwell Color Zoom Challenge. Designed by the global winners of the Color Zoom Challenge together with two of Goldwell’s international artists, the award inspires stylists to push the limits of their...",
    },
    {
      title: "RudHair wins MySalonManager Business Award",
      image: "/images/blog-5.jpg",
      excerpt:
        "For its third birthday, RudHair received a very special present: a business award from mysalonmanager business coaches. Stephen Ruddock – who founded the salon at the age of 25 – was singled out from around one hundred entries in the Most Improved Salon category. “We...",
    },
    {
      title: "Male Grooming: It’s a Man’s World",
      image: "/images/blog-6.jpg",
      excerpt:
        "When it comes to their suits, gentlemen like a tailored finish. Yet many are happy to leave their hair to barbers, where the consultation often starts and finishes with one question: how short? At RudHair, we tailor the cut and finish according to face shape, hair...",
    },
    {
      title:
        "Congratulations Hayley for passing her Goldwell Degree with Flying Colours",
      image: "/images/blog-7.jpg",
      excerpt:
        "Since April 1, Hayley has taken her rightful place as RudHair’s Colour Director after passing her Goldwell colour degree with a whopping 92%. Goldwell is one of the world’s top colour houses, with a reputation for being kinder and softer to hair (all its colours have...",
    },
  ];
  return (
    <div className="pb-16 bg-white dark:bg-primary">
      <GeneralHero
        image="/images/logo.png"
        title="RudBlog"
        content="Welcome to RudBlog, an insight into hairdressing our way."
        hashTag="#WeAreRudHair"
        bordered
      />
      <section className="bg-white dark:bg-primary flex flex-col gap-16">
        {posts.map((post) => (
          <BlogCard post={post} key={post.title} />
        ))}
      </section>
    </div>
  );
};

export default page;
