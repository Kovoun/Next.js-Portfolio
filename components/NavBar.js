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
      <header id="header-main" class="header">
        <div class=" row">
          <a href="/" class="logo-wrapper">
            <Image class="logo" src="/code-solid.svg" width="40" height="40" />
          </a>
          <ul id="header-menu">
            <li class="header-menu-item">
              <Link href="/">Home</Link>
            </li>
            <li class="header-menu-item">
              <Link href="/my-work">My Work</Link>
            </li>
          </ul>
          <ul class="header-menu-second">
            <div id="menu" class="menu-icon" onClick={toggleHeader}>
              <div class="line line-1"></div>
              <div class="line line-2"></div>
              <div class="line line-3"></div>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navigation;
