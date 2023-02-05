import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

const Home_tab = ()=>{
    return(
        <Tabs>
            <TabList>
                <Link to={"/company"}>
                    <Tab>Company</Tab>
                </Link>
                <Link to={"/jobs"}>
                    <Tab>Jobs</Tab>
                </Link>
                <Link to={"/stack"}>
                    <Tab>Stack</Tab>
                </Link>
            </TabList>
            <TabPanels>
                <Outlet></Outlet>
            </TabPanels>
        </Tabs>
    )
}

export default Home_tab;