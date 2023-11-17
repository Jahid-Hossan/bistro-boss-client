import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCalendarCheck, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu  w-56 rounded-box">
                    <li>
                        <NavLink to={'/dashboard/userHome'} >
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/dashboard/reservation'} >
                            <FaCalendarCheck></FaCalendarCheck>
                            Reservation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/dashboard/paymentHistory'} >
                            <FaWallet></FaWallet>
                            Payment History
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/dashboard/cart'}>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/dashboard/addReview'} >
                            <FaStar></FaStar>
                            Add Review
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/dashboard/booking'} >
                            <FaCalendar></FaCalendar>
                            My Booking
                        </NavLink>
                    </li>

                </ul>
                <div className="divider"></div>
                <ul className="menu">
                    <li>
                        <NavLink to={'/'} >
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/menu'} >
                            <FaList></FaList>
                            Menu
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/order/salad'} >
                            <FaShoppingBag></FaShoppingBag>
                            Shop
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/'}>
                            <FaEnvelope></FaEnvelope>
                            Contact

                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-full p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;