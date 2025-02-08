import { Spotlight } from "@/components/ui/spotlight-new";
import DevTooltip from "./components/DevTooltip";
import Parallax from "./components/Parallax";
import PostGallery from "./components/PostGallery";
import ReviewCards from "./components/ReviewCards";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-foreground flex justify-center items-center flex-col overflow-x-hidden space-y-10 py-10 antialiased relative">
      <section className="h-full my-20">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 h-20">
            My Dogs'
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            This is a sample website for my dogs. I love my dogs. They are my
            bestfriend, my companion, and my love.
          </p>
        </div>
      </section>
      <PostGallery />
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
