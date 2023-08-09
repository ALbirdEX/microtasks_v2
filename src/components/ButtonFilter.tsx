import React from 'react';
import {FilterType} from "../App";

export type ButtonFilterPropsType = {
    name: FilterType,
    callBack: (nameButton: FilterType) => void
}

export const ButtonFilter = (props: ButtonFilterPropsType) => {
    return (
        <button onClick={() => props.callBack(props.name)}>{props.name}</button>
    );
};