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
        "w-full grid grid-cols-1  lg:grid-cols-2 min-h-screen gap-x-2 justify-center items-center py-18 p-2  text-content",
        className
      )}
    >
      {/* Text Section */}
      <div className="flex flex-col md:ml-28 ">
        <h4 className="text-lg leading-tight text-start">
          Hi ✋🏾, here is Ado behind the keyboard._
        </h4>
        <h2 className=" text-4 md:text-6xl font-bold my-2  w-full max-w-[480px] leading-tight">
          Junior Frontend Developer.
        </h2>
        {/* <h4 className="font-bold mb-6 ">Based in Finland.</h4> */}
        <div className="flex space-x-2">
          {links &&
            links.length > 0 &&
            links.map((link, idx) => (
              <Button key={idx} btnHerf={link.href} className="">
                {link.text}
              </Button>
            ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden lg:flex md:justify-center  md:items-center  w-full h-screen  p-4">
        {/* slash */}
        <h2 className="absolute bottom-[7.5rem] left-[90px] font-bold text-8xl text-title ">
          A.D
        </h2>
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="selfPic"
          className="w-sm h-2/3   object-cover object-center rounded-md  shadow-lg bg-center "
        />
      </div>
    </section>
  );
}
