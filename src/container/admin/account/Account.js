import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Customer from "./Customer";
import Staff from "./Staff";
import * as AccountService from "../../../services/AccountService";
// import {getListCustomer} from "../../../services/AccountService";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Account() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [status, setStatus] = React.useState(1);
  const [listCustomer, setListCustomer] = React.useState([]);
  const [listDoctor, setListDoctor] = React.useState([]);
  const [listStaff, setListStaff] = React.useState([]);
  const doctor = {
    ROLE: "DOCTOR",
  };
  const staff = {
    ROLE: "STAFF",
  };
  useEffect(() => {
    //list customer
    AccountService.getListCustomer().then((response) => {
      setListCustomer(response.data.data);
    });
    AccountService.getListDocTorAndStaff(doctor).then((response) => {
      setListDoctor(response.data);
    });
    AccountService.getListDocTorAndStaff(staff).then((response) => {
      setListStaff(response.data);
    });
  }, [value]);

  const handleChange = (event, newValue) => {
    setStatus(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Người dùng" value="1" />
            <Tab label="Bác sĩ" value="2" />
            <Tab label="Nhân viên" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Customer listCustomer={listCustomer} />
        </TabPanel>
        <TabPanel value="2">
          <Staff listStaff={listDoctor} setListStaff={setListDoctor} status={status}/>
        </TabPanel>
        <TabPanel value="3">
          <Staff listStaff={listStaff} setListStaff={setListStaff} status={status}/>
        </TabPanel>
      </TabContext>
    </div>
  );
}
