import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//======================   COMPONENT   ================================
import moment from "moment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Danger from "../../../components/Typography/Danger";
import Success from "../../../components/Typography/Success";
import Button from "../../../components/CustomButtons/Button";
import Warning from "../../../components/Typography/Warning";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Tooltip from "@material-ui/core/Tooltip";
//======================   SERVICE   ================================
import * as toastHelper from "../../../common/toastHelper";
import * as service from "../../../services/BookingDetailService";

//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

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
      cpn = <Danger>Chờ Xác nhận</Danger>;
    } else if (s === 2) {
      cpn = <Success>Đã Xác nhận</Success>;
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
          if (e.id === data.id) {
            return false;
          }
          return true;
        });
        setList(newList);
      })
      .catch((error) => {
        toastHelper.toastError("Đã có lỗi sảy ra" + error);
      });
  };

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
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
            {action === false ? null : (
              <TableCell align="center">Action</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.bookingid}>
              <TableCell align="center">{row.fullName}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.dateBooking}</TableCell>
              <TableCell align="center">
                {moment(row.time_start).format("HH:mm")} -{" "}
                {moment(row.time_end).format("HH:mm")}
              </TableCell>
              <TableCell align="center">{row.serviceCustomer.name}</TableCell>
              <TableCell align="center">{row.staff.fullName}</TableCell>
              <TableCell align="center">{status(row.status)}</TableCell>
              {action === false ? null : (
                <TableCell align="center">
                  <GridContainer>
                    <GridItem xs={4}>
                      <Tooltip title="Xác nhận">
                        <Button
                          onClick={() => {
                            onConfirm(row);
                          }}
                          color="transparent"
                          size="sm"
                        >
                          <Success>
                            <CheckIcon size="lg" />
                          </Success>
                        </Button>
                      </Tooltip>
                    </GridItem>
                    <GridItem xs={4}>
                      <Tooltip title="Chỉnh sửa">
                        <Button color="transparent" size="sm">
                          <Warning>
                            <EditIcon size="lg" />
                          </Warning>
                        </Button>
                      </Tooltip>
                    </GridItem>
                    <GridItem xs={4}>
                      <Tooltip title="Hủy">
                        <Button color="transparent" size="sm">
                          <Danger>
                            <DeleteIcon size="lg" />
                          </Danger>
                        </Button>
                      </Tooltip>
                    </GridItem>
                  </GridContainer>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}