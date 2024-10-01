import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-7 mt-40  flex justify-evenly pl-10 pr-10 pt-5 items-end bg-white bg-opacity-50 relative">
      <div className="w-[1px] h-[100px] bg-black text-m-5 "></div>

      <div className="w-1/3 flex flex-col ml-5 text-slate-800">
        <Link to="/about">
          <h1 className="text-slate-800 font-bold">О нас</h1>
          <h1 className="text-lime-400 font-bold italic text-5xl">
            Interier <span className="text-indigo-100">KZ</span>
          </h1>
        </Link>
      </div>

      <div className="w-[1px] h-[100px] bg-black text-m-5 "></div>

      <div className="w-1/3 flex flex-col ml-5 text-slate-800">
        <h1 className="text-slate-800 font-bold">Наши контакты:</h1>
        <a href="tel:+77777777777">+7 (777) 777-77-77</a>
        <a href="mailto:interierKZ@gmail.com">interierKZ@gmail.com</a>
      </div>
      <div className="w-[1px] h-[100px] bg-black text-m-5 "></div>

      <div className="w-1/3 flex flex-col ml-5 text-slate-800">
        <SocialMedia />
      </div>
    </div>
  );
};
export default Footer;
