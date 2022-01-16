import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//======================   COMPONENT   ================================
import TabContext from "@material-ui/lab/TabContext";
import { Tab } from "@material-ui/core";
import TabPanel from "@material-ui/lab/TabPanel";
import TabList from "@material-ui/lab/TabList";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
//======================   SERVICE   ================================
import * as service from "../../services/BookingDetailService";
import BookingDetail from "../../container/admin/booking/BookingDetail";
import HistoryTable from "./HistoryTable";
const useStyles = makeStyles({});

function History() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("userLogin"));
  const [value, setValue] = React.useState("1");
  const [list, setList] = React.useState([]);
  const [list2, setList2] = React.useState([]);
  const [list3, setList3] = React.useState([]);
  const [list4, setList4] = React.useState([]);
  const [list5, setList5] = React.useState([]);
  const wait = {
    CUSTOMER: user.id,
    STATUS: 1,
  };
  const confirm = {
    CUSTOMER: user.id,
    STATUS: 2,
  };
  const cancel = {
    CUSTOMER: user.id,
    STATUS: 3,
  };
  const receive = {
    CUSTOMER: user.id,
    STATUS: 4,
  };
  const finish = {
    CUSTOMER: user.id,
    STATUS: 5,
  };
  useEffect(() => {
    service.findByCustomer(wait).then((response) => {
      setList(response.data);
    });
    service.findByCustomer(confirm).then((response) => {
      setList2(response.data);
    });
    service.findByCustomer(cancel).then((response) => {
      setList3(response.data);
    });
    service.findByCustomer(receive).then((response) => {
      setList4(response.data);
    });
    service.findByCustomer(finish).then((response) => {
      setList5(response.data);
    });
  }, [value]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <GridContainer container>
        <GridItem xs={12} className="text-center mt-5">
          <h2>LỊCH SỬ KHÁM</h2>
          <hr />
        </GridItem>

        <GridItem xs={12}>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Chờ Xác Nhận" value="1" />
              <Tab label="Đã Xác Nhận" value="2" />
              <Tab label="Đã Xác Nhận" value="4" />
              <Tab label="Đã Xác Nhận" value="5" />
              <Tab label="Đã Huỷ" value="3" />
            </TabList>
            <TabPanel value="1">
              <HistoryTable rows={list} setRows={setList} />
            </TabPanel>
            <TabPanel value="2">
              <HistoryTable rows={list2} action={false} />
            </TabPanel>
            <TabPanel value="3">
              <HistoryTable rows={list3} action={false} />
            </TabPanel>
            <TabPanel value="4">
              <HistoryTable rows={list4} action={false} />
            </TabPanel>
            <TabPanel value="5">
              <HistoryTable rows={list5} action={false} />
            </TabPanel>
          </TabContext>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default History;
