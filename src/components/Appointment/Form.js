// This file should import our InterviewerList and Button components. 
import React, { useState } from 'react'

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  resetForm = () => {
    this.setState({ setName: '' })
  }
  resetForm = () => {
    this.setState({ setInterviewr: null })
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder={props.interviewer}
          />
        </form>
        <InterviewerList 
        interviewers={props.interviewers} 
        value={interviewer} 
        onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick = {props.onCancel} >Cancel</Button>
          <Button confirm onSave = {props.onSave} >Save</Button>
        </section>
      </section>
    </main>
  );
};












// interviewers:Array// interviewers:Array
// onSave:Function
// onCancel:Function onSave:Function onCancel:Function

// As part of our Create story, the Form component should take the following props:

// Add the stories for Create and Edit and chain them to our previous Appointment
 ///stories. Update your Form component to use the props being passed to it.

  // function Application(props) {
  //   const [name, setName] = useState("");
  
  //   return (
  //     <main>
  //       <input
  //         value={name}
  //         onChange={(event) => setName(event.target.value)}
  //         placeholder="Please enter your name"
  //       />
  //       <h1>Hello, {name}.</h1>
  //     </main>
  //   );
  // }

// Add a reset() function to the Form component that calls setName("") and setInterviewer
// (null).

// Along with resetting the form, we also want to call props.onCancel when a user
//  clicks the cancel button. Instead of adding this to the reset function, let's
//   create a new function called cancel().

// Add a cancel function to the Form component that calls reset() and props.
// onCancel. We should also update our Form component so it's called when a user
//  clicks the Cancel button.

