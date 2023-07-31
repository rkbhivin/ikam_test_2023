import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import React from "react";

function sidebar({ handleChange }) {
  return (
    <div>
      <Sidebar>
        <Menu>
          <SubMenu label="Application">
            <MenuItem onclick={handleChange("0")}>
              {" "}
              Local Body Details{" "}
            </MenuItem>{" "}
            <MenuItem onclick={handleChange("1")}>
              Permit And Occupancy Details{" "}
            </MenuItem>
          </SubMenu>
          <MenuItem> Required Documents </MenuItem>
          <MenuItem> Guidelines </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default sidebar;
