import Mobile from "./componets/mobile/Mobile";
function App() {
  return (
    <div className="bg-[#EFE5DC] py-6 px-4 font-playFair text-[#111122]">
      <div className=" font-mono bg-black text-white p-4 -mt-6 text-[1rem] mb-4">
        <p className="hidden lg:block md:block sm:block">
          The website is underdevelopment so only the mobile version works for
          now. we appreicate your understanding.
        </p>
        <p>
          The website is underdevelopment. we appreicate your understanding.
        </p>
      </div>
      <Mobile />
    </div>
  );
}

export default App;
