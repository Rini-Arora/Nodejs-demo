import { useState } from "react";
import React from "react";

function Maps() {
    const [latitude,setLatitude] = useState()
    const [longitude,setLongitude] = useState()
    const [userAddress,setUserAddress] = useState()

    const [GPSLatitude,setGPSLatitude] = useState()
    const [GPSLongitude,setGPSLongitude] = useState()

    const geo = navigator.geolocation

    // Get user Current Location
    geo.getCurrentPosition(userCoords)
    function userCoords(position){
        let userLatitude = position.coords.latitude
        let userLongitude = position.coords.longitude
        // console.log("Latitude:", userLatitude);
        // console.log("longitude:",userLongitude);
        setLatitude(userLatitude)
        setLongitude(userLongitude)
    }

    const getUserAddress = async() => {
        let url = `https://api.opencagedata.com/geocode/v1/json?key=bcbe59d01ca1418e8b5786de5e74dd34&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`
        const location = await fetch(url)
        const data = await location.json()
        console.log("User Address:",data);
        setUserAddress(data.results[0].formatted)
    }

    const handleGetUserAddress = () => {
        getUserAddress()
    }

    // Get user GPS Current Location this will provide real time data
    geo.watchPosition(userGPSCoords)
    function userGPSCoords(position){
        let userGPSLatitude = position.coords.latitude
        let userGPSLongitude = position.coords.longitude
        console.log("Latitude:", userGPSLatitude);
        console.log("Longitude:",userGPSLongitude);
        setGPSLatitude(userGPSLatitude)
        setGPSLongitude(userGPSLongitude)
    }

    

    return(
        <>
        <h1>Current Location</h1>
        <h2>Latitude:{latitude}</h2>
        <h2>Longitude:{longitude}</h2>
        <h2>User Address: {userAddress}</h2>
        <button onClick={handleGetUserAddress}>Get User Address</button>
        <hr />
        <h1>GPS Tracking</h1>
        <h2>GPS Latitude:-{GPSLatitude}</h2>
        <h2>GPS Longitude:-{GPSLongitude}</h2>
        </>
    )
}

export default Maps ;