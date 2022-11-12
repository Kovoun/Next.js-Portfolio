import Image from "next/future/image";
import Head from "next/head";
import me from "../public/me.png"


const About = () => {
  return (
    <>
    <Head>
      <title>About me</title> 
      <link rel="icon" href="/favicon.png" />
    </Head> 
    <section className="about-me">
      <div className="row">
        <div className="about-me-heading">
          <h2>About me</h2>
        </div>
        <div className="about-me-columns">
          <div className="about-me-first-column">
            <p className="about-me-paragraph">
              I am 18 years old Front-end developer and a student at a high
              school of information technology. My hobbies include hiking,
              programming, and exercise. I like to learn and improve my skills.
            </p>
          </div>

          <div className="about-me-second-column">
            <div className="about-me-image">
              <Image
                src={me}
                width={800}
                height={800}
                alt="about-me"
                className="about-me-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
