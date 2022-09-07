import github from "../public/github.svg"
import email from "../public/e-mail.svg"
import slack from "../public/slack.svg"
import Image from "next/image"



const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="footer-contacts">
            <a href="mailto:codingkovoun@gmail.com">
              <Image src={email} alt="" />
            </a>
            <a target="_blank" href="https://github.com/Kovoun">
              <Image src={github} alt="" />
            </a>
            <a target="_blank" href="https://slack.com/">
              <Image src={slack} alt="" />
            </a>
          </div>
          <p className="footer-paragraph">©Tomáš Kovařík 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
