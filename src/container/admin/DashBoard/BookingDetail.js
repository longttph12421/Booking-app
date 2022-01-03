import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Danger from "../../../components/Typography/Danger";
import Button from "../../../components/CustomButtons/Button";
import * as toastHelper from "../../../common/toastHelper";
import * as service from "../../../services/BookingDetailService";
import moment from "moment";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BookingDetail(props) {
  const classes = useStyles();
  const { list, action, setList } = props;
  console.log(list);
  const status = (s) => {
    let cpn = null;
    if (s === 1) {
      cpn = <Danger>Chờ Xác Nhận</Danger>;
    } else if (s === 2) {
      cpn = <Danger>Đã Xác Nhận</Danger>;
    } else if (s === 3) {
      cpn = <Danger>Đã hủy</Danger>;
    }
    return cpn;
  };

  const onConfirm = (data) => {
    service
      .putConfirmBooking(data)
      .then((response) => {
        toastHelper.toastSuccess("Xác nhận thành công");
        const newList = list.filter((e) => {
          if (e.bookingid === data.bookingid) {
            console.log("e:-------------------- ", e);
            return false;
          }
          return true;
        });
        console.log("New list :", newList);
        setList(newList);
      })
      .catch((error) => {
        toastHelper.toastError("Đã có lỗi sảy ra" + error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tên</TableCell>
            <TableCell align="center">SĐT</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Ngày khám</TableCell>
            <TableCell align="center">Giờ khám</TableCell>
            <TableCell align="center">Dịch vụ</TableCell>
            <TableCell align="center">Bác sĩ</TableCell>
            <TableCell align="center">Trạng thái</TableCell>
            {action == false ? null : (
              <TableCell align="center">Action</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.bookingid}>
              <TableCell align="center">
                {row.booking.customer.fullName}
              </TableCell>
              <TableCell align="center">{row.booking.customer.phone}</TableCell>
              <TableCell align="center">{row.booking.customer.email}</TableCell>
              <TableCell align="center">{row.dateBooking}</TableCell>
              <TableCell align="center">
                {moment(row.time_start).format("HH:mm")} -{" "}
                {moment(row.time_end).format("HH:mm")}
              </TableCell>
              <TableCell align="center">{row.serviceCustomer.name}</TableCell>
              <TableCell align="center">{row.staff.fullName}</TableCell>
              <TableCell align="center">{status(row.status)}</TableCell>
              {action == false ? null : (
                <TableCell align="center">
                  <Button
                    onClick={() => {
                      onConfirm(row);
                    }}
                    color="success"
                    size="sm"
                  >
                    Xác Nhận
                  </Button>
                  <Button color="danger" size="sm">
                    Huỷ
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
