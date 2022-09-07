import Link from "next/link"
import Image from "next/future/image";


const Navigation = () => {

  const toggleHeader = () => {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("header-main").classList.toggle("header-background");
    document.getElementById("header-menu").classList.toggle("show-header-items");
    document.body.classList.toggle("no-scroll");

    console.log("clicked");
  }

  return (
    <>
      <header id="header-main" className="header">
        <div className=" row">
          <Link href="/" className="logo-wrapper">
            <Image className="logo" src="/code-solid.svg" width="40" height="40" />
          </Link>
          <ul id="header-menu">
            <li className="header-menu-item">
              <Link href="/">Home</Link>
            </li>
            <li className="header-menu-item">
              <Link href="/my-work">My Work</Link>
            </li>
          </ul>
          <ul className="header-menu-second">
            <div id="menu" className="menu-icon" onClick={toggleHeader}>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navigation;
