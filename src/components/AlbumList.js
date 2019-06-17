import React, {useState} from "react";
import "./styles/albumlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from "reactstrap";

export default function AlbumList(props) {
  const [playsound, setPlaySound] = useState(false)
  const [previewurl, setPreviewUrl] = useState('');


  const playSound = e => {
    let myaudio = new Audio(e);
    if(!playsound){
      myaudio.play();
      setPlaySound(true)
    }
    else{
      if(previewurl === e){
       myaudio.pause()
       setPlaySound(false)
      }
    }
  };

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
                <section className="tools-play">
                  <Button
                    color="success"
                    outline
                    onClick={() => playSound(m.preview)}
                    className="my-1"
                    title="Start"
                  >
                    <FontAwesomeIcon icon={faPlay} size="1x" />
                  </Button>

                  <Button
                    color="danger"
                    outline
                    className="my-1"
                    title="Like"
                  >
                    <FontAwesomeIcon icon={faHeart} size="1x" />
                  </Button>
                </section>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
