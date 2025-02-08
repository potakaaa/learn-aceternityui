import Carousel from "@/components/ui/carousel";

const posts = [
  {
    title: "Dog #1",
    button: "Adopt me!",
    src: "/devPics/dog1.webp",
  },
  {
    title: "Dog #2",
    button: "Adopt me!",
    src: "/devPics/dog2.webp",
  },
  {
    title: "Dog #3",
    button: "Adopt me!",
    src: "/devPics/dog3.webp",
  },
];

export default function PostGallery() {
  return (
    <div className="relative overflow-hidden w-full h-full pb-20 ">
      <Carousel slides={posts} />
    </div>
  );
}
