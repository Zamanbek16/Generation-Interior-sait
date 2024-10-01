import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewResultPage = () => {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="w-full h-full flex flex-col items-center">
        <h1></h1>
        <div>{}</div>
        <div>
          <img
            className="w-[500px] md:w-[700px] h-[300px] object-cover"
            src="{}"
            alt="Вариант 1"
          />

          <img
            className="w-[500px] md:w-[700px] h-[300px] object-cover"
            src="{}"
            alt="Вариант 2"
          />
          <img
            className="w-[500px] md:w-[700px] h-[300px] object-cover"
            src="{}"
            alt="Вариант 3"
          />
          <img
            className="w-[500px] md:w-[700px] h-[300px] object-cover"
            src="{}"
            alt="Вариант 4"
          />
          <img
            className="w-[500px] md:w-[700px] h-[300px] object-cover"
            src="{}"
            alt="Вариант 5"
          />
          <p className="w-[800px] text-md italic text-green-400">{}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewResultPage;
