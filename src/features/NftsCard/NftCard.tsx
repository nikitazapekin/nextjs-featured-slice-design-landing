import Image from "next/image";
import { Props } from "./interface";
import "./index.scss"
const NftCard = ({ title, user, eth, weth, nftImage, userAvatar }: Props) => {
    return (
        <div className="discover__more__card__wrapper">
            <div className="discover__more__card">
                <Image src={nftImage} alt="nft" />
                <div className="discover__more__card__text__content">
                    <p className="discover__more__card__title">
                        {title}
                    </p>
                    <div className="discover__more__card__about">
                        <Image src={userAvatar} alt="nft" />
                        <p className="discover__more__card__about__user">
                            {user}
                        </p>
                    </div>
                    <div className="discover__more__card__info">
                        <div className="discover__more__card__left">
                            <p className="discover__more__card__left__price">
                                Price
                            </p>
                            <p className="discover__more__card__left__eth">
                                {eth}
                            </p>
                        </div>
                        <div className="discover__more__card__right">
                            <p className="discover__more__card__right__bid">
                                Highest Bid
                            </p>
                            <p className="discover__more__card__right__weth">
                                {weth}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NftCard;

/*
        */