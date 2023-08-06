import React from 'react';
import {FilterType} from "../App";

type CurrentMoneyType = {
    banknote: string,
    nominal: number,
    number: string
}

type NewComponentFilterPropsType = {
    currentMoney: CurrentMoneyType[],
    callBack: (nameButton: FilterType) => void
}

export const NewComponentFilter = (props: NewComponentFilterPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objForMoneyArr, index) => {

                    return (
                        <li key={index}>
                            <span> {objForMoneyArr.banknote}</span>
                            <span> {objForMoneyArr.nominal}</span>
                            <span> {objForMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: "50px", }}>
                    <button onClick={() => props.callBack("all")}>all</button>
                    <button onClick={() => props.callBack("ruble")}>rubles</button>
                    <button onClick={() => props.callBack("dollar")}>dollars</button>
            </div>
        </>
    );
};
