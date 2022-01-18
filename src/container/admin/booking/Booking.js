import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import BookingDetail from "../booking/BookingDetail";
import * as BookingDetailService from "../../../services/BookingDetailService";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Booking() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [list, setList] = React.useState([]);
  const [list2, setList2] = React.useState([]);
  const [list3, setList3] = React.useState([]);
  const [list4, setList4] = React.useState([]);
  const [list5, setList5] = React.useState([]);
  useEffect(() => {
    BookingDetailService.findByStatus(1).then((response) => {
      setList(response.data.data);
    });
    BookingDetailService.findByStatus(2).then((response) => {
      setList2(response.data.data);
    });
    BookingDetailService.findByStatus(3).then((response) => {
      setList3(response.data.data);
    });
    BookingDetailService.findByStatus(4).then((response) => {
      setList4(response.data.data);
    });
    BookingDetailService.findByStatus(5).then((response) => {
      setList5(response.data.data);
    });
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Chờ Xác Nhận" value="1" />
          <Tab label="Đã Xác Nhận" value="2" />
          <Tab label="Đang tiếp nhận" value="4" />
          <Tab label="Đã hoàn thành" value="5" />
          <Tab label="Đã Huỷ" value="3" />
        </TabList>
        <TabPanel value="1">
          <BookingDetail list={list} setList={setList} tab={value} />
        </TabPanel>
        <TabPanel value="2">
          <BookingDetail list={list2} setList={setList2} action={false} tab={value} />
        </TabPanel>
        <TabPanel value="3">
          <BookingDetail list={list3} setList={setList3} action={false} tab={value} />
        </TabPanel>
        <TabPanel value="4">
          <BookingDetail list={list4} setList={setList4} action={false} tab={value} />
        </TabPanel>
        <TabPanel value="5">
          <BookingDetail list={list5}  setList={setList5} action={false} tab={value} />
        </TabPanel>
      </TabContext>
    </div>
  );
}
