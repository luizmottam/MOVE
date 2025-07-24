import "./Booking.css";
import Dropdown from "../Dropdown"
import CalendarDropdown from "../CalendarDropdown";
import SearchDropdown from "../SearchDropdown";

const Booking = () => {
  return (
    <div className="booking">
      <h1>M.O.V.E</h1>
      <p>Mobility On-demand for Versatility Experience</p>
      <div className="booking-content">
        <p className="booking-title">EXPERIÊNCIA DISPONÍVEL EM ÁGUAS E TRILHAS</p>
        <div className='booking-buttons'>
            <SearchDropdown/>
            <Dropdown/>
            <CalendarDropdown/>
        </div>
        <input type="button" value="RESEVAR" className="button-booking"/>
      </div>
    </div>
  );
};

export default Booking;
