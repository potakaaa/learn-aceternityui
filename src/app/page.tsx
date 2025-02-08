import DevTooltip from "./components/DevTooltip";
import PostGallery from "./components/PostGallery";
import ReviewCards from "./components/ReviewCards";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-foreground flex justify-center items-center flex-col overflow-x-hidden space-y-10 py-10">
      <PostGallery />
      <ReviewCards />
      <section className="flex flex-row ">
        <DevTooltip />
      </section>
    </div>
  );
}
