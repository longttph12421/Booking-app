/* eslint-disable eqeqeq */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Muted from "../../Typography/Muted";
import { Link } from "react-router-dom";
import * as toast from "../../../common/toastHelper";

export const mainItems = (user) => {
  return (
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
      {user.role != "ADMIN" && user.role != "STAFF" ? (
        <Link to="/admin/schedule" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <Muted>
              <ListItemText primary="Lịch khám" />
            </Muted>
          </ListItem>
        </Link>
      ) : null}
      {user.role == "ADMIN" ? (
        <Link to="/admin/account" style={{ textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <Muted>
              <ListItemText primary="QL Tài khoản" />
            </Muted>
          </ListItem>
        </Link>
      ) : null}

      {user.role != "DOCTOR" ? (
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
      ) : null}

      {user.role != "DOCTOR" ? (
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
      ) : null}
      {user.role != "DOCTOR" ? (
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
      ) : null}
    </div>
  );
};

export const secondaryItems = (
  <div>
    <ListSubheader inset>Tài khoản</ListSubheader>
    <Link to="/admin/forgot" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <Muted>
          <ListItemText primary="Đổi mật khẩu" />
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
