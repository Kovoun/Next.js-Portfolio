import github from "../public/github.svg"
import email from "../public/e-mail.svg"
import slack from "../public/slack.svg"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";


const Footer = () => {
  
  const [ currentYear, setCurrentYear ] = useState(new Date().getFullYear());


  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="footer-contacts">
            <Link href="mailto:codingkovoun@gmail.com">
              <Image src={email} alt="e-mail" />
            </Link>
            <Link href="https://github.com/Kovoun">
              <Image src={github} alt="github" />
            </Link>
          </div>
          <p className="footer-paragraph">©Tomáš Kovařík {currentYear}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
