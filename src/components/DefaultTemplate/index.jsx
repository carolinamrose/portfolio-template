import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DefaultTemplate = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
};

export default DefaultTemplate;