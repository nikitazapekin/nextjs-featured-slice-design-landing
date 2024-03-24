import { Props } from "./interface";
import Image from "next/image";
import "./index.scss"
const HowItWorksCard = ({ image, title, about }: Props) => {
    return (
        <div className="how__card__wrapper">
            <div className="how__card">
                <Image src={image} alt="preview" className="how__card__image" />
                <p className="how__card__title">
                    {title}
                </p>
                <p className="how__card__about">
                    {about}
                </p>
            </div>
        </div>
    );
}

export default HowItWorksCard;