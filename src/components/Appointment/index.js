import React from "react";
import Header from "Appointment/Header.Js";
import Empty from "Appointment/Empty.Js";
import Form  from "Appointment/Form.Js";
import Show from "Appointment/Show.Js";
import Status from "Appointment/Status.Js";


storiesOf("Appointment", module)
  .addParameters({backgrounds: [{ name: "white", value: "#fff", default: true }]})
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />);
  .add("Header", () => <Header time="12pm" />)
  .add("Empty", () => <Empty onAdd={action("onAdd")} />)
  .add("Show", () => <Show onEdit={action("onEdit")}, onDelete={action("onDelete")}  />) 
  //We want to pass the onEdit and onDelete named action 
  .add("Confirm", () => <Confirm onCancel={action("onCancel")}, onConfirm={action("onConfirm")} />) 
  
  .add("Status", () => <Status name="Monday" spots={5} selected />) 
  .add("Create", () => <Status name="Monday" spots={5} selected />) 
  .add("Edit", () => <Status name="Monday" spots={5} selected />) 






























//   Header displays the time for the appointment
// Empty allows a user to choose which time slot to book
// Show allows a user to see an existing appointment
// Confirm allows a user to confirm a destructive action
// Status informs the user that an operation is in progress
// Error informs the user when an error occurs

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   }
// ];