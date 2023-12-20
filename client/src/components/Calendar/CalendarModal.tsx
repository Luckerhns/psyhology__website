import React from "react";
import styles from "../../styles/UI/CalendarModal.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const CalendarModal = () => {
  const { isRecordOpen } = useTypedSelector((state) => state.recordModal);
  const { closeRecordModal } = useActions();
  return (
    <div
      className={
        isRecordOpen
          ? `${styles.main__container__time} ${styles.active}`
          : styles.main__container__time
      }
      onClick={closeRecordModal}
    >
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div></div>
      </div>
    </div>
  );
};

export default CalendarModal;
