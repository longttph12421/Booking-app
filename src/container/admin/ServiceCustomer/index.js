import React, { useEffect, useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
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
import { InputBase, TablePagination, Toolbar, Tooltip, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  title: {
    flex: "1 1 100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleSearch: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "primary",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "22ch",
      },
    },
  },
}));

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
    <Paper className={classes.root}>
      {UI === true ? (
        <CustomModal title={title} modalBody={<ServiceForm />} />
      ) : null}
      <Toolbar className={classes.root}>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
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
        </Typography>
        <Tooltip title="Tìm kiếm">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              type="text"
              inputProps={{ "aria-label": "search" }}
              onBlurCapture={() => {
                alert("abc");
              }}
            />
          </div>
        </Tooltip>
      </Toolbar>
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
            {list
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
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
        labelRowsPerPage="Số bản ghi"
        labelDisplayedRows={({ from, to, count }) => {
          return `${from}- ${to}  /  ${count}`;
        }}
      />
    </Paper>
  );
}
