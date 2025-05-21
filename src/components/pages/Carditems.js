import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import workshop from '../../assets/images/workshop.png'
import comp from '../../assets/images/comp.png'
import event from '../../assets/images/speaker2.png'

function Carditems() {
  
    const navigate = useNavigate();
    return (
    <section class="events-section">
      <h2 class="section-title">Events</h2>

    <div className="event-grid">
        <div className="event-card" onClick={() => navigate('/Events/Competitions')}>
          <img src={comp} alt="Competition" className="event-img" />
          <div className="event-title">COMPETITION</div>
        </div>
        
        <div className="event-card" onClick={() => navigate('/Events/Competitions')}>
          <img src={workshop} alt="Workshop" className="event-img" />
          <div className="event-title">WORKSHOP</div>
        </div>
        
        <div className="event-card" onClick={() => navigate('/Events/Competitions')}>
          <img src={event} alt="Speaker session" className="event-img" />
          <div className="event-title">SPEAKER SESSIONS</div>
        </div>
    </div>
</section>

          
    
  );
}

export default Carditems;
