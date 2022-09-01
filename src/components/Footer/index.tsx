import { ReactComponent as Logo } from "assets/image/logo.svg";
import classes from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Logo />
		</footer>
	);
};

export default Footer;
