export function BookService() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-8 sm:text-4xl md:text-5xl md:p-16">
        Bookings
      </h1>
      <div>
        <form>
          <h1 className="bg-darkBlue rounded-t-2xl text-white text-2xl font-bold text-center py-2 mx-3">
            Booking Form
          </h1>
          <div className="shadow-2xl mx-3 text-lg px-2 py-4 flex flex-col rounded-b-2xl">
            <div className="flex flex-col">
              <label className="font-bold">Your Name:</label>
              <input className=""></input>
              <label className="font-bold">Phone Number:</label>
              <input className=""></input>
              <label className="font-bold">Your Email:</label>
              <input className=""></input>
              <label className="font-bold">Service being requested:</label>
              <input className=""></input>
              <label className="font-bold">Date service being requested:</label>
              <input className=""></input>
            </div>
            <button className="bg-darkBlue py-1 w-40 rounded-lg self-center text-white hover:bg-lightBlue hover:text-black font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default BookService;
