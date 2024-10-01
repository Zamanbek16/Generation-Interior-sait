import React from "react";

function SocialMedia() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="relative">
        <img
          src="https://th.bing.com/th/id/R.bceb9795bfef9ec33bd1e84aef7025a3?rik=8sY1RJwxCTnr2w&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1177962.png&ehk=sOnu1aPvJJNUaZ1zCXhvVcdXcL8d8upFEv%2bVz3GDuA0%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="w-[50px] absolute left-[-90px] "
        />
        <p className=" text-slate-800 font-bold">Мы в соцсетях:</p>
      </div>
      <div className=" flex space-x-4 ">
        <img
          src="https://th.bing.com/th/id/OIP.GbsrglNpiRVjIa8pKAcUzAHaHa?rs=1&pid=ImgDetMain"
          alt=""
          className="w-[50px] h-[50px]"
        />
        <img
          src="https://th.bing.com/th/id/R.03f40b67b63d9c1c1a5a792109bbc699?rik=E6ZgqrtSDrG9EQ&pid=ImgRaw&r=0"
          alt=""
          className="w-[50px] h-[50px]"
        />
        <img
          src="https://th.bing.com/th/id/OIP.tPsBeayaSLxzgSJG-RbbtAHaHa?rs=1&pid=ImgDetMain"
          alt=""
          className="w-[50px] h-[50px"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyC12NzFHzv3Bquts578lZak-T-0TkRyIeA&s"
          alt=""
          className="w-[50px] h-[50px]"
        />
      </div>
    </div>
  );
}

export default SocialMedia;
