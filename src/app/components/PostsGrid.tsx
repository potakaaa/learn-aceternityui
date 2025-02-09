import { LayoutGrid } from "@/components/ui/layout-grid";

export default function PostsGrid() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const Pic1 = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        My First Dog in 2010
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is my first dog. I love him so much. He is my bestfriend, my
        companion, and my love.
      </p>
    </div>
  );
};

const Pic2 = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        My Biggest Guard Dog in 2015
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is my biggest guard dog. He is my bestfriend, my companion, and my
        love.
      </p>
    </div>
  );
};

const Pic3 = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        My Cutest Dog in 2020
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is my cutest dog. He is my bestfriend, my companion, and my love.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <Pic1 />,
    className: "col-span-2 row-span-2",
    thumbnail: "/devPics/dog1.webp",
  },
  {
    id: 2,
    content: <Pic2 />,
    className: "col-span-1",
    thumbnail: "/devPics/dog2.webp",
  },
  {
    id: 3,
    content: <Pic3 />,
    className: "col-span-1",
    thumbnail: "/devPics/dog3.webp",
  },
];
