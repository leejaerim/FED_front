import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

const Home_tab =({linkList})=>{
    return(
        <Tabs>
            <TabList>
                {linkList.map((link)=>(
                    <Link key={link} to={`${link}/`}>
                        <Tab>{link}</Tab>
                    </Link>
                ))}
            </TabList>
            <TabPanels>
                <Outlet></Outlet>
            </TabPanels>
        </Tabs>
    )
}

export default Home_tab;