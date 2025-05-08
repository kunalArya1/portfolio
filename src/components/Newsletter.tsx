export default function NewLetter() {
  return (
    <section className="w-full h-[50%] bg-[#292929] rounded-lg my-20 flex items-center justify-center text-center">
      <div className="w-[40%]">
        <h1 className=" font-bold text-3xl m-b-5">
          Subscribe to My Newsletter
        </h1>
        <h4>
          Subscribe to my email newsletter to get the latest posts delivered
          right to your email. Pure inspiration, zero spam.
        </h4>
        <div className=" p-1 rounded-3xl flex justify-between items-center bg-[#767676]">
          <input
            type="text"
            className=" outline-none mx-4"
            placeholder="Enter Email"
          />
          <button className=" p-1 bg-[#7728bc] rounded-3xl px-5 py-2">
            Subsscribe
          </button>
        </div>
        <p>You agree to the Terms of Use and Privacy Policy</p>
      </div>
    </section>
  );
}
