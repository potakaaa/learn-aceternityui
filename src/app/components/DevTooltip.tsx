import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const devs = [
  {
    id: 1,
    name: "Hans Del Mundo",
    designation: "Backend Developer",
    image: "/devPics/dog1.webp",
  },
  {
    id: 2,
    name: "Ira Chloie Narisma",
    designation: "UI/UX Designer",
    image: "/devPics/dog2.webp",
  },
  {
    id: 3,
    name: "Gerald Helbiro Jr.",
    designation: "Frontend Developer",
    image: "/devPics/dog3.webp",
  },
];

export default function DevTooltip() {
  return <AnimatedTooltip items={devs} />;
}
