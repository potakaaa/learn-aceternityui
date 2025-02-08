import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "This platform has completely transformed the way I cook! The variety of recipes is incredible, and the step-by-step instructions make everything so easy.",
    name: "Emma Carter",
    title: "Home Chef & Food Blogger",
  },
  {
    quote:
      "I love how user-friendly the website is. I can save my favorite recipes, create shopping lists, and even share my own creations with the community!",
    name: "Daniel Thompson",
    title: "Culinary Enthusiast",
  },
  {
    quote:
      "As a professional chef, I’m always looking for inspiration. This platform provides an amazing collection of unique and delicious recipes!",
    name: "Chef Michael Reynolds",
    title: "Executive Chef, The Gourmet Kitchen",
  },
  {
    quote:
      "The recipe recommendations based on my preferences are spot on! It’s like having a personal chef curating meals for me every day.",
    name: "Sophia Martinez",
    title: "Nutritionist & Meal Planner",
  },
  {
    quote:
      "I never thought cooking could be this fun! The vibrant community, detailed recipes, and helpful tips make every meal an adventure.",
    name: "Liam Anderson",
    title: "Foodie & Travel Blogger",
  },
  {
    quote:
      "The baking section is a dream come true! I’ve learned so many new techniques and improved my skills thanks to the expert tips provided.",
    name: "Olivia Brooks",
    title: "Pastry Enthusiast",
  },
  {
    quote:
      "With so many dietary options available, I can easily find healthy and delicious meals that fit my lifestyle. Highly recommend!",
    name: "David Wilson",
    title: "Fitness Coach",
  },
  {
    quote:
      "The step-by-step video guides are a game-changer! They make even the most complex recipes easy to follow and replicate.",
    name: "Jessica Lee",
    title: "Aspiring Home Cook",
  },
  {
    quote:
      "Cooking for my family has never been easier. I love how I can filter recipes based on ingredients I already have at home!",
    name: "Mark Robinson",
    title: "Busy Parent",
  },
  {
    quote:
      "This platform is my go-to for discovering new cuisines. The international recipes section is an absolute delight!",
    name: "Isabella Cruz",
    title: "Culinary Explorer",
  },
];

export default function ReviewCards() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
