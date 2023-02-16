import Mobile from "./componets/mobile/Mobile";
import Desktop from "./componets/desktop/Desktop";
function App() {
  return (
    <div className="bg-[#EFE5DC] font-playFair text-[#111122]">
      {/* <div className=" font-mono bg-black text-white p-4 -mt-6 text-[1rem] mb-4">
        <p className="hidden lg:block md:block sm:block">
          The website is underdevelopment so only the mobile version works for
          now. we appreicate your understanding.
          <a
            className="pr-1 underline"
            href={`https://www.figma.com/file/Zya2UojDkBpUbQqXfJmQJx/flowery-(Copy)?node-id=0%3A1&t=0eplBymbrJK3gkTW-1`}
          >
            Click here
          </a>
          view the design file
        </p>
        <p className="block lg:hidden md:hidden sm:hidden">
          The website is underdevelopment. we appreicate your understanding.
          <a
            className="pr-1 underline"
            href={`https://www.figma.com/file/Zya2UojDkBpUbQqXfJmQJx/flowery-(Copy)?node-id=0%3A1&t=0eplBymbrJK3gkTW-1`}
          >
            Click here
          </a>{" "}
          to view the design file
        </p>
      </div> */}
      <Mobile />
      <Desktop />
    </div>
  );
}

export default App;
