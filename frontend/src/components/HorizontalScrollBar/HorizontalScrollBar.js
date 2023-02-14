import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../HorizontalScrollBar/HorizontalScrollBar.css";

const HorizontalScrollBar = (props) => {
  const list = props.list;
  const searched = props.searched;
  const selectionName = props.selectionName;
  const actionOnSelect = props.actionOnSelect;

  const onSelect = (event) => {
    event.preventDefault();
    actionOnSelect(event.target.value);
    console.log("Select an item in list: ", event.target.value);
  };

  const ListItem = ({ text, onSelect }) => {
    return (
      <h2 className="scrollable-buttons-text">
        <button
          className="scrollable-buttons"
          id="select-input"
          value={text}
          onClick={onSelect}
        >
          {text}
        </button>
      </h2>
    );
  };

  // All items component
  // Important! add unique key
  const List = (list) => {
    console.log("Searching list for ", searched);
    if (searched !== "") {
      list = list.filter((item) => {
        return item[selectionName].includes(String(searched).toUpperCase());
      });
      console.log("List of filtered results: ", list);
    }

    return list.map((item, i) => {
      return (
        <ListItem text={item[selectionName]} key={i} onSelect={onSelect} />
      );
    });
  };

  const Arrow = ({ text, className }) => {
    return (
      <div className={className}>
        <h2 className="arrow">{text}</h2>
      </div>
    );
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  return (
    <ScrollMenu
      data={List(list)}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      alignCenter={true}
    />
  );
};

export default HorizontalScrollBar;
