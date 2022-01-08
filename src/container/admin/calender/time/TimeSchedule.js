/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

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
import { Tooltip } from "@material-ui/core";
//==================  SERVICE  =====================================

import Button from "../../../../components/CustomButtons/Button";
import CustomModal from "../../../../components/Modal/Modal";
import * as UI from "../../../../redux/reducer/UiSlider";
import * as toastHelper from "../../../../common/toastHelper";
import * as service from "../../../../services/TimeService";
//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TimeSchedule({ time, setTime, match }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  console.log(time);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.UI.modal);
  const handleOpen = (string, data) => {
    setTitle(string);
    dispatch(UI.openModal());
  };
  const data = {};
  const handleDelete = (id) => {
    service
      .deleteByDoctor(id)
      .then(() => {
        const newList = time.filter((day) => {
          if (day.id === id) {
            return false;
          }
          return true;
        });
        setTime(newList);
        toastHelper.toastSuccess("Bạn đã xóa thành công ...");
      })
      .catch((err) => {
        console.error(err);
        toastHelper.toastError("Đã có lỗi xảy ra...");
      });
  };

  return (
    <div>
      {modal === true ? (
        <CustomModal
          title={title}
          modalBody={<div setTime={setTime} match={match} time={time} />}
        />
      ) : null}
      <div>
        <Button
          color="success"
          size="sm"
          onClick={() => {
            handleOpen("Thêm mới", data);
          }}
        >
          <AddIcon />
          Thêm mới
        </Button>
      </div>
      <TableContainer component={Paper} className="mt-3">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Thời gian bắt đầu</TableCell>
              <TableCell align="center">Thời gian kết thúc</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {time != null ? (
              time.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" align="center" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.startTime}</TableCell>
                  <TableCell align="center">{row.endTime}</TableCell>
                  <TableCell align="center">
                    {row.status == 1 ? (
                      <span>Hoạt động</span>
                    ) : (
                      <span>Vô hiệu hóa</span>
                    )}
                  </TableCell>
                  <TableCell align="center">
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
    </div>
  );
}
