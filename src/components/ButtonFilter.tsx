import React from 'react';
import {FilterType} from "../App";

export type ButtonFilterPropsType = {
    name: FilterType,
    callBack: (nameButton: FilterType) => void
}

export const ButtonFilter = (props: ButtonFilterPropsType) => {

    let onClickHandler = () => {props.callBack(props.name)}

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};