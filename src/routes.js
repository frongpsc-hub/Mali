/*!

=========================================================
* Paper Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import รายงาน from "views/pages/รายงาน.jsx"
import คำถามที่พบบ่อย from "views/pages/คำถามที่พบบ่อย.jsx"
import Buttons from "views/components/Buttons.jsx";
//import Calendar from "views/Calendar.jsx";
import Charts from "views/Charts.jsx";
import Dashboard from "views/Dashboard.jsx";
import ExtendedForms from "views/forms/ExtendedForms.jsx";
import ExtendedTables from "views/tables/ExtendedTables.jsx";
import FullScreenMap from "views/maps/FullScreenMap.jsx";
import GoogleMaps from "views/maps/GoogleMaps.jsx";
import GridSystem from "views/components/GridSystem.jsx";
import Icons from "views/components/Icons.jsx";
import LockScreen from "views/pages/LockScreen.jsx";
import Login from "views/pages/Login.jsx";
import Notifications from "views/components/Notifications.jsx";
import Panels from "views/components/Panels.jsx";
import ReactTables from "views/tables/ReactTables.jsx";
import Register from "views/pages/Register.jsx";
import RegularForms from "views/forms/RegularForms.jsx";
import RegularTables from "views/tables/RegularTables.jsx";
import SweetAlert from "views/components/SweetAlert.jsx";
import Timeline from "views/pages/Timeline.jsx";
import Typography from "views/components/Typography.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import ValidationForms from "views/forms/ValidationForms.jsx";
import VectorMap from "views/maps/VectorMap.jsx";
import Widgets from "views/Widgets.jsx";
import Wizard from "views/forms/Wizard.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "หน้าหลัก",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "การจัดการผู้ใช้งาน",
    icon: "nc-icon nc-badge",
    state: "pagesCollapse",
    path: "/timeline",
    component: Timeline,
    layout: "/admin",
    views: [
      {
        path: "/timeline",
        name: "Timeline",
        mini: "T",
        component: Timeline,
        layout: "/admin"
      },
      {
        path: "/login",
        name: "Login",
        mini: "L",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        mini: "R",
        component: Register,
        layout: "/auth"
      },
      {
        path: "/lock-screen",
        name: "LockScreen",
        mini: "LS",
        component: LockScreen,
        layout: "/auth"
      },
      {
        path: "/user-profile",
        name: "UserProfile",
        mini: "UP",
        component: UserProfile,
        layout: "/admin"
      }
    ]
  },
  {
    
    name: "การแจ้งรายงานความเสียหาย",
    icon: "nc-icon nc-single-copy-04",
    path: "/regular-table",
    component: RegularTables,
    layout: "/admin"
    /*views: [
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",
        component: Typography,
        layout: "/admin"
      }
    ]*/
  },
  {
    
    name: "รายงาน",
    path: "/รายงาน",
    icon: "nc-icon nc-chart-bar-32",
    state: "formsCollapse",
    component: รายงาน,
    layout: "/admin"
   
  },
  {
    collapse: true,
    name: "แผนที่",
    icon: "nc-icon nc-map-big",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
  
  {
    
    //collapse: true,
    path: "/คำถามที่พบบ่อย",
    layout: "/admin",
    name: "คำถามที่พบบ่อย",
    icon: "nc-icon nc-support-17",
    state: "mapsCollapse",
    component: คำถามที่พบบ่อย
    /*views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap,
        layout: "/admin"
      }
    ]*/
  },
  {
    path: "/widgets",
    name: "คู่มือเข้าใช้งาน",
    icon: "nc-icon nc-alert-circle-i",
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "ติดต่อเรา",
    icon: "nc-icon nc-email-85",
    component: Charts,
    layout: "/admin"
  },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "nc-icon nc-calendar-60",
  //   component: Calendar,
  //   layout: "/admin"
  // }
];

export default routes;
