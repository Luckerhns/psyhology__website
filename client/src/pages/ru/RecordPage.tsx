import React, { useState } from "react";
import styles from "../../styles/RecordPage.module.scss";
import MainLayout from "../../Layout/MainLayout";
import CustomCalendar from "../../components/CustomCalendar";

const RecordPage = () => {
  return (
    <MainLayout>
      <div className={styles.record__title}></div>
      <CustomCalendar />
    </MainLayout>
  );
};

export default RecordPage;
