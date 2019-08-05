import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function onKeyPress(event) {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }
}
