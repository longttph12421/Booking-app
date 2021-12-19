import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Danger from "../../../components/Typography/Danger";
import Button from "../../../components/CustomButtons/Button";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BookingDetail(props) {
  const classes = useStyles();
  const { list, action } = props;

  const status = (s) => {
    let cpn = null;
    if (s == 1) {
      cpn = <Danger>Chờ Xác Nhận</Danger>
    }
    else if (s == 2) {
      cpn = <Danger>Đã Xác Nhận</Danger>
    }
    else if (s == 2) {
      cpn = <Danger>Đã hủy</Danger>
    }
    return cpn;
  }
  return (
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >STT</TableCell>
            <TableCell align="center">Tên</TableCell>
            <TableCell align="center">Giới Tính</TableCell>
            <TableCell align="center">SĐT</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Ngày khám</TableCell>
            <TableCell align="center">Giờ khám</TableCell>
            <TableCell align="center">Dịch vụ</TableCell>
            <TableCell align="center">Bác sĩ</TableCell>
            <TableCell align="center">Trạng thái</TableCell>
            {
              action == false ? null : <TableCell align="center">Action</TableCell>
            }

          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.bookingid}>
              <TableCell component="th" align="center" scope="row">
                {row.bookingid}
              </TableCell>
              <TableCell align="center" >{row.booking.customer.fullName}</TableCell>
              <TableCell align="center">{row.booking.customer.gender}</TableCell>
              <TableCell align="center">{row.booking.customer.phone}</TableCell>
              <TableCell align="center">{row.booking.customer.email}</TableCell>
              <TableCell align="center">{row.booking.datebooking}</TableCell>
              <TableCell align="center">{row.time_start}{row.time_end}</TableCell>
              <TableCell align="center">{row.serviceCustomer.name}</TableCell>
              <TableCell align="center">{row.staff.fullName}</TableCell>
              <TableCell align="center">{ status(row.status) }</TableCell>
              {
                action == false ? null : <TableCell align="center">
                  <Button color="success" size="sm">Xác Nhận</Button>
                  <Button color="danger" size="sm">Huỷ</Button>
                </TableCell>
              }

            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}


