import Space from "./assets/Photo.png"
import Image from "next/image";
import "./index.scss"
import EnterEmail from "@/entities/EnterEmail";
import Email from "./assets/EnvelopeSimple.png"
const JoinDigest = () => {
    return (
        <div className="join__digest">
            <div className="container__min">
                <div className="join__digest__content">
                    <Image src={Space} alt="space" />
                    <form className="join__digest__form">
                        <p className="join__digest__form__title">
                            Join our weekly digest
                        </p>
                        <p className="join__digest__form__about">
                            Get exclusive promotions & updates straight to your inbox.
                        </p>

                        <EnterEmail image={Email} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default JoinDigest;