import HowItWorksCard from "@/features/HowItWorksCard";
import "./index.scss"
import Icon from "./assets/Icon.png"
const HowItWorks = () => {
    return (
        <div className="how__it__works">
            <div className="container__min">
                <p className="how__it__works__title">
                    How it works
                </p>
                <p className="how__it__works__about">
                    Find out how to get started
                </p>
                <div className="how__it__works__cards">
                {Array.from({ length: 3}, (_, index) => (
                     <HowItWorksCard key={index} title="Setup Your wallet" image={Icon} about="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner." />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;