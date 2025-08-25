import React from 'react';
import CountdownTimer from './CountdownTimer';
import './InaugurationPage.css';

const InaugurationPage = () => {
  return (
    <div className="inauguration-page">
      <div className="inauguration-container">
      <h1>Inauguration of<br></br> Placement Express</h1>
      <p><strong>Witness the Grand Inauguration of PLACEMENT EXPRESS 🚆! </strong></p>
      <p>An initiative by the Training & Placement Cell NIT to guide students on their journey from classroom to career.</p>

      <section className="event-details">
        <h2>Event Details</h2>
        <p><strong>Date:</strong> [Insert Date Here]</p>
        <p><strong>Time:</strong> [Insert Time Here]</p>
        <p><strong>Venue:</strong> [Insert Venue Here]</p>
      </section>

      <section className="agenda">
        <h2>Agenda</h2>
        <ul>
          <li>[Time] - Welcome Address</li>
          <li>[Time] - Keynote Speech by [Speaker Name]</li>
          <li>[Time] - Departmental Overview</li>
          <li>[Time] - Q&A Session</li>
          <li>[Time] - Vote of Thanks</li>
        </ul>
      </section>

      <section className="speakers">
        <h2>Speakers</h2>
        <ul>
          <li><strong>[Speaker Name 1]:</strong> [Title/Affiliation]</li>
          <li><strong>[Speaker Name 2]:</strong> [Title/Affiliation]</li>
        </ul>
      </section>
      
      <CountdownTimer />

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>For more details, please contact: [Email/Phone Number]</p>
      </section>
    </div>
  </div>
  );
};

export default InaugurationPage;