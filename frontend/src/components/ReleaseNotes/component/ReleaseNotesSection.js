import React from "react";
import ReactHtmlParser from "react-html-parser";

const ReleaseNotesSection = ({ releaseNote }) => {
  if (!releaseNote) return null;
  const { title, summary, customHTML } = releaseNote;
  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
      {customHTML?.length > 0 ? <div>{ReactHtmlParser(customHTML)}</div> : null}
    </div>
  );
};

export default ReleaseNotesSection;
