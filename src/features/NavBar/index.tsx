import { NavBarConsts } from "./consts";
import Logo from "./assets/Storefront.png"
import User from "./assets/User.png"
import Image from 'next/image';
import styles from "./index.module.scss"
import NavigationButton from "./UI/NavBarNavigationButton";
const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <Image className={styles.nav__bar__logo__image} src={Logo} alt="logo" />
                <div className={styles.navbar__logo__text}>
                    NFT Marketplace
                </div>
            </div>
            <div className={styles.navigation__wrapper}>
            <div className={styles.navbar__navigation}>
                {NavBarConsts.map((item, index) => (
                    <NavigationButton buttonText={item} key={index} />
                ))}
            </div>
            <div className={styles.navbar__sign_up}>
            <Image className={styles.navbar__navigation__button__image} src={User} alt="logo" />
                    <p className={styles.navbar__navigation__button__text}>
                        Sign Up
                    </p>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;