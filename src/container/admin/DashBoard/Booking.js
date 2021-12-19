import React,{ useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import BookingDetail from './BookingDetail';
import * as BookingDetailService from '../../../services/BookingDetailService';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
 
export default function Booking() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  const [list, setList] = React.useState([]);
  const [list2, setListStt2] = React.useState([]);
  useEffect(() => {
    BookingDetailService.getFindByStt1().then((response) => {
      setList(response.data.data);
      console.log(response.data.data);
    })

    BookingDetailService.getFindByStt2().then((response) => {
      setListStt2(response.data.data);
      console.log(response.data.data);
    })
 
  },[])
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Chờ Xác Nhận" value="1" />
            <Tab label="Đã Xác Nhận" value="2" />
            <Tab label="Đã Huỷ" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1"><BookingDetail list={list}/></TabPanel>
        <TabPanel value="2"><BookingDetail list={list2} action = {false}/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
  }