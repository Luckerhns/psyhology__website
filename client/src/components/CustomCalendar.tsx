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
  const [events, setEvents] = useState({
    date: "2023-01-10",
    username: "dsadsa",
  });

  const dateCellRender = (value: Dayjs) => {
    const formatedDate = value.format("YYYY-MM-DD");
    const events = {
      8: ["go home"],
    };
    console.log(Object.entries(events).map((e) =>  <div>dasd</div>));
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
    console.log(selectedDate)
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
        dateCellRender={(date: any) => 
          events.date === date.format("YYYY-MM-DD") ? <div>dadsad</div> : <></>
        }
      />
    </div>
  );
};

export default CustomCalendar;
