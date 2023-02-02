import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsPage-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {rootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

type MessageType = {
    id: string
    text: string
};

type DialogType = {
    name: string
    id: string
}
type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}
export type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

export type MapDispatchPropsType = {
    updateNewMessage: (newMessage: string) => void
    sendMessage: () => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessage: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage));
        },
        sendMessage: () => {
            dispatch(addMessageAC());
        }
    };
};
export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));