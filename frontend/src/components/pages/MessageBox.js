import React from 'react';
import './CSS/MessageBox.css';

function MessageBox({ setModalBox, message }) {
    return (
        <div className="MessageBox">
            <h2 className='message'>{message}</h2>
            <button id='send' onClick={() => setModalBox('none')}>Закрыть</button>
        </div>
    );
}

export default MessageBox;