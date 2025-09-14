import "./hero.css";
import Flow from "../../assets/code_flow.png";
import HomeCode from "../../assets/homepage_code.png";

export default function Hero() {
    return (
        <div className="Hero-Container">
            <div className="hero-row">
                <section className="Hero-Right">
                    <p>
                        Code Faster <br></br>and Smarter <br></br>with <span>Dude Code</span>
                    </p>
                    <img src={Flow} alt="Code Flow" />
                </section>
                <section className="Hero-Left">
                    <img src={HomeCode} alt="HomeCode" />
                </section>
            </div>
            <section className="Hero-Btn">
                <button>Get Started!</button>
            </section>
        </div>
    );
}
