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
      <main class="main-content">
        <section class="image-with-text row">
          <div class="image-with-text-first-column">
            <div data-aos="fade-right" data-aos-duration="1200">
              <h2 class="image-with-text-heading">Tomáš Kovařík</h2>
              <p class="image-with-text-paragraph">
                Hello, I'm 18 years old Front-end developer and a student at a high school of
                information technology. My hobbies include hiking, programming,
                and exercise. I like to learn and improve my skills. If you want some cooperation, please contact me by clicking the button below.
              </p> 
              <Link href="mailto:codingkovoun@gmail.com" >
                <div class="image-with-text-button">Contact me</div>
              </Link>
            </div>
          </div>
          <div class="image-with-text-second-column">
            <div data-aos="fade-left" data-aos-duration="1200">
              <Image width="1200" height="550" class="image-with-text-second-column" src={me} alt="" />
            </div>
          </div>
        </section>

        <div class="space-between"></div>

        <section class="my-work-main">
          <div class="row" data-aos="fade-down" data-aos-duration="1000">
            <div class="my-work-heading">
              <h2>WHAT I WILL DO</h2>
            </div>

            <div class="my-work-columns">
              <div class="my-work-first-column">
                <div class="my-work-image-wrapper">
                  <Image width={1200} class="my-work-image" src={developFirst} alt="" />
                </div>
                <div class="my-work-container">
                  <h3 class="my-work-heading">
                    I will create and edit the content of the page according to
                    your ideas
                  </h3>
                  <p class="my-work-paragraph">

                  </p>
                </div>
              </div>

              <div class="my-work-second-column">
                <div class="my-work-image-wrapper">
                  <Image width={1440} class="my-work-image" src={developSecond} alt="" />
                </div>
                <div class="my-work-container">
                  <h3 class="my-work-heading">
                    I will actively communicate with you
                  </h3>
                  <p class="my-work-paragraph">

                  </p>
                </div>
              </div>

              <div class="my-work-third-column">
                <div class="my-work-image-wrapper">
                  <Image width={1200}  class="my-work-image" src={developThird} alt="" />
                </div>
                <div class="my-work-container">
                  <h3 class="my-work-heading">
                    I will improve your company name
                  </h3>
                  <p class="my-work-paragraph">

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
