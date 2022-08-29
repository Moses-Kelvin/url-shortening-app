import React from "react";

import Button from "../Button/Button";

import ReactDOM from "react-dom";

import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={() => props.onSetMenuClick(false)}></div>
};

const ModalOverlay = () => {
    return (
        <section className={classes['modal-section']}>
            <div>
                <h2>Features</h2>
                <h2>Pricing</h2>
                <h2>Resources</h2>
            </div>
            <div>
                <h2>Login</h2>
                <Button className={classes['modal-btn']} action='Sign up' />
            </div>
        </section>
    )
};

const portalElement1 = document.getElementById('backdrop');
const portalElement2 = document.getElementById('modal-overlay');
 

const Modal = (props) => {
    return (
        <React.Fragment>
            { ReactDOM.createPortal(<Backdrop onSetMenuClick={props.onSetMenuClick} />, portalElement1)}
            {ReactDOM.createPortal(<ModalOverlay />, portalElement2)}
        </React.Fragment>
    )
}

export default Modal;