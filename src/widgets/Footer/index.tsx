import EnterEmail from "@/entities/EnterEmail";
import "./index.scss"
import Image from "next/image";
import Logo from "./assets/Storefront.png"
import Discord from "./assets/DiscordLogo.png"
import Instagram from "./assets/InstagramLogo.png"
import Twitter from "./assets/TwitterLogo.png"
import Youtube from "./assets/YoutubeLogo.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container__min">
                <div className="footer__content">
                    <div className="footer__cards">
                        <div className="footer__card__item">
                            <div className="footer__card__item__title footer__main">
                                <Image src={Logo} alt="footer" />
                                NFT Marketplace
                            </div>
                            <div className="footer__card__item__subtitle mx238">
                                NFT marketplace UI created with Anima for Figma.
                            </div>
                            <div className="footer__card__item__about">
                                Join our community
                            </div>
                            <div className="footer__networks">
                                <Image src={Discord} alt="social network" />
                                <Image src={Youtube} alt="social network" />
                                <Image src={Twitter} alt="social network" />
                                <Image src={Instagram} alt="social network" />
                            </div>
                        </div>
                        <div className="footer__card__item">
                            <div className="footer__card__item__title">
                                Explore
                            </div>
                            <div className="footer__card__item__subtitle">
                                Marketplace
                            </div>
                            <div className="footer__card__item__subtitle">
                              Ranking
                            </div>
                            <div className="footer__card__item__about">
                                Connect a wallet
                            </div>
                        </div>
                        <div className="footer__card__item">
                            <div className="footer__card__item__title">
                                Join our weekly digest
                            </div>
                            <div className="footer__card__item__subtitle mx420">
                                Get exclusive promotions & updates straight to your inbox.
                            </div>
                            <EnterEmail image={null} />
                        </div>
                    </div>
                    <div className="footer__copyright__block">

                        <div className="footer__line" />
                        <small className="footer__copyright">
                            Ⓒ NFT Market. Use this template freely.
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;