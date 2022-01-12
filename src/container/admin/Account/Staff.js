import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "../../../components/CustomButtons/Button";
import CustomModal from "../../../components/Modal/Modal";
import ServiceForm from "../ServiceCustomer/ServiceForm";
import AddIcon from "@material-ui/icons/Add";
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../../redux/reducer/UiSlider";
import {TablePagination} from "@material-ui/core";
import FormDetailDoctor from "./FormDetailDoctor";
import FormDetailStaff from "./FormDetailStaff";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Staff(props) {
    const classes = useStyles();
    const { listStaff,setListStaff } = props;
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    console.log(listStaff)
    const UI = useSelector((state) => state.UI.modal);
    const handleOpen = (string, data) => {
        setTitle(string);
        dispatch(openModal());
        // dispatch(getById(data));
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
                <CustomModal title={title} modalBody={<FormDetailStaff listStaff={listStaff} setListStaff={setListStaff} />} />
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
            <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >STT</TableCell>
                            <TableCell align="center">Tên</TableCell>
                            <TableCell align="center">Giới Tính</TableCell>
                            <TableCell align="center">SĐT</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Địa chỉ</TableCell>
                            <TableCell align="center">Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            listStaff.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row)=>{
                                return(
                                    <TableRow key={row.id}>
                                        <TableCell component="th" align="center" scope="row">{row.id}</TableCell>
                                        <TableCell align="center">{row.fullName}</TableCell>
                                        <TableCell align="center">{row.gender}</TableCell>
                                        <TableCell align="center">{row.phoneNumber}</TableCell>
                                        <TableCell align="center">{row.email}</TableCell>
                                        <TableCell align="center">{row.photo}</TableCell>
                                        <TableCell align="center">
                                            <Button color="success" size="sm">Cập nhật</Button>
                                            <Button color="danger" size="sm">Khoá</Button>
                                        </TableCell>

                                    </TableRow>
                                )

                            })
                        }


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
            />
        </div>
    );
}