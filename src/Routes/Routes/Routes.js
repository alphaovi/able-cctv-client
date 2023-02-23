import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddTechnician from "../../Pages/DashBoard/AddTechnician/AddTechnician";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import ManageTechnicians from "../../Pages/DashBoard/ManageTechnicians/ManageTechnicians";
// import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import About from "../../Pages/Home/About/About";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import CustomerServices from "../../Pages/Home/Services/CustomerServices/CustomerServices";

import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/service",
                element: <CustomerServices></CustomerServices>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment></MyAppointment>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "/dashboard/addtechnician",
                element: <AdminRoute><AddTechnician></AddTechnician></AdminRoute>
            },
            {
                path: "/dashboard/managetechnicians",
                element: <AdminRoute><ManageTechnicians></ManageTechnicians></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5001/servicesBooking/${params.id}`)
            },
        ]
    }
])

export default router; 