export default function Header() {
  return (
    <div className="h-[15%] flex justify-between items-center bg-[#1f1e1e] border-b border-[#3a3a3a]  px-20 py-6">
      <div className="flex justify-between items-center gap-4">
        <div className="h-[25px] w-[25px] rounded-sm bg-amber-300"></div>
        <p>Kunal Arya</p>
      </div>
      <div className=" flex justify-between gap-9  cursor-pointer border-[1px] border-[#3a3a3a] px-6 rounded-3xl py-3 font-[3px]">
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
      </div>
      <div className="flex justify-between gap-4">
        <p>Button</p>
        <p>Search</p>
      </div>
    </div>
  );
}
