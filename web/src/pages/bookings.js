import React, { Component, Fragment } from 'react'

import {  signOut } from '../api/auth'
import { getDecodedToken } from '../api/token'

import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from '../helpers/filters'

// Component
import NavBar from '../components/NavBar'
import Key from '../components/Key'
import FilterElement from '../components/FilterElement'
import Calendar from '../components/Calendar'
import RoomsList from '../components/RoomsList'

import load from '../load'

import moment from 'moment'

function Bookings (){
    //const state = {
    const decodedToken = getDecodedToken()
    //}
    const signedIn = !!decodedToken
    const setCalendarDate = date => {
        this.setState({ calendarDate: date })
      }
    
    const webName = "Online Counselling System"

  return (
    <Fragment>
            <div className="wrapper">
            <div className="header header__nav header--flex">
                <h1 className="header__heading header__heading--main">{ webName }</h1>
                <NavBar
                    signOut={signOut}
                //loadMyBookings={loadMyBookings}
                    user={signedIn ? decodedToken.sub : null}
                />
            </div>
            <div className="wrapper__content">
                <div className="header__page">
                <h2 className="header__heading header__heading--sub">Book a room</h2>
                </div>
                <div className="sidebar">
                <div className="sidebar__box">
                    <Calendar setCalendarDate={setCalendarDate} />
                </div>
                <div className="sidebar__box">
                    <Key />
                </div>
                </div>
                <div className="content">
                    <RoomsList
                        /*rooms={filteredData}
                        onRoomSelect={this.onRoomSelect}
                        onShowBooking={this.onShowBooking}
                        date={calendarDate}
                        onSetRoom={this.setRoom}*/
                    />
                </div>
                </div>

            </div>
    </Fragment>
  )
}

export default Bookings