import {createStore} from "redux";
import {reducer} from "../reducer/reducer.jsx";

export let store = createStore(reducer);