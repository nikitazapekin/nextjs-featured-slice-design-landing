import Image from "next/image";
import Mushrooms from "./assets/NFT Highlight.png"
import "./index.scss"
import User from "./assets/Asset 12 2.png"
import UserButton from "@/shared/UI/UserButton";
import SeeNftButton from "@/shared/UI/SeeNftButton";
import Eye from "./assets/Eye.png"
import Timer from "@/entities/Timer";
const MagicMushrooms = () => {
    return (
        <div className="magic__mushrooms">
            <Image src={Mushrooms} alt="mushroom" className="magic__mushrooms__background" />
            <div className="magic__mushrooms__gradient" />
            <div className="container__min">
                <div className="magic__mushrooms__content">

                    <div className="magic__mushrooms__left">
                        <UserButton image={User} username="Shroomie" />
                        <p className="magic__mushrooms__title">
                            Magic Mashrooms
                        </p>
                        <SeeNftButton image={Eye} button="See NFT" />
                    </div>
                    <div className="magic__mushrooms__right">
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MagicMushrooms;