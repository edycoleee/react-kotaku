import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './tourlist.scss';
import {tourData} from "../../tourData"
export default class TourList extends Component {
    state = {
        tours: tourData
    }
    removeTour = id => {
        console.log(id);
        // find array where id equal in state
        const {tours} = this.state
        //filter array with id != id in state save in sortedTours
        const sortedTours = tours.filter(tour => tour.id !== id)
        // save array sortedTours in tours array and rendering
        this.setState({
            tours: sortedTours
        })
    }
    render() {
        const { tours } = this.state
        return (
            <div className="tourlist">
                {
                tours.map(tour => (<Tour key={tour.id}
                 tour = {tour} removeTour={this.removeTour}></Tour>))
                }
            </div>
        )
    }
}


