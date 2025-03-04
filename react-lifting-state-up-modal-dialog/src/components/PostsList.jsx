import Modal from "./Modal";

export default function PostsList(props) {
  return (
    <>
      {props.modalIsVisible && <Modal onClose={props.hideModal}></Modal>}

      <h1>Posts List</h1>
    </>
  );
}
