import DUMMY_ITEMS from "assets/json/items.json";
import { IItem } from "interfaces/Item";
import { useNavigate } from "react-router-dom";
import Address from "./Address";
import classes from "./Home.module.scss";

const Home = () => {
	const navigate = useNavigate();

	const recommendedItems = [...DUMMY_ITEMS]
		.sort(() => 0.5 - Math.random())
		.splice(0, 3);

	const redirectToDetails = (item: IItem) => {
		navigate(`detail/${item.id}`, { state: { item } });
	};

	return (
		<section>
			<h3 className={classes.title}>Recomendações da cozinha</h3>
			<div className={classes.items_recommended}>
				{recommendedItems.map((item) => (
					<div key={item.id} className={classes.item_recommended}>
						<div className={classes.item_recommended__image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button
							className={classes.item_recommended__button}
							onClick={redirectToDetails.bind(null, item)}
						>
							Ver mais
						</button>
					</div>
				))}
			</div>
			<Address />
		</section>
	);
};

export default Home;
