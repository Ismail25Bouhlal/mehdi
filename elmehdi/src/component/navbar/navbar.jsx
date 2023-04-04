import React from "react";
import "./navbar.css";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const navbar = () => {
  return (
    <navbar>
      <div className="navbar">
        <ul>
          <li>
            <a href="https://mail.google.com/">
              <IoMdMail />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/">
              <BsStackOverflow />
            </a>
          </li>
          <div className="separatore">
            <a href="">
              <p>project</p>
            </a>
            <a href="">
              <p>Contact me</p>
            </a>
          </div>
        </ul>
      </div>
    </navbar>
  );
};

export default navbar;
