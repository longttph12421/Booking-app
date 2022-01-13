import React, { useEffect, useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "../../../components/CustomButtons/Button";
import CustomModal from "../../../components/Modal/Modal";
import ServiceForm from "../ServiceCustomer/ServiceForm";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../redux/reducer/UiSlider";
import {
  IconButton,
  InputBase,
  TablePagination,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import FormEditStaff from "./FormEditStaff";
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";
import SearchIcon from "@material-ui/icons/Search";
import Danger from "../../../components/Typography/Danger";
import GridItem from "../../../components/Grid/GridItem";
import Warning from "../../../components/Typography/Warning";
import GridContainer from "../../../components/Grid/GridContainer";
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

export default function Staff(props) {
  const classes = useStyles();
  const { listStaff, setListStaff } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log(listStaff);
  const UI = useSelector((state) => state.UI.modal);

  const handleOpen = (string, data) => {
    setTitle(string);
    dispatch(openModal());
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const data = {
    id: "",
    name: "",
    price: "",
    description: "",
    time_examination: "",
  };

  return (
    <div>
      {UI === true ? (
        <CustomModal
          title={title}
          modalBody={
            <FormEditStaff
              listStaff={listStaff}
              setListStaff={setListStaff}
            />
          }
        />
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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ minWidth: 50 }}>
                ID
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Họ và tên
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Số điện thoại
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Giới Tính
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Kinh nghiệm
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Học vấn
              </TableCell>
              <TableCell align="center" style={{ minWidth: 300 }}>
                Mô tả
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listStaff
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" align="center" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.fullName}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phoneNumber}</TableCell>
                    <TableCell align="center">
                      {row.gender === 1 ? <span>Nam</span> : <span>Nữ</span>}
                    </TableCell>
                    <TableCell align="center">{row.workExperience}</TableCell>
                    <TableCell align="center">{row.academicLevel}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">
                      <GridContainer>
                        <GridItem xs={4}>
                          <Tooltip title="Chỉnh sửa">
                            <Button
                              color="transparent"
                              size="sm"
                              //   onClick={() => {
                              //     onEdit(row);
                              //   }}
                            >
                              <Warning>
                                <EditIcon size="lg" />
                              </Warning>
                            </Button>
                          </Tooltip>
                        </GridItem>
                        <GridItem xs={4}>
                          <Tooltip title="Khóa">
                            <Button
                              color="transparent"
                              size="sm"
                              //   onClick={() => {
                              //     onCancel(row);
                              //   }}
                            >
                              <Danger>
                                <LockIcon size="lg" />
                              </Danger>
                            </Button>
                          </Tooltip>
                        </GridItem>
                      </GridContainer>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={listStaff.length}
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
