import React, {useState, MouseEvent} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Futer} from "./site/Futer";
import {NewComponent} from "./NewComponent";
import {CarsTable} from "./CarsTable";
import {Button} from "./components/Button";

function App() {
    const [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ])

    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]


    // const myFirstSubscriber = (event:  MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hellow! Im Vasil")
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hellow! Im Ivan")
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("Im Stupid BUTTON")
    }


    return (
        <>
            <div><Header title={'NEW HEADER'}/></div>
            <div><Body titleForBody={'NEW BODY'}/></div>
            <Futer titleNewFuter={'NEW FUTER'}/>
            <NewComponent students={students}/>
            <CarsTable topCars={topCars}/>

{/*
            <div><button onClick={(event) => {console.log("Hellow")}}>MyYouTubeChanel-1</button></div>
*/}
            <div><button onClick={() => onClickHandler("Vasil")}>Chanel-1</button></div>
            <div><button onClick={() => onClickHandler("Ivan")}>Chanel-2</button></div>

            <Button name={"YouTubeChanel-1"} callBack={() => Button1Foo("Im Vasya", 21,  "liv in Mogilev")}/>
            <Button name={"YouTubeChanel-2"} callBack={() => Button2Foo("Im Ivan")}/>
            <Button name={"Stupid BUTTON"} callBack={Button3Foo}/>

        </>
    );
}

export default App;
