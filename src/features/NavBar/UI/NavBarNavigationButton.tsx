import { NavigationProps } from "./interface";
import styles from "./index.module.scss"

const NavigationButton = ({ buttonText }: NavigationProps) => {
    return (
        <p className={styles.navbar__navigation__button}>
            {buttonText}
        </p>);
}

export default NavigationButton;