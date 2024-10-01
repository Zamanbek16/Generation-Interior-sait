import logo from "../../public/images/Logo5.png";
import { Link } from "react-router-dom";
// import @import url('https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css')

const Navbar = () => {
  return (
    <div className="text-4xl h-[60px] flex justify-between items-center pl-10 pr-10 bg-black bg-opacity-50 fixed w-full">
      <div>
        <Link to="/">
          {/* <img src={logo} alt="logo" width={130} /> */}
          <h1 className="text-lime-400 font-bold italic text-5xl">
            Interier <span className="text-indigo-100">KZ</span>
          </h1>
        </Link>
      </div>
      <div className="flex justify-around gap-7">
        <div className="text-lg px-3 py-1 text-white font-bold border-[2px] border-yellow-200">
          <Link to="/generate">Станица генерации</Link>
        </div>
        <div className="text-lg px-3 py-1 text-white font-bold border-[2px] border-yellow-200">
          <Link to="/about">О нас</Link>
        </div>
        <div className="text-lg px-3 py-1 text-white font-bold">
          <Link to="/modal">
            <i class="fi fi-ss-user"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css'></link>
export default Navbar;
