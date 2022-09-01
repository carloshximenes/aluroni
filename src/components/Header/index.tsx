import { ReactComponent as Logo } from "assets/image/logo.svg";
import DUMMY_NAVBAR from "assets/json/navbar.json";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
	return (
		<>
			<nav className={classes.navbar}>
				<Logo />
				<ul className={classes.navbar__list}>
					{DUMMY_NAVBAR.map((nav) => (
						<li key={nav.to} className={classes.navbar__link}>
							<Link to={nav.to}>{nav.label}</Link>
						</li>
					))}
				</ul>
			</nav>
			<header className={classes.header}>
				<div className={classes.header__text}>
					A casa do código e da massa
				</div>
			</header>
		</>
	);
};

export default Header;
