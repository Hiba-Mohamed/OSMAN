export function ExploreServices() {
  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold text-center p-12 md:text-5xl">
          What we offer
        </h1>
      </div>

      <div className="flex flex-col shadow-lg rounded-2xl m-6">
        <div className="flex flex-col items-center">
          <h1 className="bg-darkBlue w-full text-white font-bold text-center text-3xl p-4 rounded-t-2xl">
            Living Rooms
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <img className="w-65 md:w-96" src="./img/living.png"></img>
          <div className="flex flex-col rounded-b-2xl md:text-xl lg:text-3xl gap-2 md:gap-6 md:pl-10 p-4">
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png"></img>
              <p>Dusing surfaces, windows, blinds, and curtains.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png"></img>
              <p>Vaccuming & mopping floors.</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-3 h-3" src="./img/dot.png"></img>
              <p>Cleaning and disinfecting high traffic areas and surfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExploreServices;
