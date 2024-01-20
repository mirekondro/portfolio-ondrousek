import { useEffect } from "react"
import NavigationMenu from "../components/navigation/navigation_menu";
import Homepage from "./homepage/homepage";
import AboutMe from "./aboutme/aboutme";
import MyWork from "./mywork/mywork";
import Contact from "./contact/contact"

export default function Home() {
    useEffect(() => {
        document.title = "Miroslav Ondroušek - Portfolio"
    }, [])

    return (
        <div className="App">
            <header>
                <NavigationMenu/>
            </header>
            <main>
                <div className="section" id="homepage">
                    <Homepage/>
                </div>
                <div className="section" id="aboutme">
                    <AboutMe/>
                </div>
                <div className="section" id="mywork">
                    <MyWork/>
                </div>
                <div className="section" id="contact">
                    <Contact/>
                </div>
            </main>
        </div>
    );
}
