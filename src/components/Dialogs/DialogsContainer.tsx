import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsPage-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {DialogsPageType} from '../../redux/state';
import {rootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

export type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;