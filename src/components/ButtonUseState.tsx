import React from 'react';

type PropsTypeButtonUseState = {
    name: string,
    callBack: () => void,
}

export const ButtonUseState = (props: PropsTypeButtonUseState) => {
    return (
        <div>
            <button onClick={props.callBack}>{props.name}</button>
        </div>
    );
};