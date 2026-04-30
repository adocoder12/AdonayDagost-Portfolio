import Button from "../button/Button";

type BannerProps = {
  title: string;
  content?: string;
  coverImg?: string;
  links?: { href: string; text: string }[];
  link?: { href: string; text: string };
};

import CoverImg_banner from "../../assets/img/AboutCover_pic.jpg";

export default function Banner({
  title,

  links,
  coverImg,
}: BannerProps) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center gap-y-8 p-6 shadow-lg h-[30vh] md:h-[42vh] bg-cover bg-center w-full`}
        style={{ backgroundImage: `url(${CoverImg_banner || coverImg})` }}
      >
        <h1 className=" lg:text-5xl absolute  text-black-02 uppercase font-medium backdrop-brightness-50">
          {title + "_"}
        </h1>
        <div className=" flex gap-x-6">
          {links &&
            links.length > 0 &&
            links.map((link, idx) => (
              <Button
                className="last:bg-white-03  last:hover:bg-inherit last:hover:text-white-02 "
                key={idx}
                btnHerf={link.href}
              >
                {link.text}
              </Button>
            ))}
        </div>
      </div>
    </>
  );
}
