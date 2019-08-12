import React from "react";
import moment from 'moment'
import {Table} from 'semantic-ui-react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from '../gcal'
const localizer = BigCalendar.momentLocalizer(moment)

export default class Calendar extends React.Component {
  state = {
        dateObject: moment(),
        events:[]
    }

    componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }

    firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d");
   return firstDay;
};


    daysInMonth = ()=>{
      let dateObject = this.state.dateObject;
      let numberofDays = moment(dateObject).daysInMonth()
      return numberofDays
    }
  render() {
    console.log(this.state);
    let weekdaysShort = moment.weekdaysShort()
    console.log(weekdaysShort);

    let weekdayNames = weekdaysShort.map(day =>
        <Table.HeaderCell>{day}</Table.HeaderCell>
     )

     let blanks = [];
      for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(
        <Table.Cell>{""}</Table.Cell>
        );
      }

      let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
          daysInMonth.push(
            <Table.Cell key={d}>{d}</Table.Cell>
      );
    }

      const totalSlots = [...blanks, ...daysInMonth];
      let rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); // if index not equal 7 that means not go to next week
        } else {
          rows.push(cells); // when reach next week we contain all td in last week to rows
          cells = []; // empty container
          cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
          }
        });
        let daysinmonth = rows.map((d, i) => {
      return <Table.Row>{d}</Table.Row>;
    });

        let myEventsList = []

    return (
      <div>
        <h2>Calendar</h2>

          <BigCalendar
            style={{height: '420px'}}
      localizer={localizer}
      events={this.state.events}
      startAccessor="start"
      endAccessor="end"
    />

      </div>
    );
  }
}
