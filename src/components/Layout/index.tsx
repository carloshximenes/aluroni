import Header from "components/Header";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";

const Layout = () => {
	return (
		<>
			<Header />
			<div className={classes.container}>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
