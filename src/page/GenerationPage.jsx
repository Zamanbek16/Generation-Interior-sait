import Choose from "../components/Choose";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import Footer from "../components/Footer";

const GenerationPage = () => {
  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <Navbar />
      {/* <img src="../images/Fon8.jpg" alt="" className="" /> */}
      <Choose />
      {/* <Options /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default GenerationPage;
