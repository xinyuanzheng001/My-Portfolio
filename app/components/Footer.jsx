import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="flex gap-5 text-center justify-center">
        <div className="w-max flex items-center gap-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          xinyuanzheng4@gmail.com
        </div>
        <div className="w-max flex items-center gap-2">
          <Image src={assets.phone_icon} alt="" className="w-6" />
          646-338-6473
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Xinyuan Zheng. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/xinyuanzheng001" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/xinyuanzheng001/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
