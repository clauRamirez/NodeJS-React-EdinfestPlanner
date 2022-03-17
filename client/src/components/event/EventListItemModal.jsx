import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {formatDate} from "../../helpers/formatDate.js"

const EventListItemModal = ({
  currentEvent,
  toggleHidden,
  onClickOutsideCloseModal,
}) => {

  const { day, start, end } = formatDate(
    currentEvent.performances[0].start,
    currentEvent.performances[0].end
  );

  return (
    <div
      className='modal-container'
      onClick={(event) => onClickOutsideCloseModal(event)}
    >
      <Modal.Dialog className='modal-wrapper'>
        <Modal.Header>
          <Modal.Title>{currentEvent.title}</Modal.Title>
          <div id="modal-title">
            <span
              onClick={() => toggleHidden()}
            >
              &#10060;
            </span>
          </div>
        </Modal.Header>

        <Modal.Body>
          <Container fluid>
            <Row>
              <Col xs={9}>
                <p>
                  <b>{day}</b>
                </p>
                <p>
                  From <b>{start}</b> till <b>{end}</b>
                </p>
              </Col>
              <Col>
                <p>£{currentEvent.performances[0].price}</p>
              </Col>
            </Row>
            <hr />
            <div
              dangerouslySetInnerHTML={{ __html: currentEvent.description }}
            ></div>{" "}
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <a
            href={currentEvent.website}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i>Go to official website.</i>
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default EventListItemModal;
