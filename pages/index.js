import Head from "next/head";
import Link from "next/link"
import me from "../public/me.png"
import Image from "next/future/image"
import developFirst from "../public/develop-first.png"
import developSecond from "../public/develop-second.png"
import developThird from "../public/develop-third.png"


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Tomáš Kovařík</title>
      </Head>
      <main className="main-content">
        <section className="image-with-text row">
          <div className="image-with-text-first-column">
            <div data-aos="fade-right" data-aos-duration="1200">
              <h2 className="image-with-text-heading">Tomáš Kovařík</h2>
              <p className="image-with-text-paragraph">
                Hello, I'm 18 years old Front-end developer and a student at a high school of
                information technology. My hobbies include hiking, programming,
                and exercise. I like to learn and improve my skills. If you want some cooperation, please contact me by clicking the button below.
              </p> 
              <Link href="mailto:codingkovoun@gmail.com" >
                <div className="image-with-text-button">Contact me</div>
              </Link>
            </div>
          </div>
          <div className="image-with-text-second-column">
            <div data-aos="fade-left" data-aos-duration="1200">
              <Image width="1200" height="550" className="image-with-text-second-column" src={me} alt="" />
            </div>
          </div>
        </section>

        <div className="space-between"></div>

        <section className="my-work-main">
          <div className="row" data-aos="fade-down" data-aos-duration="1000">
            <div className="my-work-heading">
              <h2>WHAT I WILL DO</h2>
            </div>

            <div className="my-work-columns">
              <div className="my-work-first-column">
                <div className="my-work-image-wrapper">
                  <Image width={1200} className="my-work-image" src={developFirst} alt="" />
                </div>
                <div className="my-work-container">
                  <h3 className="my-work-heading">
                    I will create and edit the content of the page according to
                    your ideas
                  </h3>
                  <p className="my-work-paragraph">

                  </p>
                </div>
              </div>

              <div className="my-work-second-column">
                <div className="my-work-image-wrapper">
                  <Image width={1440} className="my-work-image" src={developSecond} alt="" />
                </div>
                <div className="my-work-container">
                  <h3 className="my-work-heading">
                    I will actively communicate with you
                  </h3>
                  <p className="my-work-paragraph">

                  </p>
                </div>
              </div>

              <div className="my-work-third-column">
                <div className="my-work-image-wrapper">
                  <Image width={1200}  className="my-work-image" src={developThird} alt="" />
                </div>
                <div className="my-work-container">
                  <h3 className="my-work-heading">
                    I will improve your company name
                  </h3>
                  <p className="my-work-paragraph">

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
