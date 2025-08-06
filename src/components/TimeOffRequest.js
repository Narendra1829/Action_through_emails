import React from 'react';
import './TimeOffRequest.css';
import '../index.css'

const timesheetData = [
    {
        date: '2025-07-14',
        originalHours: 8,
        updatedHours: 6,
        taskDescription: 'Feature Development',
        reason: 'Adjusted for actual work done'
    },
    {
        date: '2025-07-15',
        originalHours: 8,
        updatedHours: 9,
        taskDescription: 'Bug Fixing',
        reason: 'Overtime logged'
    }
];

const TimeOffRequest = ({ onApprove }) => {
    return (
        <div className="request-container">
            <div style={{ display: 'flex' }}>
                <img src='../utils/sunbed.png' width={40} height={40} alt="Icon of a sunbed with an umbrella, symbolizing relaxation or beachside lounging." style={{ paddingTop: '5px', border: '1px solid #d4cdcd', borderRadius: '5px', padding: '5px' }}></img>
                <div style={{ marginLeft: "10px" }}>
                    <h2 className='m-0'>Review & Approve Modified Sheet</h2>
                    <p className="subtitle m-0">Please review the changes below and take action.</p>
                </div>
            </div>
            <div className="section-user">
                <img src='../utils/NameAvatar.png' width={40} height={40} alt="Icon representing a user's initials inside a circular avatar, used for profile identification." style={{ padding: '5px' }}></img>
                <div>
                    <p className='m-0'> Sayed Holt</p>
                    <p className='m-0'> A57-2011</p>
                </div>
            </div>
            <div className="section-summary">
                <div className="timesheet-table-container">
                    <h3 id="timesheet-heading">Modified Timesheet Details</h3>
                    <table className="timesheet-table" style={{ marginBottom: '10px' }}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Original Hours</th>
                                <th>Updated Hours</th>
                                <th>Task Description</th>
                                <th>Reason for Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timesheetData?.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.date}</td>
                                    <td>{entry.originalHours}</td>
                                    <td className={entry.originalHours !== entry.updatedHours ? 'highlight' : ''}>
                                        {entry.updatedHours}
                                    </td>
                                    <td>{entry.taskDescription}</td>
                                    <td>{entry.reason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    Manager Comment: Please review these changes and approve if they look correct.
                </div>
            </div>
            <div className="section-comments">
            </div>
            <div className="actions">
                <div className="buttons-request">
                    <a className="link" href='/'>Log in to view more details</a>
                    {/* <button className="link" >
                        Log in to view more details
                    </button> */}
                    <div>
                        <button className="reject">Reject</button>
                        <button className="approve" onClick={onApprove}>Approve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeOffRequest;
