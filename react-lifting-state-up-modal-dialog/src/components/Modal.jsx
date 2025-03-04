export default function Modal(props) {
  return (
    <div onClick={props.onClose}>
      <dialog open>Modal Dialog</dialog>
    </div>
  );
}
