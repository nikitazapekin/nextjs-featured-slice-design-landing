import Image from "next/image";
import "./index.scss"
import { Props } from "./interface";
const SeeNftButton = ({ image, button }: Props) => {
    return (
        <div className="see__nft__btn">
            <Image src={image} alt="eye" />
            <p className="see__nft__btn__text">
                {button}
            </p>
        </div>
    );
}

export default SeeNftButton;