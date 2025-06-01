import styles from './InformationLayout.module.css'
import PropTypes from "prop-types";

export function InformationLayout({text}) {
    return <div className={styles.info}>{text}</div>
}

InformationLayout.propTypes = {
    text: PropTypes.string,
}