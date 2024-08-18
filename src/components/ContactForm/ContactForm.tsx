import Button from "../button/Button";
export default function ContactForm() {
  return (
    <>
      <form action="#" className="flex flex-col gap-7 my-6 ]">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium uppercase text-content"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="outline ring-offset-2 ring-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 uppercase text-sm font-medium text-content"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className=" outline  ring-4 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2  uppercase text-sm font-medium text-content"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block outline ring-4 p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 resize-none"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <Button type="submit" btnHerf="contact" className="">
          Contact Us
        </Button>
      </form>
    </>
  );
}
