import React, { useEffect, useState } from "react";
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
import Danger from "../../../components/Typography/Danger";
import Warning from "../../../components/Typography/Warning";
//==================  SERVICE  =====================================
import {
  getListServiceCustomer,
  getById,
} from "../../../redux/reducer/ServiceCustomerSlide";
import Button from "../../../components/CustomButtons/Button";
import CustomModal from "../../../components/Modal/Modal";
import { openModal } from "../../../redux/reducer/UiSlider";
import ServiceForm from "./ServiceForm";
import * as Service from "../../../services/ServiceCustomerService";
import * as toastHelper from "../../../common/toastHelper";
//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import {TablePagination, Tooltip} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ServiceCustomer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  useEffect(() => {
    dispatch(getListServiceCustomer());
  }, [dispatch]);

  const list = useSelector((state) => state.service.value);
  const UI = useSelector((state) => state.UI.modal);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleOpen = (string, data) => {
    setTitle(string);
    dispatch(openModal());
    dispatch(getById(data));
  };
  const data = {
    id: "",
    name: "",
    price: "",
    description: "",
    time_examination: "",
  };
  const handleDelete = (id) => {
    Service.deleteService(id)
      .then(() => {
        dispatch(getListServiceCustomer());
        setTimeout(() => {
          toastHelper.toastSuccess("Bạn đã xóa thành công ...");
        }, 1000);
      })
      .catch((err) => {
        toastHelper.toastError("Đã có lỗi sảy ra !" + err);
      });
  };
  return (
    <div>
      {UI === true ? (
        <CustomModal title={title} modalBody={<ServiceForm />} />
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
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">Tên dịch vụ</TableCell>
              <TableCell align="center">Giá</TableCell>
              <TableCell align="center">Mô tả</TableCell>
              <TableCell align="center">Thời gian</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" align="center" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.timeExamination}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
