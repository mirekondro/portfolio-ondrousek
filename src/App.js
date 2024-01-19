import './App.css';
import NavigationMenu from "./components/navigation/navigation_menu";
import Homepage from "./pages/homepage/homepage";
import AboutMe from "./pages/aboutme/aboutme";
import Mywork from "./pages/mywork/mywork";


function App() {
    return (
        <div>
            <NavigationMenu></NavigationMenu>
            <Homepage></Homepage>
            <AboutMe></AboutMe>
            <Mywork></Mywork>
        </div>
)
    ;
}

export default App;
