import { HeroParallax } from "@/components/ui/hero-parallax";

const prods = [
  {
    title: "Dog #1",
    link: "github.com/potakaaa",
    thumbnail: "/devPics/dog1.webp",
  },
  {
    title: "Dog #2",
    link: "github.com/potakaaa",
    thumbnail: "/devPics/dog2.webp",
  },
  {
    title: "Dog #3",
    link: "github.com/potakaaa",
    thumbnail: "/devPics/dog3.webp",
  },
];

export default function Parallax() {
  return <HeroParallax products={prods} />;
}
