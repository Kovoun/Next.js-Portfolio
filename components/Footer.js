import github from "../public/github.svg"
import email from "../public/e-mail.svg"
import slack from "../public/slack.svg"
import Image from "next/image"
import Link from "next/link";

const automaticYear = () => {
  document.write(new Date().getFullYear())
}

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="footer-contacts">
            <Link href="mailto:codingkovoun@gmail.com">
              <Image src={email} alt="somezihndijg" />
            </Link>
            <Link href="https://github.com/Kovoun">
              <Image src={github} alt="fghjfhfh" />
            </Link>
          </div>
          <p className="footer-paragraph">©Tomáš Kovařík {automaticYear()}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
