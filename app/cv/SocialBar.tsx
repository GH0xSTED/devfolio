import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function SocialBar() {
  return (
    <div className="flex flex-row justify-start items-center space-x-4 py-2">
      <a href="https://instagram.com/cleancapture">
        <div className="hover:scale-110 transition-all duration-150 ease-in">
          <FaInstagram size={24} />
        </div>
      </a>
      <a href="https://linkedin.com/in/jasonrosslevy">
        <div className="hover:scale-110 transition-all duration-150 ease-in">
          <FaLinkedin size={24} />
        </div>
      </a>
      <a href="https://github.com/gh0xsted">
        <div className="hover:scale-110 transition-all duration-150 ease-in">
          <FaGithub size={24} />
        </div>
      </a>
    </div>
  );
}

export default SocialBar;
