"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center mt-24 text-center">
      <p className="text-2xl">Something went wrong!</p>
      <button
        className="underline hoveer:cursor-pointer"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
