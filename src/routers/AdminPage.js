import {Tab, TabList, TabPanels, Tabs} from "@chakra-ui/react";
import {Link, Outlet} from "react-router-dom";
import Header from "../components/Header";
import Home_tab from "../components/Tab";
import React from "react";

const AdminPage =()=>{
    return(
        <div className="Admin">
            <Header></Header>
            <Home_tab linkList={['stack']}></Home_tab>
        </div>
    )
}
export default AdminPage