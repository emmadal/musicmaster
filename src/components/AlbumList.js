import React from "react";
import "./styles/albumlist.css";
import { Container, Row, Col } from "reactstrap";

export default function AlbumList(props) {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col sm="12">
          <div className="music-div">
            {props.datamusic.map(m => (
              <div key={m.id} className="album-div">
                <img
                  src={m.album.cover_big}
                  alt="album cover"
                  className="img-fluid album-cover"
                  title={m.title}
                />
                <section className="tools-play audio-zone">
                  <audio controls src={m.preview} title="Start preview"/>
                </section>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
