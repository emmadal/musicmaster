import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, Button } from "reactstrap";
import "./styles/searchartist.css";

export default function SearchArtist() {
  const [artistname, ArtistName] = useState("");

  const submitArtist = e => {
    e.preventDefault();
  };

  const handleArtistName = e => {
    ArtistName(e.target.value);
  };

  return (
    <>
      <div className="title-form">
        <FontAwesomeIcon icon={faMusic} size="3x" spin />
        <h1 className="h1-responsive mx-3">Music master</h1>
      </div>
      <Form onSubmit={submitArtist} className="form-search">
        <Input
          name="artist"
          type="text"
          value={artistname}
          placeholder="Artist name"
          className="form-control"
          onChange={handleArtistName}
        />
        <Button type="submit" color="secondary" className="mx-1">
          Search
        </Button>
      </Form>
    </>
  );
}
