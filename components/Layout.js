import Head from "next/head";
import Footer from "./Footer"
import Navigation from "./NavBar"

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta name="description" content="I deal with coding websites to your liking with all the functionality" />
                <meta name="robots" content="index,follow" />
                <meta charset="utf-8" />
                <meta property="og:title" content="Tomáš Kovařík" />
            </Head>
            <Navigation />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;