import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import { getListServiceCustomer, getById } from "../../../redux/reducer/ServiceCustomerSlide";
import Button from "../../../components/CustomButtons/Button";
import CustomModal from '../../../components/Modal/Modal';
import { openModal } from "../../../redux/reducer/UiSlider";
import ServiceCustomerForm from "./ServiceCustomerForm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function ServiceCustomer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  useEffect(() => {
    dispatch(getListServiceCustomer());
  }, [dispatch]);

  const list = useSelector((state) => state.service.value);

  const handleOpen = (string, data) => {
    setTitle(string);
    dispatch(openModal());
    if(data.name == ""){
      dispatch(getById(data));
    }else{
      dispatch(getById(data));
    }
    
  }
const data ={
  name : "",
  price: "",
  description: "",
}
  return (

    <div>
      <CustomModal title={title} modalBody={<ServiceCustomerForm />} />
      <div>
        <Button onClick={()=>{handleOpen("Thêm mới", data)}}>Thêm mới</Button>

      </div>
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
                  <Button color="success" size="sm" onClick={()=>{handleOpen("Cập nhật", row)}}>Cập nhật</Button>
                  <Button color="danger" size="sm">Xoá</Button>
                </TableCell>
              </TableRow>
            ))}


          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
