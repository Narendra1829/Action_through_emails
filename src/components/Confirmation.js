import React from 'react';
import './Confirmation.css';

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <div style={{ display: 'flex' }}>
                <img src='../utils/sunbed.png' width={40} height={40} alt='sunbed_icon' style={{ paddingTop: '5px', border: '1px solid #d4cdcd', borderRadius: '5px', padding: '5px' }}></img>
                <div style={{ marginLeft: "10px" }}>
                    <h2 className='m-0'>Timesheet Approved</h2>
                    <p className="subtitle m-0">You can close this tab</p>
                </div>
            </div>
      <p style={{background:'#e8f5e9', padding:'14px', borderRadius:'5px'}}>You have approved the timesheet update submitted by your manager.</p>

      <div className="buttons">
        <button className="close" onClick={()=>window.location.reload()}>Close tab</button>
        <button className="home" onClick={()=>window.location.reload()}>Continue to home</button>
      </div>
    </div>
  );
};

export default Confirmation;
