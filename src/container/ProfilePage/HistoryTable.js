import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useConfirm } from "material-ui-confirm";
//======================   COMPONENT   ================================
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Danger from "../../components/Typography/Danger";
import Success from "../../components/Typography/Success";
import Button from "../../components/CustomButtons/Button";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Tooltip from "@material-ui/core/Tooltip";
//======================   SERVICE   ================================
import * as toastHelper from "../../common/toastHelper";
import * as service from "../../services/BookingDetailService";
//======================   ICON   ================================
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
  TablePagination,
  Toolbar,
  Typography,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  title: {
    flex: "1 1 100%",
  },
});
function HistoryTable(props) {
  const confirm = useConfirm();
  const classes = useStyles();
  const { rows, action, setRows } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
      cpn = <Danger>Đang tiếp nhận</Danger>;
    } else if (s === 5) {
      cpn = <Danger>Đã xong</Danger>;
    }
    return cpn;
  };
  const onCancel = (data) => {
    confirm({
      title: "Cảnh báo",
      description: "Bạn có chắc muốn hủy lịch khám !!!",
      cancellationText: "Hủy",
    }).then(() => {
      service
        .deleteById(data.id)
        .then((response) => {
          toastHelper.toastSuccess("Hủy lịch khám thành công...");
          const newList = rows.filter((e) => {
            if (e.id === data.id) {
              return false;
            }
            return true;
          });
          setRows(newList);
        })
        .catch((error) => {
          toastHelper.toastError("Đã có lỗi sảy ra" + error);
        });
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

        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <TableContainer component={Paper}>
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
                <TableCell align="center" style={{ minWidth: 50 }}>
                  Thao tác
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows != null ? (
              rows
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
              <span>No data...</span>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        labelRowsPerPage="Số bản ghi"
        labelDisplayedRows={({ from, to, count }) =>
        {
         return  `${from}- ${to}  /  ${count}`
        }}
       
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default HistoryTable;
