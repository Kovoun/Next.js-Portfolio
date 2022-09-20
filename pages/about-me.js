import Image from "next/future/image";

const About = () => {
  return (
    <section className="about-me">
      <div className="row">
        <div className="about-me-heading">
          <h2>About me</h2>
        </div>
        <div className="about-me-columns">
          <div className="about-me-first-column">
            <p className="about-me-paragraph">
              I'm 18 years old Front-end developer and a student at a high
              school of information technology. My hobbies include hiking,
              programming, and exercise. I like to learn and improve my skills.
            </p>
          </div>

          <div className="about-me-second-column">
            <div className="about-me-image">
              <Image
                src="/me.png"
                width="1920"
                height="1080"
                alt="about-me"
                className="about-me-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
