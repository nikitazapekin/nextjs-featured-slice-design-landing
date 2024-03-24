import Image from "next/image";
import "./index.scss"
import Rocket from "./assets/RocketLaunch.png"
import Artist from "./assets/Artist Avatar.png"
import SectionHeader from "@/features/SectionHeader";
const TopCreators = () => {
    return (
        <div className="top__creators">
            <div className="container__min">
                <SectionHeader title="Top creators" about="Checkout Top Rated Creators on the NFT Marketplace" image={Rocket} button="View Rankings" />
                <div className="top__creators__cards">
                    {Array.from({ length: 12 }, (_, index) => (
                        <div key={index} className="top__creators__card__wrapper">
                            <div className="top__creators__card">
                                <Image src={Artist} alt="logo" className="top__creators__card__image" />
                                <div className="top__creators__card__title">
                                    Keepitreal
                                </div>
                                <div className="top__creators__card__about">
                                    <div className="top__creators__total">
                                        Total Sales:
                                    </div>
                                    <div className="top__creators__eth">
                                        34.53 ETH
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopCreators;