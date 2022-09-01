import nossaCasa from "assets/image/address/nossa_casa.png";
import classes from "./Address.module.scss";

const Address = () => {
	return (
		<>
			<h3 className={classes.home__title}>Nossa casa</h3>
			<div className={classes.home}>
				<img src={nossaCasa} alt="Casa do aluroni" />
				<div className={classes.home__address}>
					Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</>
	);
};

export default Address;
