import React from "react";

type MainContainer_Props = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainer_Props) {
  return (
    <main className="flex flex-col items-center  gap-y-4  mt-24 justify-between w-[calc(100%-24px)] pb-7">
      {children}
    </main>
  );
}
