import Head from "next/head";
import Link from "next/link";
import me from "../public/me.png";
import Image from "next/future/image";
import developFirst from "../public/develop-first.png";
import developSecond from "../public/develop-second.png";
import developThird from "../public/develop-third.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomáš Kovařík</title>
      </Head>
      <main className="main-content">
          <section className="homepage-intro row">
            <div data-aos="fade-right" data-aos-duration="1200">
              <h2 className="homepage-intro-heading">Tomáš Kovařík</h2>
              <p className="homepage-intro-paragraph">
                I deal with coding websites to your liking with all the
                functionality, feel free to contact me by clicking the button
                below
              </p>
              <Link href="mailto:codingkovoun@gmail.com">
                <div className="homepage-intro-button">Contact me</div>
              </Link>
            </div>
          </section>
          
          <div className="space-between"></div>

        <section className="my-work-main">
          <div className="row" data-aos="fade-down" data-aos-duration="1000">
            <div className="card-heading">
              <h2>WHAT I WILL DO</h2>
            </div>

            <div className="card-wrapper">
              <div className="card card-first">
                <div className="card-content">
                  <h2 className="card-title">Web</h2>
                  <p className="card-body">
                    I will code and edit the website according to your ideas!
                  </p>
                  <div className="card-button">
                    <Link href="mailto:codingkovoun@gmail.com">Contact me</Link>
                  </div>
                </div>
              </div>

              <div className="card card-second">
                <div className="card-content">
                  <h2 className="card-title">Communicate</h2>
                  <p className="card-body">
                    I will actively communicate and discuss the details with you
                    to make your site perfect!
                  </p>
                  <div className="card-button">
                    <Link href="mailto:codingkovoun@gmail.com">Contact me</Link>
                  </div>
                </div>
              </div>

              <div className="card card-third">
                <div className="card-content">
                  <h2 className="card-title">Optimalization</h2>
                  <p className="card-body">
                    I will do all the website optimization for you so that
                    customers can find you easily!
                  </p>
                  <div className="card-button">
                    <Link href="mailto:codingkovoun@gmail.com">Contact me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
