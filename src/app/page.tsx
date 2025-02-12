"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import DevTooltip from "./components/DevTooltip";
import PostGallery from "./components/PostGallery";
import ReviewCards from "./components/ReviewCards";
import PostsGrid from "./components/PostsGrid";
import PostButton from "./components/PostButton";
import { ModeToggle } from "@/components/theme-toggle";
import { Scroll } from "./components/Scroll";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

export default function page() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-full min-h-screen bg-background flex justify-center items-center flex-col overflow-x-hidden space-y-10 py-10 antialiased relative">
      <div className="h-56 w-4 rounded-full bg-rose-200 fixed top-10 right-10 bg-opacity-70 shadow-md overflow-hidden z-10">
        <motion.div
          className="bg-rose-500 h-full w-full rounded-xl bg-opacity-75 origin-bottom"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
      </div>
      <section className="h-full my-20">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center h-20">
            My Dogs'
          </h1>
          <p className="mt-4 font-normal text-base max-w-lg text-center mx-auto">
            This is a sample website for my dogs. I love my dogs. They are my
            bestfriend, my companion, and my love.
          </p>
        </div>
      </section>
      <Link href="/framer">Go to Motion Practice</Link>

      <ModeToggle />
      <Scroll />
      <PostGallery />
      <PostsGrid />
      <PostButton />
      <ReviewCards />
      <section className="flex flex-col justify-center items-center space-y-3 w-full">
        <p className="text-primary-foreground text-center self-center font-medium">
          Meet the team
        </p>
        <div className="flex flex-row ">
          <DevTooltip />
        </div>
      </section>
    </div>
  );
}
