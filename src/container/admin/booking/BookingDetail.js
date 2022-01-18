import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useConfirm } from "material-ui-confirm";
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
import CustomModal from "../../../components/Modal/Modal";
import {
  AppBar,
  IconButton,
  TablePagination,
  Toolbar,
  Typography,
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
//======================   SERVICE   ================================
import * as toastHelper from "../../../common/toastHelper";
import * as BookingSlide from "../../../redux/reducer/BookingSlide";
import * as service from "../../../services/BookingDetailService";
import * as UI from "../../../redux/reducer/UiSlider";
//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import moment from "moment";

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

export default function BookingDetail(props) {
  const classes = useStyles();
  const confirm = useConfirm();
  const { list, action, setList, tab } = props;
  const modal = useSelector((state) => state.UI.modal);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const toDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return new Date(year, month - 1, day, "08","30","00");
  };
  const status = (s) => {
    let cpn = null;
    if (s === 1) {
      cpn = <Danger>Chờ Xác nhận</Danger>;
    } else if (s === 2) {
      cpn = <Success>Đã Xác nhận</Success>;
    } else if (s === 3) {
      cpn = <Danger>Đã hủy</Danger>;
    } else if (s === 4) {
      cpn = <Warning>Đang tiếp nhận</Warning>;
    } else if (s === 5) {
      cpn = <Success>Đã hoàn thành</Success>;
    }
    return cpn;
  };

  const onConfirm = (data) => {
    confirm({
      title: "Cảnh báo",
      description:
        "Bạn đã xác nhận với khách hàng và muốn xác nhận lịch khám !!!",
      cancellationText: "Hủy",
    }).then(() => {
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
    });
  };
  const onEdit = (data) => {
    dispatch(BookingSlide.dataMapping(data));
    dispatch(UI.openModal());
  };

  const onCancel = (data) => {
    confirm({
      title: "Cảnh báo",
      description: "Bạn có chắc chắn muốn hủy lịch khám !!!",
      cancellationText: "Hủy",
    }).then(() => {
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
    });
  };
  const onSearch = (value) => {
    const data = {
      date: toDate(moment(value).format("DD-MM-YYYY")),
      status: tab,  
    };
    console.log(data);
    service.searchByDate(data).then((response) => {
      console.log(response.data);
      setList(response.data);
    }); 
  };
  return (
    <Paper className={classes.root}>
      <Toolbar className={classes.root}>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Lịch khám
        </Typography>
        <Tooltip title="Tìm theo ngày">
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
              type="date"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => {
                onSearch(event.target.value);
              }}
            />
          </div>
        </Tooltip>
        <Tooltip title="Lọc theo bác sĩ">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <TableContainer component={Paper}>
        {modal === true ? (
          <CustomModal
            title="Chỉnh sửa"
            modalBody={<EditForm list={list} setList={setList} />}
          />
        ) : null}
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Họ và tên
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Số điện thoại
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Ngày khám
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Giờ khám
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Dịch vụ
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Bác sĩ
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Trạng thái
              </TableCell>
              {action === false ? null : (
                <TableCell align="right" style={{ minWidth: 150 }}>
                  Thao tác
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {list != null || list != undefined ? (
              list
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.fullName}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.dateBooking}</TableCell>
                    <TableCell align="center">
                      {row.timeStart} - {row.timeEnd}
                    </TableCell>
                    <TableCell align="center">
                      {row.serviceCustomer.name}
                    </TableCell>
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
                ))
            ) : (
              <span>No data</span>
            )}
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
