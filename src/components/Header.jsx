import React from "react";
import NotesIcon from "@mui/icons-material/Notes";
import CreateIcon from "@mui/icons-material/Create";

function Header() {
  return (
    <header>
      <h1>
        <NotesIcon />
        <CreateIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
