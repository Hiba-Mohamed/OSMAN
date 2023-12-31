import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center font-mullish px-4 bg-stone-50 ">
      <img src="src\images\osman-logo.png" className="w-60 py-12" />
      <div className="lg:px-56 ">
        <h1 className="text-2xl text-center font-bold pb-2 lg:text-5xl">
          Welcome to Osman Cleaning Services Ltd.
        </h1>
        <p className="text-xl lg:text-2xl">
          At Osman Cleaning Services, we understand the importance of a clean
          and healthy environment. Our passion for cleanliness and commitment to
          excellence drive us to provide top-notch cleaning services tailored to
          meet your unique needs.
        </p>
      </div>
      <div className="lg:px-48 lg:py-16 text-lg lg:text-2xl">
        <div className="py-6">
          <h1 className="font-bold">Our Mission</h1>
          <p>
            Our mission is to create spaces that radiate freshness and comfort.
            We believe that a clean environment enhances overall well-being and
            productivity. Whether it's your home, office, or commercial space,
            we are dedicated to delivering a spotless experience that exceeds
            your expectations.
          </p>
        </div>
        <div className="py-6">
          <h1 className="font-bold py-2">What Sets Us Apart </h1>
          <p>
            <ul className="pb-6">
              <li>
                <strong>Professionalism: </strong>Our team of experienced and
                trained cleaning professionals is committed to delivering
                services with the utmost professionalism. We take pride in our
                attention to detail and ensure every nook and cranny is
                thoroughly cleaned.
              </li>
              <li>
                <strong>Customized Solutions: </strong> We recognize that every
                space is unique, and so are its cleaning requirements. Our
                services are customizable to fit your specific needs, ensuring a
                personalized and effective cleaning solution.
              </li>
              <li>
                <strong>Environmentally Friendly:</strong> We prioritize the
                health of both our clients and the environment. Our eco-friendly
                cleaning products and practices contribute to a sustainable and
                green approach, leaving your space not only clean but also safe.
              </li>
            </ul>
          </p>
          <h1 className="font-bold py-2">Our Services</h1>
          <p>
            <ul>
              <li>
                <strong>Residential Cleaning:</strong> Let us transform your
                home into a haven of cleanliness. Our residential cleaning
                services cover everything from bedrooms to kitchens, ensuring a
                sanitized and inviting living space.
              </li>
              <li>
                <strong>Commercial Cleaning:</strong>Impress clients and create
                a productive work environment with our thorough commercial
                cleaning services. We cater to offices, retail spaces, and more,
                maintaining cleanliness that reflects positively on your
                business.
              </li>
              <li>
                <strong>Specialized Cleaning:</strong> From post-construction
                cleanup to event-specific cleaning, we handle specialized
                cleaning projects with precision. Trust us to make your space
                shine for any occasion.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h1 className="font-bold py-2">Contact Us</h1>
          <p>
            Ready to experience the difference of a truly clean space? Contact
            Osman Cleaning Services today to schedule a consultation. We look
            forward to bringing our expertise to your doorstep and creating a
            cleaner, healthier, and happier environment for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
