/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";
//===================  COMPONENT  ===============================
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Danger from "../../../../components/Typography/Danger";
import Warning from "../../../../components/Typography/Warning";
import { TablePagination, Tooltip } from "@material-ui/core";
import Success from "../../../../components/Typography/Success";
import FormEditDay from "./FormEditDay";
//==================  SERVICE  =====================================

import Button from "../../../../components/CustomButtons/Button";
import CustomModal from "../../../../components/Modal/Modal";
import * as UI from "../../../../redux/reducer/UiSlider";
import * as toastHelper from "../../../../common/toastHelper";
import * as service from "../../../../services/TimeService";
import * as timeSlice from "../../../../redux/reducer/TimeSlide";
//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DaySchedule({ days, setDays, match }) {
  const classes = useStyles();
  const confirm = useConfirm();
  const [title, setTitle] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.UI.modal);
  const handleOpen = (string, data) => {
    setTitle(string);
    dispatch(UI.openModal());
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const data = {};
  const handleDelete = (id) => {
    confirm({
      title: "Cảnh báo",
      description: "Bạn Có chắc chắn muốn xóa !!!",
      cancellationText: "Hủy",
    }).then(() => {
      service
        .deleteByDoctor(id)
        .then(() => {
          const newList = days.filter((day) => {
            if (day.id === id) {
              return false;
            }
            return true;
          });
          setDays(newList);
          toastHelper.toastSuccess("Bạn đã xóa thành công ...");
        })
        .catch((err) => {
          console.error(err);
          toastHelper.toastError("Đã có lỗi xảy ra...");
        });
    });
  };

  const handleClick = (row) => {
    history.push(`/admin/time/${row.id}`);
  };

  return (
    <div>
      {modal === true ? (
        <CustomModal
          title={title}
          modalBody={
            <FormEditDay setDays={setDays} match={match} days={days} />
          }
        />
      ) : null}
      <div>
        <Tooltip title="Trở về">
          <Button
            color="facebook"
            size="sm"
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowBackIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Thêm mới">
          <Button
            color="success"
            size="sm"
            onClick={() => {
              handleOpen("Thêm mới", data);
            }}
          >
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
      <TableContainer component={Paper} className="mt-3">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Thứ</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {days != null ? (
              days
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" align="center" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.dayOfWeek}</TableCell>
                    <TableCell align="center">
                      {row.status == 1 ? (
                        <span>Hoạt động</span>
                      ) : (
                        <span>Vô hiệu hóa</span>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Ca làm">
                        <Button
                          color="transparent"
                          size="sm"
                          onClick={() => {
                            handleClick(row);
                          }}
                        >
                          <Success>
                            <EventAvailableIcon size="lg" />
                          </Success>
                        </Button>
                      </Tooltip>
                      <Tooltip title="Chỉnh sửa">
                        <Button
                          color="transparent"
                          size="sm"
                          onClick={() => {
                            handleOpen("Cập nhật", row);
                          }}
                        >
                          <Warning>
                            <EditIcon size="lg" />
                          </Warning>
                        </Button>
                      </Tooltip>
                      <Tooltip title="Xóa">
                        <Button
                          color="transparent"
                          size="sm"
                          onClick={() => {
                            handleDelete(row.id);
                          }}
                        >
                          <Danger>
                            <DeleteIcon size="lg" />
                          </Danger>
                        </Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <span> No data...</span>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={days.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số bản ghi"
        labelDisplayedRows={({ from, to, count }) => {
          return `${from}- ${to}  /  ${count}`;
        }}
      />
    </div>
  );
}
