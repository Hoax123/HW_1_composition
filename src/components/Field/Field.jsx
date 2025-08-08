import {FieldLayout} from "./FieldLayout.jsx";
import PropTypes from "prop-types";
import {store} from "../../stateManagment/store/store.jsx";

export function Field({onCellClick}) {
    let {field} = store.getState();
    return <FieldLayout field={field} onCellClick={onCellClick}/>
}

Field.PropTypes = {
    field: PropTypes.array,
    onCellClick: PropTypes.func,
}