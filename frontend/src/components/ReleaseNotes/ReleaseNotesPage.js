import React from "react";
import ReleaseNotesSection from "./component/ReleaseNotesSection";

const ReleaseNotes = () => {
  const releaseNotes = [
    {
      summary: "Admin Portal To Create and View Assessments",
      customHTML:
        "<img src= 'https://media0.giphy.com/media/aQQ0V6tr9DsCA/giphy.gif' />",
    },
  ];

  return (
    <React.Fragment>
      <div>
        <h1>{"Welcome To Assessment System Admin Portal!"}</h1>
        {releaseNotes.map((note) => {
          return <ReleaseNotesSection releaseNote={note} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default ReleaseNotes;
