import styles from "./FieldLayout.module.css"
import PropTypes from "prop-types";

export function FieldLayout({field, onCellClick}) {
    return (
        <div className={styles.grid}>
            {
                field.map((cell, i) => (
                    <button key={i} className={styles.cell} onClick={() => onCellClick(i)}>{cell}</button>
                ))
            }
        </div>
    )
}

FieldLayout.propTypes = {
    field: PropTypes.array,
    onCellClick: PropTypes.func,
}