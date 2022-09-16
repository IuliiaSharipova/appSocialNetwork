import React, {useRef} from 'react';
import style from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';


const Dialogs = (props: DialogsPageType) => {
    let newMessageElement=useRef<HTMLTextAreaElement>(null);
    function addMessage() {
        if(newMessageElement.current){
            let text=newMessageElement.current.value
            alert(text)
        }
    }
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                {props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
            </div>

            <div className={style.messages}>
                {props.messagesData.map(message => <Message id={message.id} text={message.text}/>)}
                <div><textarea ref={newMessageElement}></textarea></div>
                <div><button onClick={addMessage}>Add message</button></div>
            </div>

        </div>
    );
};

export default Dialogs;