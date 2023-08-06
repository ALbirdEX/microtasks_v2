import React from 'react';

type CarsTableType = {
    topCars: Array<TopCarsType>
}
type TopCarsType = {
    manufacturer: string,
    model: string
}
export const CarsTable = (props: CarsTableType) => {
    return (
        <>
            {props.topCars.map((cars, index) => {
                return (
                    <table key={index} border={5} align={"center"}>
                        <tr>
                            <th align={"center"}>{index + 1}</th>
                            <td align={"center"} width={100}>{cars.model}</td>
                            <td align={"center"} width={100}>{cars.manufacturer}</td>
                        </tr>
                    </table>
                )
            })}
        </>
    );
};
