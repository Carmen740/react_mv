import React from 'react';
import './CSS/ModalBox.css';

function ModalBox({ setModalBox, children }) {
    return (
        <div className="ModalBox">
            <div className="echo" onClick={() => setModalBox('none')}></div>
            <div className="ModalBox-message">
                {children}
            </div>
        </div>
    );
}

export default ModalBox;