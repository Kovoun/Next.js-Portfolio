import Footer from "./Footer"
import Navigation from "./NavBar"

const Layout = ({children}) => {
    return (
        <>
            <Navigation />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;