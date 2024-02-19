import { Link, Outlet } from "react-router-dom";
import styles from "./modal.module.scss";

interface ModalProps {
  isDone: boolean | null;
}

const Modal = ({ isDone }:ModalProps) => {
  console.log("Nicolasss", isDone);
  if (isDone)
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Outlet />
      </div>
    );
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Modal;
