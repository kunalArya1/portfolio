export default function NewLetter() {
  return (
    <section className="w-full bg-[#212121] rounded-xl my-20 px-4 py-12 flex items-center justify-center text-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-white font-bold text-2xl md:text-4xl mb-4">
          Subscribe to My Newsletter
        </h1>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Subscribe to my email newsletter to get the latest posts delivered
          right to your email.
          <br className="hidden sm:block" /> Pure inspiration, zero spam.
        </p>

        <div className="flex flex-row sm:flex-row items-center justify-center bg-[#595959] rounded-full p-1 mb-4">
          <input
            type="email"
            placeholder="Your E-mail"
            className="flex-1 px-4 py-2 text-white bg-transparent placeholder-gray-300 focus:outline-none rounded-full w-full sm:w-auto"
          />
          <button className=" sm:mt-0 sm:ml-2 bg-[#7e3ff2] hover:bg-[#692cce] text-white font-semibold text-sm px-6 py-2 rounded-full transition">
            Subscribe <span className="ml-1">→</span>
          </button>
        </div>

        <p className="text-gray-300 text-xs">
          You agree to the{" "}
          <span className="font-semibold text-white">Terms of Use</span> and{" "}
          <span className="font-semibold text-white">Privacy Policy</span>
        </p>
      </div>
    </section>
  );
}
