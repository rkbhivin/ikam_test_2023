import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import React from "react";

function sidebar() {
  return (
    <div>
      <Sidebar>
        <Menu>
          <SubMenu label="Application">
            <MenuItem> Local Body Details </MenuItem>{" "}
            <MenuItem> Permit And Occupancy Details </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default sidebar;
