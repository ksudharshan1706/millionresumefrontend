import React, { useState } from "react";
import "./resume.css";
import Leftresume from "./Leftresume";
import Education from "./Education";
import Experience from "./Experience";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Resume = () => {
  const section = [
    { element: <Education />, _id: "1" },
    { element: <Experience />, _id: "2" },
  ];
  const [characters, updateCharacters] = useState(section);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="Resume">
      <Leftresume />
      <div className="rightResume">
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;

{
  /* <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              //   className="rightResume"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {section.map((data, index) => {
                return (
                  <Draggable
                    key={data._id}
                    draggableId={data._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="rightResume"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {data.element}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
     */
}
