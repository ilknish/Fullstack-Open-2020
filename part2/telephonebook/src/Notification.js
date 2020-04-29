import React from 'react';

const Notification = ({ message }) => {

    const notificationStyle = {
        color: message.color,
        background: '#cccccc',
        fontSize: '15px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '2px',
        marginBottom: '10px'
      };


    if (message.note === null) {
      return null;
    }
  
    return <div style={notificationStyle}>{message.note}</div>;    
  }

  export default Notification;