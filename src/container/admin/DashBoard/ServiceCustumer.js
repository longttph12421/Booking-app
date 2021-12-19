import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import {getListServiceCustumer} from "../../../redux/reducer/ServiceCustumerSlide";
import Button from "../../../components/CustomButtons/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function ServiceCustumer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListServiceCustumer());
  }, [dispatch]);

    const list = useSelector((state) => state.service.value);
    console.log(list);
  
 
  return (
    <TableContainer component={Paper}>
            
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >STT</TableCell>
            <TableCell align="center">Tên dịch vụ</TableCell>
            <TableCell align="center">Hình ảnh</TableCell>
            <TableCell align="center">Giá</TableCell>
            <TableCell align="center">Mô tả</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {list.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" align="center" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center" >{row.name}</TableCell>
              <TableCell align="center">{row.photo}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">
                <Button color ="success" size = "sm">Cập nhật</Button>
                <Button color ="danger" size = "sm">Xoá</Button>
              </TableCell>
            </TableRow>
          ))}
      

        </TableBody>
      </Table>
    </TableContainer>
  );
}
