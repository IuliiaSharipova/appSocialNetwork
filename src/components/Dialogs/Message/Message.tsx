import React, {useRef} from 'react';
import style from './../Dialogs.module.css';
import {MessageType} from '../../../redux/state';

export const Message = (props: MessageType) => {
    let newMessageElement=useRef<HTMLTextAreaElement>(null);
    function addMessage() {
        if(newMessageElement.current){
            let text=newMessageElement.current.value
            alert(text)
        }
    }

    return (
        <div>
        <div className={style.message}>{props.text}</div>
        <div><textarea ref={newMessageElement}></textarea></div>
            <div><button onClick={addMessage}>Add message</button></div>
        </div>
    );
};
