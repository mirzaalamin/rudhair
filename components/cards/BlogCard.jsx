import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  const { title, image, excerpt } = post;
  return (
    <div className="w-[640px] m-auto flex flex-col gap-5">
      <Image
        src={image}
        height={700}
        width={600}
        alt="Featured image"
        className="h-full w-full object-contain"
      />
      <h2 className="h2 text-center  text-secondary">{title}</h2>
      <p className="font-raleway text-[15px] font-light text-secondary text-center">
        {excerpt}
      </p>
      <h4 className="uppercase text-center text-secondary font-raleway font-bold text-[15px]">
        <Link href="#">Read More</Link>
      </h4>
    </div>
  );
};

export default BlogCard;
