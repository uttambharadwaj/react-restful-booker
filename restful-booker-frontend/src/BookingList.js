import axios from "axios";
import { useEffect, useState } from "react"


const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/booking');
                setBookings(response.data);
            } catch (err){
                setError(err);
                console.error("Error fetching bookings: ", err);
            }
        };
        fetchBookings();
    }, []);

    if (error){
        return <div className="error">Error: {error.message}</div>
    }

    return(
        <div>
            <h2> Booking List</h2>
            {bookings.length > 0 ? (
                <ul>
                    {bookings.map(booking => (
                        <li key={booking.bookingid}>Booking ID: {booking.bookingid}</li>
                    ))}
                </ul>
            ) : (
                <div>No Bookings Found</div>
            )}
        </div>
    )
}

export default BookingList;