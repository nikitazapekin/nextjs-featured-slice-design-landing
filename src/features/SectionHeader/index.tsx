import { Props } from "./interface";
import "./index.scss"
import Image from "next/image";
const SectionHeader = ({ title, about, button, image }: Props) => {
    return (
        <div className="section__header">
            <div className="section__header__text__content">
                <p className="section__header__title">
                    {title}
                </p>
                <p className="section__header__about">
                    {about}
                </p>
            </div>
            <div className="section__header__button">
                <Image src={image} alt="button" />
                <p className="section__header__button__text">
                    {button}
                </p>
            </div>
        </div>
    );
}

export default SectionHeader;