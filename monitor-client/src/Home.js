import {Hamburger} from "./Hamburger";
import {Header} from "./Header";
import Zitatbild from "./ressources/blattkreis.png"

export const Home = () => {
    return(
        <div className="Home">
            <header className="Home-header">
                <p className="Home-title">Echt Bewegt</p>
                <Hamburger />
            </header>
            <Header />
            <p className="Home-name">Andrea Schibli</p>
            <p className="Home-nameBeitext">Zertifizierte Tanz- & Bewegungstherapeutin</p>
            <img className="Home-zitatBild" src={Zitatbild}/>
            <p className="Home-zitat">Bewegung tut dem<br/>Körper gut</p>
        </div>
    )
}
