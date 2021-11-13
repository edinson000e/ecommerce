import React from "react";

interface LoadingProps {
  loadingOn: boolean;
}

export default function Loading({ loadingOn = true }: LoadingProps) {
  return (
    <>
      {loadingOn && (
        <div className="flex items-center justify-center ">
          <div className="w-10 h-10 border-b-2 border-yellow-500 rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
