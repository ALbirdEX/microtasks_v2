import React, {useState} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";

type MessageType = {
    message: string
}

export const AllInput = () => {

    let [message, setMessage] = useState<Array<MessageType>>([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div style={{marginLeft: "70px"}}>
            {/*  <div>
                <input/>
                <button>+</button>
            </div>*/}
            {/*  <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}*/}
            <Input title={title}
                   setTitle={setTitle}/>
            <Button name={"✔️"}
                    callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};