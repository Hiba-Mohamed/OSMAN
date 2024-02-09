export function BookService() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center p-12 sm:text-4xl md:text-5xl md:p-16">
        Bookings
      </h1>
      <h3 className="text-lg font-bold sm:text-xl md:text-xl sm:w-500  sm:text-center md:w-700 lg:text-2xl px-6">
        Please call the number down below to book a cleaning!
      </h3>
      <div className="flex flex-row  sm:gap-4 items-center">
        <img src="img\phoneIcon.png" className="w-12 h-12"></img>
        <h3 className="text-2xl font-bold sm:text-xl md:text-xl  text-center p-12 lg:text-2xl px-6">
          + 1 (709) 682-4610{" "}
        </h3>
      </div>
    </div>
  );
}
export default BookService;
