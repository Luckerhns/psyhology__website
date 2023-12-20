import React, { useEffect, useState } from "react";
import styles from "../styles/RecordPage.module.scss";
import { Badge, Calendar, Col, Radio, Row, Select, Typography } from "antd";
import type { BadgeProps, CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ru_RU";
import { monthsRu, monthsRuList, weekDaysRu } from "../utils/data";
import { useActions } from "../hooks/useActions";
import CalendarHeaderComponent from "./Calendar/CalendarHeader";
import { Moment } from "moment";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(() => dayjs("2023-01-25"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2023-01-25"));
  const [day, setDay] = useState<any>();
  const [month, setMonth] = useState<any>();
  const [weekDay, setWeekDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const { openRecordModal, closeRecordModal } = useActions();
  const [events, setEvents] = useState([
    {
      date: "2023-01-10",
      username: "dsadsa",
      freeTimes: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
      ],
      busyTimes: ["17:00", "18:00"],
    },
    {
      date: "2023-01-12",
      username: "dsadsa",
      freeTimes: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
      ],
      busyTimes: [
        { time: "17:00", username: "Mamed" },
        { time: "18:00", username: "Maga" },
      ],
    },
  ]);

  const dateCellRender = (value: Dayjs) => {
    const formatedDate = value.format("YYYY-MM-DD");
    const events = {
      8: ["go home"],
    };
    return <div>dsadsa</div>;
  };

  const currentWeekDay = weekDaysRu[weekDay - 1];

  const onPanelChange = (newValue: Dayjs) => {
    setCurrentDate(newValue);
  };

  const onSelect = (newValue: Dayjs) => {
    setCurrentDate(newValue);
    setSelectedValue(newValue);
    dateCellRender(newValue);
    setSelectedDate(newValue.format("YYYY-MM-DD"));
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  // const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
  //   if (info.type === "date") return dateCellRender(current);
  //   // if (info.type === 'month') return monthCellRender(current);
  //   console.log(info)
  //   return info.originNode;
  // };

  useEffect(() => {
    setDay(currentDate.date());
    setMonth(currentDate.get("month"));
    setWeekDay(currentDate.day() + 1);
  }, [currentDate, selectedValue]);

  return (
    <div className={styles.calendar__section}>
      <Calendar
        locale={locale}
        onSelect={onSelect}
        value={currentDate}
        onPanelChange={onPanelChange}
        className={styles.my__calendar}
        headerRender={({ value, type, onChange, onTypeChange }: any) => (
          <CalendarHeaderComponent
            value={value}
            type={type}
            onChange={onChange}
            onTypeChange={onTypeChange}
            weekDay={currentWeekDay}
            day={day}
            monthsList={monthsRu[month]}
            currentYear={currentDate.get("year")}
          />
        )}
        cellRender={(date: any) => {
          let markUp = true;
          return events.map((eventDate, key) => {
            const busyTimesLength = eventDate.busyTimes.length;
            const freeTimesLength = eventDate.freeTimes.length;
            if (eventDate.date === date.format("YYYY-MM-DD")) {
              markUp = true;
              return (
                <div key={key} className={styles.record__cell}>
                  <div className={styles.cell}>
                    Есть {freeTimesLength} свободных записей из{" "}
                    {freeTimesLength + busyTimesLength} &#10003;
                  </div>
                </div>
              );
            } else {
            }
          });
        }}
      />
    </div>
  );
};

export default CustomCalendar;
