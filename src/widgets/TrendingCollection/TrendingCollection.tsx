import "./index.scss"
import Image from "next/image";

import Preview1 from "./assets/Primary Photo Placeholder.png"
import SubPrewiew1 from "./assets/Secondary Photo Placeholder.png"
import Avatar1 from "./assets/Avatar.png"
import  SubPreview2 from "./assets/Photo.png"
const TrendingCollection = () => {
    return (
        <div className="trending__collection">
            <div className="container__min">

                <div className="trending__collection__content">
                    <p className="trending__collection__title">
                        Trending Collection
                    </p>
                    <p className="trending__collection__about">
                        Checkout our weekly updated trending collection.
                    </p>

                    <div className="tranding__collection__elements">
                        <div className="tranding__collection__element__wrapper">
                        <div className="tranding__collection__element">
                            <div className="tranding__collection__element__images">
                                <Image className="item1" src={Preview1} alt="nft__pic"/>
                                <Image  src={SubPrewiew1} alt="nft__pic"/>
                                <Image  src={SubPreview2} alt="nft__pic"/>
                                <div className="tranding__collection__element__images__plus">
                                        1025+
                                </div>
                                </div>
                                <p className="tranding__collection__element__title">
                                DSGN Animals
                                </p>
                                <div className="tranding__collection__element__user">
                                    <Image src={Avatar1} className="tranding__collection__element__user__image" alt="logo" />
                                    <p className="tranding__collection__element__user__title">
                                    MrFox
                                    </p>
                                </div>
                            </div>
                        </div>




                        <div className="tranding__collection__element__wrapper">
                        <div className="tranding__collection__element">
                            <div className="tranding__collection__element__images">
                                <Image className="item1" src={Preview1} alt="nft__pic"/>
                                <Image  src={SubPrewiew1} alt="nft__pic"/>
                                <Image  src={SubPreview2} alt="nft__pic"/>
                                <div className="tranding__collection__element__images__plus">
                                        1025+
                                </div>
                                </div>
                                <p className="tranding__collection__element__title">
                                Magic Mushrooms
                                </p>
                                <div className="tranding__collection__element__user">
                                    <Image src={Avatar1} className="tranding__collection__element__user__image" alt="logo" />
                                    <p className="tranding__collection__element__user__title">
                                    Shroomie
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="tranding__collection__element__wrapper">
                        <div className="tranding__collection__element">
                            <div className="tranding__collection__element__images">
                                <Image className="item1" src={Preview1} alt="nft__pic"/>
                                <Image  src={SubPrewiew1} alt="nft__pic"/>
                                <Image  src={SubPreview2} alt="nft__pic"/>
                                <div className="tranding__collection__element__images__plus">
                                        1025+
                                </div>
                                </div>
                                <p className="tranding__collection__element__title">
                                Disco Machines
                                </p>
                                <div className="tranding__collection__element__user">
                                    <Image src={Avatar1} className="tranding__collection__element__user__image" alt="logo" />
                                    <p className="tranding__collection__element__user__title">
                                    BeKind2Robots
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default TrendingCollection;