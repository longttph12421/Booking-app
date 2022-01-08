import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import TimeSchedule from "./TimeSchedule";
import * as services from "../../../../services/TimeService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Times({ match }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [time, setTime] = React.useState([]);
  const [time2, setTime2] = React.useState([]);
  const enable = {
    WEEK_ID: Number(match.params.id),
    STATUS: 1,
  };
  const disable = {
    WEEK_ID: Number(match.params.id),
    STATUS: 0,
  };
  useEffect(() => {
    services.findDayByWeek(enable).then((response) => {
      setTime(response.data);
    });
    services.findDayByWeek(disable).then((response) => {
      setTime(response.data);
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
          <TimeSchedule time={time} setTime={setTime} match={match} />
        </TabPanel>
        <TabPanel value="2">
          <TimeSchedule time={time2} setTime2={setTime2} />
        </TabPanel>
      </TabContext>
    </div>
  );
}
export default Times;
