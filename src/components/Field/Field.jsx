import {FieldLayout} from "./FieldLayout.jsx";
import PropTypes from "prop-types";

export function Field({field, onCellClick}) {
    return <FieldLayout field={field} onCellClick={onCellClick}/>
}

Field.PropTypes = {
    field: PropTypes.array,
    onCellClick: PropTypes.func,
}