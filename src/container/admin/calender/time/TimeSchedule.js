/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import { FormControlLabel, Switch, Tooltip } from "@material-ui/core";
import TimeForm from "./TimeForm";
//==================  SERVICE  =====================================
import customCheckboxRadioSwitch from "../../../../assets/jss/material-kit-react/customCheckboxRadioSwitch";
import Button from "../../../../components/CustomButtons/Button";
import CustomModal from "../../../../components/Modal/Modal";
import * as UI from "../../../../redux/reducer/UiSlider";
import * as toastHelper from "../../../../common/toastHelper";
import * as services from "../../../../services/TimeService";
//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function TimeSchedule({ match }) {
  const useStyles = makeStyles(customCheckboxRadioSwitch);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const modal = useSelector((state) => state.UI.modal);
  const handleOpen = (string, data) => {
    setTitle(string);
    dispatch(UI.openModal());
  };
  useEffect(() => {
    services.findDayByWeekId(Number(match.params.id)).then((response) => {
      console.log(response.data);
      setTime(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = {};
  const handleDelete = (id) => {
    services
      .deleteTimeById(id)
      .then(() => {
        const newList = time.filter((t) => {
          if (t.id === id) {
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
  const onChecked = (value, event) => {
    let check = 0;
    if (event.target.checked) {
      check = 1;
    } else {
      check = 0;
    }
    const data = {
      id: value.id,
      endTime: value.endTime,
      startTime: value.startTime,
      status: check,
      weekSchedule: { id: value.weekSchedule.id },
    };

    services
      .updateTime(data)
      .then((response) => {
        const newList = time.map((value, index) => {
          if (value.id === data.id) {
            return response.data;
          } else {
            return value;
          }
        });
        setTime(newList);
        toastHelper.toastSuccess("Đã thay đổi Trạng thái...");
      })
      .catch((error) => {
        toastHelper.toastError("Đã có lỗi sảy ra !");
      });
  };
  return (
    <div>
      {modal === true ? (
        <CustomModal
          title={title}
          modalBody={<TimeForm setTime={setTime} match={match} time={time} />}
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
                    <FormControlLabel
                      control={
                        <Switch
                          checked={row.status}
                          onChange={(event) => onChecked(row, event)}
                          classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            thumb: classes.switchIcon,
                            track: classes.switchBar,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                      }}
                    />
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
