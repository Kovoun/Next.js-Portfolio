import Image from "next/future/image";
import Head from "next/head"



const MyWork = () => {
    return (
        <>
        <Head>
          <title>My Work</title>
        </Head>
        <main className="main">
          <div className="my-work-heading">
            <h1>My work</h1>
          </div>
          <section className="my-work-gallery">
            <Image src="/gallery-1.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-1" />
            <Image src="/gallery-2.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-2" />
            <Image src="/gallery-3.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-3" />
            <Image src="/gallery-4.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-4" />
            <Image src="/gallery-5.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-5" />
            <Image src="/gallery-6.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-6" />
            <Image src="/gallery-7.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-7" />
            <Image src="/gallery-8.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-8" />
            <Image src="/gallery-9.png" alt="me" width="3840" height="2160"className="gallery-img gallery-img-9" />
            <Image src="/gallery-10.png" alt="me" width="3840" height="2160" className="gallery-img gallery-img-10" />
          </section>
        </main>
      </>
    )
}

export default MyWork;