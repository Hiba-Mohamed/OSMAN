export function BookService() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center p-12 sm:text-4xl md:text-5xl md:p-16">
        Bookings
      </h1>
      <div>
        <form className="pt-8 w-96 sm:w-400 md:w-600">
          <h1 className="bg-darkBlue rounded-t-2xl text-white text-2xl font-bold text-center py-2 mx-3">
            Booking Form
          </h1>
          <div className="shadow-2xl mx-3 px-4 sm:px-8 text-lg px-2 py-4 flex flex-col rounded-b-2xl">
            <div className="flex flex-col gap-8">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="mt-2 pl-2 appearance-none text-nunito-900 bg-white rounded-sm block w-full h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-slate-400 ring-1 ring-slate-300"
                  placeholder="Please type your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  className="mt-2 pl-2 appearance-none text-nunito-900 bg-white rounded-sm block w-full h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-slate-400 ring-1 ring-slate-300"
                  placeholder="Please type phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Your Email:
                </label>
                <input
                  type="email"
                  className="mt-2 pl-2 appearance-none text-nunito-900 bg-white rounded-sm block w-full h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-slate-400 ring-1 ring-slate-300"
                  placeholder="Please type your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Service being requested:{" "}
                </label>
                <input
                  type="text"
                  className="mt-2 pl-2 appearance-none text-nunito-900 bg-white rounded-sm block w-full h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-slate-400 ring-1 ring-slate-300"
                  placeholder="Please choose the services being requested"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Date service being requested:{" "}
                </label>
                <input
                  type="date"
                  className="mt-2 pl-2 appearance-none text-nunito-900 bg-white rounded-sm block w-full h-10 shadow-sm focus:outline-none  focus:ring-2 focus:ring-slate-400 ring-1 ring-slate-300"
                  placeholder="Please specify the service date "
                />
              </div>
            </div>
            <button className="bg-darkBlue py-1 my-12 w-40 rounded-lg self-center text-white hover:bg-lightBlue hover:text-black font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default BookService;
