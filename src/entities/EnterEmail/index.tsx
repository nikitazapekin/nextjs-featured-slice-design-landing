import React from "react";
import { Props } from "./interface";
import Image from "next/image";
import "./index.scss"
const EnterEmail = ({ image }: Props) => {
    return (
        <div className="enter__email__wrapper">
            <div className="enter__email">
                <input type="text"
                placeholder="Enter your email here"
                className="enter__email__input" required />
                <div className="enter__email__button">
                    {image !=null && (
                        <Image src={image} alt="message" />
                    )}
                    <p className="enter__email__button__text">
                        Subscribe
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EnterEmail;