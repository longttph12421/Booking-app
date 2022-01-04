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
import Danger from "../../../components/Typography/Danger";
import Warning from "../../../components/Typography/Warning";
import Tooltip from "@material-ui/core/Tooltip";
//==================  SERVICE  =====================================
import Button from "../../../components/CustomButtons/Button";
import * as Service from "../../../redux/reducer/DoctorSlide";
//======================   ICON   ================================
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Success from "../../../components/Typography/Success";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Staff() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Service.getAll());
  }, [dispatch]);

  const ListDoctor = useSelector((state) => state.doctor.data);

  return (
    <div>
      <div>
        <Button color="success" size="sm">
          <AddIcon />
          Thêm mới
        </Button>
      </div>
      <TableContainer component={Paper} className="mt-3">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Họ và tên</TableCell>
              <TableCell align="center">Giới tính</TableCell>
              <TableCell align="center">Số điện thoại</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Kinh nghiệm</TableCell>
              <TableCell align="center">Học vấn</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ListDoctor.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" align="center" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.fullName}</TableCell>
                <TableCell align="center">
                  {row.gender === true ? <span>Nam</span> : <span>Nữ</span>}
                </TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.workExperience}</TableCell>
                <TableCell align="center">{row.academicLevel}</TableCell>
                <TableCell align="center">
                  <Grid container>
                    <Grid xs={4}>
                      <Tooltip title="Lịch khám">
                        <Button color="transparent" size="sm">
                          <Success>
                            <EventAvailableIcon size="lg" />
                          </Success>
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid xs={4}>
                      <Tooltip title="Chỉnh sửa">
                        <Button color="transparent" size="sm">
                          <Warning>
                            <EditIcon size="lg" />
                          </Warning>
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid xs={4}>
                      <Tooltip title="Xóa">
                        <Button color="transparent" size="sm">
                          <Danger>
                            <DeleteIcon size="lg" />
                          </Danger>
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
