import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

    const listOfItems = () => {
      setItem((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList(" ");
    };

    const deleteItems = (id) => {
      console.log("delete");

      setItem((oldItems) => {
        return oldItems.filter((arrElem, index) => {
          return index !== id;
        });
      });
    };

    return (
      <>
        <div className="main_div">
          <div className="center_div">
            <br />
            <div className="heading_textarea">
              <h1 className="heading">My To Do List</h1>

              <input
                type="text"
                placeholder="Title..."
                value={inputList}
                className="input_type"
                onChange={itemEvent}
              />
              <button className="add_button" onClick={listOfItems}>
                Add
              </button>
            </div>

            <ul>
              {item.map((itemVal, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    text={itemVal}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  };
};
export default App;
