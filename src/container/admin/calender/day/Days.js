import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import DaySchedule from "./DaySchedule";
import * as services from "../../../../services/TimeService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Days({ match }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [days, setDays] = React.useState([]);
  const [days2, setDays2] = React.useState([]);
  const enable = {
    STAFF_ID: Number(match.params.id),
    STATUS: 1,
  };
  const disable = {
    STAFF_ID: Number(match.params.id),
    STATUS: 0,
  };
  useEffect(() => {
    services.findWeekByDoctorAndStatus(enable).then((response) => {
      setDays(response.data);
    });
    services.findWeekByDoctorAndStatus(disable).then((response) => {
      setDays2(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Tab label="Hoạt động" value="1" />
          <Tab label="Không hoạt động" value="2" />
        </TabList>
        <TabPanel value="1">
          <DaySchedule days={days} setDays={setDays} match={match} />
        </TabPanel>
        <TabPanel value="2">
          <DaySchedule days={days2} setDays2={setDays2} />
        </TabPanel>
      </TabContext>
    </div>
  );
}
export default Days;
