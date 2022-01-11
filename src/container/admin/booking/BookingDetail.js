import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//======================   COMPONENT   ================================
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
import EditForm from "./EditForm";
import Tooltip from "@material-ui/core/Tooltip";
//======================   SERVICE   ================================
import * as toastHelper from "../../../common/toastHelper";
import * as BookingSlide from "../../../redux/reducer/BookingSlide";
import * as service from "../../../services/BookingDetailService";
import * as UI from "../../../redux/reducer/UiSlider";
//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../../components/Modal/Modal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BookingDetail(props) {
  const classes = useStyles();
  const { list, action, setList } = props;
  const modal = useSelector((state) => state.UI.modal);
  const dispatch = useDispatch();

  // const handleOpen = (string, data) => {
  //   dispatch(UI.openModal());
  // };

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
  const onEdit = (data) => {
    dispatch(BookingSlide.dataMapping(data));
    dispatch(UI.openModal());
  };

  const onCancel = (data) => {
    service
      .deleteById(data.id)
      .then((response) => {
        toastHelper.toastSuccess("Hủy lịch khám thành công...");
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
      {modal === true ? (
        <CustomModal title="Chỉnh sửa" modalBody={<EditForm />} />
      ) : null}
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
            <TableRow key={row.id}>
              <TableCell align="center">{row.fullName}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.dateBooking}</TableCell>
              <TableCell align="center">
                {row.timeStart} - {row.timeEnd}
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
                        <Button
                          color="transparent"
                          size="sm"
                          onClick={() => {
                            onEdit(row);
                          }}
                        >
                          <Warning>
                            <EditIcon size="lg" />
                          </Warning>
                        </Button>
                      </Tooltip>
                    </GridItem>
                    <GridItem xs={4}>
                      <Tooltip title="Hủy">
                        <Button
                          color="transparent"
                          size="sm"
                          onClick={() => {
                            onCancel(row);
                          }}
                        >
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
