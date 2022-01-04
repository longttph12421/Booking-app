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
import Muted from "../../Typography/Muted";
import { Link } from "react-router-dom";

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
    <ListSubheader inset>Thống kê</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Theo tuần" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Theo tháng" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Theo năm" />
    </ListItem>
  </div>
);
