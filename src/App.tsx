import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Futer} from "./site/Futer";

function App() {
    return (
        <>
            <div><Header title={'NEW HEADER'}/></div>
            <div><Body titleForBody={'NEW BODY'}/></div>
            <Futer titleNewFuter={'NEW FUTER'}/>
        </>
    );
}

export default App;
