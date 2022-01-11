import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import Muted from "../../Typography/Muted";
export const mainItems = (
  <div>
    <Link to="/admin" style={{ textDecoration: "none"}}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Muted>
        <ListItemText primary="Dashboard" />
        </Muted>

      </ListItem>
    </Link>

    <Link to="/admin/staff" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Muted>
        <ListItemText primary="Staff" />
        </Muted>
      </ListItem>
    </Link>

    <Link to="/admin/customers" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Muted>
        <ListItemText primary="Customer" />
        </Muted>
      </ListItem>
    </Link>

    <Link to="/admin/allservice" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <Muted>
        <ListItemText primary="Dịch Vụ" />
        </Muted>
      </ListItem>
    </Link>

    <Link to="/admin/booking" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <Muted>
        <ListItemText primary="Lịch Khám" />
        </Muted>
      </ListItem>
    </Link>

      <Link to="/admin/account" style={{ textDecoration: "none" }}>
          <ListItem button>
              <ListItemIcon>
                  <PeopleIcon />
              </ListItemIcon>
              <Muted>
                  <ListItemText primary="Account" />
              </Muted>
          </ListItem>
      </Link>
  </div>
);

export const secondaryItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
