import Image from "next/image";
import Art from "./assets/Photo & Icon.png"
import "./index.scss"
const BrowseCategories = () => {
    return (
        <div className="browse__categories">
            <div className="container__min">
                <p className="browse__categories__title">
                    Browse Categories
                </p>
                <div className="browse__categories__cards">
                {Array.from({ length: 8 }, (_, index) => (
                    <div className="browse__categories__card__wrapper">
                        <div className="browse__categories__card">
                            <Image src={Art} alt="" />
                            <div className="browse__categories__card__text__content">
                                <p className="browse__categories__card__title">
                                    Art
                                </p>
                            </div>
                        </div>
                    </div>

                ))}
                </div>
            </div>
        </div>
    );
}

export default BrowseCategories;