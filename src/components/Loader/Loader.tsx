const Loader = () => {
  return (
    <div className="w-full gap-x-2 flex justify-center items-center">
      <div className="w-5 bg-decorator h-5 rounded-full animate-bounce" />
      <div className="w-5  h-5 bg-mainColor rounded-full animate-bounce" />
      <div className="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce" />
    </div>
  );
};

export default Loader;
