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
import ProductForm from "./ProductForm";
import Button from "../../../components/CustomButtons/Button";
import CustomModal from "../../../components/Modal/Modal";
//==================  SERVICE  =====================================
import { openModal } from "../../../redux/reducer/UiSlider";
import * as toastHelper from "../../../common/toastHelper";
//======================   ICON   ================================
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function AdminProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  useEffect(() => {}, [dispatch]);

  const productList = [{ id: 1 }];
  const UI = useSelector((state) => state.UI.modal);
  const handleOpen = (string, data) => {
    setTitle(string);
    dispatch(openModal());
  };
  const data = {};
  const handleDelete = (id) => {
    toastHelper.toastSuccess("Bạn đã xóa thành công ...");
  };
  return (
    <div>
      {UI === true ? (
        <CustomModal title={title} modalBody={<ProductForm />} />
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
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Tên Sản phẩm</TableCell>
              <TableCell align="center">Giá</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Hình ảnh</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" align="center" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.image}</TableCell>
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
    </div>
  );
}

export default AdminProduct;
