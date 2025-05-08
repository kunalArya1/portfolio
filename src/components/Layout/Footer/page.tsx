export default function Footer() {
  return (
    <div className="">
      <section className="w-[100%] flex justify-between items-center border-y border-[#3a3a3a]  px-20  py-10">
        <div className="w-[30%]">
          <h1>Kunal Arya</h1>
          <p>
            A modern lightweight WordPressbr theme <br /> with lots of options,
            making it easy to <br />
            customize.
          </p>
        </div>
        <div className=" flex gap-4">
          <p>Home</p>
          <p>Contact us</p>
          <p>About</p>
          <p>Blog</p>
        </div>
        <div className="flex gap-4">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </section>

      {/* Section two */}
      <section className="py-8 px-20 flex items-center justify-between">
        <div>
          <p>© 2024 Kunal Arya. All Rights Reserved.</p>
        </div>
        <div className=" flex gap-4">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </div>
  );
}
