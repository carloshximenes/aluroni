import { ReactComponent as NotFoundImage } from "assets/image/not_found.svg";
import { useNavigate } from "react-router-dom";
import classes from "./NotFound.module.scss";

const NotFound = () => {
	const nav = useNavigate();

	const backButtonHandler = () => {
		nav(-1);
	};

	return (
		<div className={classes.container}>
			<div className={classes.back}>
				<button onClick={backButtonHandler}>{"< Voltar"}</button>
			</div>
			<NotFoundImage />
		</div>
	);
};

export default NotFound;
