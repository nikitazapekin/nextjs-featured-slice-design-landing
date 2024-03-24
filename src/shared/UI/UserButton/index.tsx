import Image from "next/image";
import { Props } from "./interface";
import "./index.scss"
const UserButton = ({ image, username }: Props) => {
    return (
        <div className="user__btn">
            <Image src={image} alt="user" />
            <p className="user__btn__username">
                {username}
            </p>
        </div>
    );
}

export default UserButton;