import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Muted from "../../Typography/Muted";
import { Link } from "react-router-dom";
import * as toast from "../../../common/toastHelper";
export const mainItems = (
  <div>
    <Link to="/admin" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Trang chủ" />
        </Muted>
      </ListItem>
    </Link>

    <Link to="/admin/product" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Sản phẩm" />
        </Muted>
      </ListItem>
    </Link>

    <Link to="/admin/customer" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Người dùng" />
        </Muted>
      </ListItem>
    </Link>
    <Link to="/admin/staff" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Nhân viên" />
        </Muted>
      </ListItem>
    </Link>
    <Link to="/admin/service" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <EventNoteIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Dịch Vụ" />
        </Muted>
      </ListItem>
    </Link>

    <Link to="/admin/booking" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Lịch Khám" />
        </Muted>
      </ListItem>
    </Link>
  </div>
);

export const secondaryItems = (
  <div>
    <ListSubheader inset>Tài khoản</ListSubheader>
    <Link to="/admin/staff" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Tài khoản" />
        </Muted>
      </ListItem>
    </Link>
    <Link to="/login" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <LockOpenIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Đăng nhập" />
        </Muted>
      </ListItem>
    </Link>
    <Link to="/login" style={{ textDecoration: "none" }}>
      <ListItem
        button
        onClick={() => {
          toast.toastSuccess("Bạn đã đăng xuất thành công...");
          localStorage.removeItem("userLogin");
          localStorage.removeItem("TokenLogin");
        }}
      >
        <ListItemIcon>
          <LockIcon />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Đăng xuất" />
        </Muted>
      </ListItem>
    </Link>
  </div>
);
