import "./Booking.css";
import Dropdown from "../Dropdown"
import CalendarDropdown from "../CalendarDropdown";
import SearchDropdown from "../SearchDropdown";
import { useNavigate } from "react-router-dom";

const Booking = () => {
const navigate = useNavigate();

function handleClickCheckout(link) {
  navigate(link);
}

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
        <input type="button" value="RESEVAR" className="button-booking" onClick={() => handleClickCheckout("/checkout")}/>
      </div>
    </div>
  );
};

export default Booking;
