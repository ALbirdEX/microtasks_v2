import React from 'react';

type ButtonPropsType = {
    name: string,
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onClockButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClockButtonHandler}>{props.name}</button>
    );
};