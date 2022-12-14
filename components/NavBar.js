import Link from "next/link"
import Image from "next/future/image";


const Navigation = () => {

  const toggleHeader = (e) => {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("header-main").classList.toggle("header-background");
    document.getElementById("header-menu").classList.toggle("show-header-items");
    document.body.classList.toggle("no-scroll");
  }

  const closeMenu = (e) => {
    setTimeout(() => {
      document.getElementById("menu").classList.remove("change");
      document.getElementById("header-main").classList.remove("header-background");
      document.getElementById("header-menu").classList.remove("show-header-items");
      document.body.classList.remove("no-scroll");
    }, 250);
  }

  return (
    <>
      <header id="header-main" className="header">
        <div className=" row">
          <Link href="/">
            <div className="logo-wrapper">
              <Image alt="gdgdggwsfs" className="logo" src="/code-solid.svg" width="40" height="40" />
            </div>
          </Link>
          <ul id="header-menu">
            <li onClick={closeMenu} className="header-menu-item">
              <Link href="/">Home</Link>
            </li>
            <li onClick={closeMenu} className="header-menu-item">
              <Link href="/about-me">About me</Link>
            </li>
            <li onClick={closeMenu} className="header-menu-item">
              <Link href="/skills"> My Skills</Link>
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
