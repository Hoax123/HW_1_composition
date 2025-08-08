import {InformationLayout} from "./InformationLayout.jsx";
import PropTypes from "prop-types";

export function Information({text}) {
    return (
        <InformationLayout text={text}/>
    )
}

Information.propTypes = {
    text: PropTypes.string,
}



