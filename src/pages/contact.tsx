export function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-3xl font-bold text-center p-12 sm:text-4xl md:text-5xl md:p-16">
        Contact Us
      </h1>
      <div className="px-8">
        <div className=" sm:text-center bg-white shadow-lg rounded-xl p-6 text-xl flex flex-col gap-4 sm:w-400 md:w-600">
          <p> We would love to hear from you!</p>
          <p>Please contact us via:</p>
          <p className="flex flex-col items-center py-12 gap-2">
            <img src="img\emailIcon.png" className="w-12"></img>
            <strong>Email: </strong> osmancleaningservices71@gmail.com
          </p>
          <p className="flex flex-col items-center text-center pb-12 gap-2">
            <img src="img\phoneIcon.png" className="w-12"></img>
            <strong>Telephone:</strong> +1 (709) 682-4610 (7 am - 11pm)
          </p>
        </div>
      </div>
      <img className="w-48 sm:w-28 pt-12 " src="img/logo.png"></img>
      <p className="py-6 px-12 sm:text-2xl text-xl text-center">
        Thank you for choosing Osman Cleaning Services Ltd.{" "}
      </p>
    </div>
  );
}
export default Contact;
