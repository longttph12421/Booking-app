import React, { useEffect } from "react";
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
import Tooltip from "@material-ui/core/Tooltip";
//==================  SERVICE  =====================================
import Button from "../../../components/CustomButtons/Button";
import * as Service from "../../../redux/reducer/DoctorSlide";
//======================   ICON   ================================
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import Success from "../../../components/Typography/Success";
import { TablePagination, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
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
}));

const Staff = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    dispatch(Service.getAll());
  }, []);
  const ListDoctor = useSelector((state) => state.doctor.data);
  return (
    <Paper className={classes.root}>
      <Toolbar className={classes.root}>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          LỊCH LÀM VIỆC
        </Typography>
      </Toolbar>
      <TableContainer component={Paper} className="mt-3">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ minWidth: 50 }}>
                ID
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Họ và tên
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Giới tính
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Số điện thoại
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Kinh nghiệm
              </TableCell>
              <TableCell align="center" style={{ minWidth: 150 }}>
                Học vấn
              </TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ListDoctor != null ? (
              ListDoctor.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" align="center" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.fullName}</TableCell>
                  <TableCell align="center">
                    {row.gender == true ? <span>Nam</span> : <span>Nữ</span>}
                  </TableCell>
                  <TableCell align="center">{row.phoneNumber}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.workExperience}</TableCell>
                  <TableCell align="center">{row.academicLevel}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Lịch khám">
                      <Link to={`/admin/staff/${row.id}`}>
                        <Button color="transparent" size="sm">
                          <Success>
                            <EventAvailableIcon size="lg" />
                          </Success>
                        </Button>
                      </Link>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <span>...</span>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={ListDoctor.length}
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
};

export default Staff;
