import Image from "next/future/image";
import Head from "next/head";

const Skills = () => {
  return (
    <>
    <Head>
      <title>My Skills</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <section className="my-skills">
      <div className="row">
        <div className="my-skills-heading">
          <h2>My Skills</h2>
        </div>

        <div className="my-skills-wrapper">
          <div className="skills-box box-1">
            <div className="skills-box-content">
              <h3>HTML5</h3>
            </div>
          </div>

          <div className="skills-box box-2">
            <div className="skills-box-content">
              <h3>CSS3</h3>
            </div>
          </div>
          <div className="skills-box box-3">
            <div className="skills-box-content">
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="skills-box box-4">
            <div className="skills-box-content">
              <h3>JQuery</h3>
            </div>
          </div>
          <div className="skills-box box-5">
            <div className="skills-box-content">
              <h3>React</h3>
            </div>
          </div>
          <div className="skills-box box-6">
            <div className="skills-box-content">
              <h3>Next.js</h3>
            </div>
          </div>
          <div className="skills-box box-7">
            <div className="skills-box-content">
              <h3>E-commerce</h3>
            </div>
          </div>
          <div className="skills-box box-8">
            <div className="skills-box-content">
              <h3>TailwindCSS</h3>
            </div>
          </div>
          <div className="skills-box box-9">
            <div className="skills-box-content">
              <h3>Sass</h3>
            </div>
          </div>
          <div className="skills-box box-10">
            <div className="skills-box-content">
              <h3>Github</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
