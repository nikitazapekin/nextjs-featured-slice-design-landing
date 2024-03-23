import Image from "next/image";
import "./index.scss"
import Rocket from "./assets/RocketLaunch.png"
import Photo from "./assets/Image Placeholder.png"
import User from "./assets/User.png"
const DiscoverSection = () => {
    return (
        <section className="discover">
            <div className="container__min">
                <div className="discover__content">

                    <div className="discover__left">
                        <div className="discover__left__content">
                            <div className="discover__left__title">
                                Discover digital art & Collect NFTs
                            </div>
                            <div className="discover__left__about">
                                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                            </div>
                            <div className="discover__left__button">
                                <Image src={Rocket} alt="logo" />
                                <p className="discover__left__button__text">
                                    Get Statred
                                </p>
                            </div>

                            <div className="discover__plus">
                                <div className="discover__plus__element">
                                    <p className="discover__plus__element__title">
                                        240k+
                                    </p>
                                    <p className="discover__plus__element__about">
                                        Total Sale
                                    </p>
                                </div>


                                <div className="discover__plus__element">
                                    <p className="discover__plus__element__title">
                                        100k+
                                    </p>
                                    <p className="discover__plus__element__about">
                                        Auctions
                                    </p>
                                </div>


                                <div className="discover__plus__element">
                                    <p className="discover__plus__element__title">
                                        240k+
                                    </p>
                                    <p className="discover__plus__element__about">
                                        Artists
                                    </p>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="discover__right">

                        <div className="discover__right__content">

                            <Image src={Photo} alt="logo" />
                            <div className="discover__right__user">

                                <p className="discover__right__title">
                                    Space Walking
                                </p>

                                <div className="discover__right__about__line">
                                    <Image src={User} alt="logo" />
                                    <p className="discover__right__about__line__text">
                                        Animakid
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default DiscoverSection;