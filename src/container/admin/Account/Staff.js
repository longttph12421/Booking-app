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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Staff(props) {
    const classes = useStyles();
    const { listStaff } = props;
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    console.log(listStaff)
    const UI = useSelector((state) => state.UI.modal);
    const handleOpen = (string, data) => {
        setTitle(string);
        dispatch(openModal());
        // dispatch(getById(data));
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
                <CustomModal title={title} modalBody={<ServiceForm />} />
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
                        listStaff.map((row)=>{
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
        </div>
    );
}


