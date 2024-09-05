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
        "w-full grid grid-cols-1  lg:grid-cols-2 h-[50vh] lg:h-screen gap-x-2 justify-center items-center sm:my-8 md:my-0  py-18 p-2  text-content",
        className
      )}
    >
      {/* Text Section */}
      <div className="flex  mx-auto ml-10 lg:items-start  flex-col  lg:ml-20">
        <h2 className="text-md font-normal leading-tight text-start">
          Hi ✋🏾, here is Ado.
        </h2>
        <h1 className="text-6xl uppercase md:text-7xl  xl:text-8xl font-bold my-2  w-full max-w-[380px] leading-tight">
          A Frontend Developer.
        </h1>
        {/* <h4 className="font-bold mb-6 ">Based in Finland.</h4> */}
        <div className="flex items-center space-x-2">
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
        <h2 className="absolute  lg:bottom-[5.5rem] lg:left-[-2px]   xl:bottom-[6.5rem] xl:left-[90px] font-bold text-8xl text-title ">
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
