import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import FlightMap from "../assets/flightMap.png";
import PaginationControlled from "./PaginationControlled";
import { SearchFlights } from "../app/SearchSlice";
// import { totalFlights } from "../app/SearchSlice";
import { useNavigate } from "react-router-dom";

const AllFlights = () => {
  const allSearchState = useSelector(state => state.search);
  // const dispatch = useDispatch();
  const navigate = useNavigate();


  const [allFlights, setAllFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [total, setTotal] = useState(0);
      
    
  const getAvailableFlights =async (from, to) =>{
    setLoading(true);
   const searchURL = await fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${from}&to=${to}`)
     const response = await searchURL.json();
     setLoading(false);
     setAllFlights(response);
    
  }

  useEffect(() =>{
      if(allSearchState.from && allSearchState.to){
        const from = allSearchState.from.charAt(0).toUpperCase()+allSearchState.from.slice(1);
        const to = allSearchState.to.charAt(0).toUpperCase()+allSearchState.to.slice(1);
        // alert(from + ""+ to);
         getAvailableFlights(from , to);
      }else {
        getAllFlights();
      }
  }, [allSearchState.from , allSearchState.to])


  const getAllFlights = async () => {
    setLoading(true);
    const URL = await fetch(
      "https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights"
    );
    const res = await URL.json();
    setLoading(false);
    setAllFlights(res);
    // dispatch(SearchFlights(res));
    // setTotal(res.length);
    // dispatch(totalFlights(total));
  };

  useEffect(() => {
    getAllFlights();
  }, []);




  const bookFlight = (e) => {
    e.preventDefault();
    navigate("/payment");

  };

  return (
    <div className="outerContainer">

    <div className="allFlightsConatainer">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          allFlights.map((flight) => {
            return (
              <div className="flightContainer" key={uuidv4()}>
                <div className="airlinename width_hundred">{flight.airlineName}</div>

                <div className="from width_hundred city_name">{flight.from}</div>

                <div className="width_hundred return">
                  <div className="returnDate">{flight.return.returnDate}</div>

                  <div className="returnTime">{flight.return.returnTime}</div>
                  <div className="duration">{flight.duration}</div>
                </div>

                <div className="width_hundred leftAlign">
                  <div className="to city_name">{flight.to}</div>
                  <div className="via city_name">{flight.via[0]}</div>
                </div>
{/* 
                <div className="width_hundred departure">
                  <div className="width_hundred departureDate">
                    {flight.departure.departureDate}
                  </div>
                  <div className="width_hundred departureTime">
                    {flight.departure.departureTime}
                  </div>
                </div> */}

                <div className="width_hundred priceAndBooking">
                  <div className=" price">${flight.price}</div>
                  <button onClick={bookFlight} id="bookBtn">
                    BOOK NOW
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>


        <div className="width_hundred map" style={{borderRadius: "100px"}}>
          <img src={FlightMap} style={{maxWidth: "100%"}} alt="Flight Map" />
        </div>


    </div>
  );
};

export default AllFlights;
