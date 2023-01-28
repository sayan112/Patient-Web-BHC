import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AirplayIcon from "@mui/icons-material/Airplay";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { GrMoney } from "react-icons/gr";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Doctors List",
    path: "/doclist",
    icon: <PeopleOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Appointment",
    path: "/appoint",
    icon: <ContactsOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Patient History",
    path: "/patienthistory",
    icon: <ReceiptOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Profile Update",
    path: "/profileupdate",
    icon: <PersonOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Health Insurence",
    path: "/insurence",
    icon: <GrMoney />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
    cName: "nav-text",
  },
  {
    title: "Medical Records",
    path: "/medical_records",
    icon: <AirplayIcon />,
    cName: "nav-text",
  },
  // {
  //   title: "TDM",
  //   path: "/tdm",
  //   icon: <TimelineOutlinedIcon />,
  //   cName: "nav-text",
  // },
  {
    title: "Avalaible Time",
    path: "/avalaibletime",
    icon: <MapOutlinedIcon />,
    cName: "nav-text",
  },
  // {
  //   title: "Doctor",
  //   path: "/doctor",
  //   icon: <MapOutlinedIcon />,
  //   cName: "nav-text",
  // },
];
