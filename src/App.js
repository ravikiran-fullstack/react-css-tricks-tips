import React, { useState } from "react";
import {
  MdAccessibility,
  MdAccountBalance,
  MdAccountCircle,
  MdAlarm
} from "react-icons/md";


import DropdownMenu from './components/dropdown/DropdownMenu';
import NavBar from './components/navbar/NavBar';
import NavItem from './components/navbar/navItem/NavItem';

const App = () => {
  return (
    <>
      <NavBar>
        <NavItem icon={<MdAccessibility />}></NavItem>
        <NavItem icon={<MdAccountBalance />}></NavItem>
        <NavItem icon={<MdAccountCircle />}></NavItem>
        <NavItem icon={<MdAlarm />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </NavBar>
    </>
  );
};

export default App;
