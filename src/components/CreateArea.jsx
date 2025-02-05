import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
function CreateArea(props) {
  const [isClickedNote, setClickNote] = useState(false);
  return (
    <div>
      <form className="create-note">
        {isClickedNote ? (
          <input
            onChange={props.addTitle}
            name="title"
            placeholder="Title"
            value={props.title}
          />
        ) : null}
        <textarea
          onClick={() => setClickNote(!isClickedNote)}
          onChange={props.addTextArea}
          name="content"
          placeholder="Take a note..."
          value={props.text}
          rows={isClickedNote ? "3" : "1"}
        />
        <Zoom in={isClickedNote}>
          <Fab className="add-button" onClick={props.addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
