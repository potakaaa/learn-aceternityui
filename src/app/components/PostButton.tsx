"use client";

import { Button } from "@/components/ui/button";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useState } from "react";

export default function PostButton() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <div>
      <MultiStepLoader
        loadingStates={loadingText}
        loading={loading}
        duration={1000}
      />
      <Button variant={"outline"} onClick={handleLoading}>
        Post an image
      </Button>
      {loading && (
        <Button
          className="z-[120] fixed bottom-56 flex justify-center items-center"
          onClick={() => setLoading(false)}
        >
          Cancel
        </Button>
      )}
    </div>
  );
}

const loadingText = [
  {
    text: "Loading message #1",
  },
  {
    text: "Loading message #2",
  },
  {
    text: "Loading message #3",
  },
  {
    text: "Loading message #4",
  },
  {
    text: "Loading message #5",
  },
];
