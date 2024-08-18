import { cn } from "@/utils/cn";
// typees of components
import { THero } from "@/utils/types/types";
//components
import Button from "../button/Button";

import profilePic from "../../assets/img/profile.jpeg";

export default function Hero({ links, className }: THero) {
  return (
    <section
      className={cn(
        "w-full flex justify-around items-center pt-18 py-28 lg:py-48 px-2  text-content",
        className
      )}
    >
      {/* Text Section */}
      <div className="flex flex-col ">
        <h4 className="text-2xl">Hi ✋🏾 I’m Ado,</h4>
        <h2 className="title text-6xl font-bold my-2 max-w-[320px] leading-tight">
          Jr Frontend Developer
        </h2>
        <h4 className="font-bold mb-6 ">Based in Finland.</h4>
        <div className="flex space-x-2">
          {links &&
            links.length > 0 &&
            links.map((link, idx) => (
              <Button key={idx} btnHerf={link.href}>
                {link.text}
              </Button>
            ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden md:inline-flex  w-[260px] h-[260px]  ">
        {/* slash */}
        <div className="absolute bottom-10 font-medium text-decorator">
          /////
        </div>
        {/* Circular Border */}
        <div className="absolute w-[260px] h-[260px] border border-solid rounded-full -left-2 top-2"></div>
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="selfPic"
          className="w-full h-full object-cover object-center rounded-full  shadow-lg bg-center "
        />
      </div>
    </section>
  );
}
