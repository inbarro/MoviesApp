import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Popup.module.css'



const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
};

const Overlay = props => {
    return (
        <div className={classes.popup}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Popup = props => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <Overlay>{props.children}</Overlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Popup;