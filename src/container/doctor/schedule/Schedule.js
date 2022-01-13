import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import ScheduleDetail from "./ScheduleDetail";
import * as services from "../../../services/BookingDetailService";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Schedule() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [list, setList] = React.useState([]);
  const [list2, setListStt2] = React.useState([]);
  const [list3, setListStt3] = React.useState([]);
  useEffect(() => {
    services.findByStatus(2).then((response) => {
      setList(response.data.data);
    });
    services.findByStatus(4).then((response) => {
      setListStt2(response.data.data);
    });
    services.findByStatus(5).then((response) => {
      setListStt3(response.data.data);
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
          <Tab label="Đã xác nhận" value="1" />
          <Tab label="Đã tiếp nhận" value="2" />
          <Tab label="Đã Xong" value="3" />
        </TabList>
        <TabPanel value="1">
          <ScheduleDetail list={list} setList={setList} />
        </TabPanel>
        <TabPanel value="2">
          <ScheduleDetail list={list2} action={false} />
        </TabPanel>
        <TabPanel value="3">
          <ScheduleDetail list={list3} action={false} />
        </TabPanel>
      </TabContext>
    </div>
  );
}
