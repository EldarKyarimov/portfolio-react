import Header from "../components/header/header";
import Projects from "./projects/projects";
import Contacts from "./contacts";


function Home() {
    return (
        <>
            <Header />
            <Projects />
            <Contacts />
        </>
    )
}

export default Home;