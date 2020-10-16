

import Button from "components/Button";

export default function Status(props) {
  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{props.deleting}</h1>
    </main>
  );
};

// Status Stories
// This one's pretty straight forward! Our Status component only needs to accept the following props:

// message:String eg. "Deleting"
// Add the story for the Status component to stories/index.js.

// With our story in place, don't forget to update the component to use the props it is now being passed.