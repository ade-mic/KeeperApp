import React from "react";
import Fab from "@mui/material/Fab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={() => props.delete(props.id)}>
        <DeleteForeverIcon />
      </Fab>
    </div>
  );
}

export default Note;
