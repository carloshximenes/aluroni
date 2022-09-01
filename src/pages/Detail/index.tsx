import DUMMY_ITEMS from "assets/json/items.json";
import classNames from "classnames";
import NotFound from "pages/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./Detail.module.scss";

const Detail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const item = DUMMY_ITEMS.find((item) => item.id === Number(id));

	if (!item) {
		return <NotFound />;
	}

	const buttonBackClickHandler = () => {
		navigate(-1);
	};

	return (
		<>
			<button className={classes.back} onClick={buttonBackClickHandler}>
				{"< Voltar"}
			</button>
			<section className={classes.container}>
				<h1 className={classes.title}>{item.title}</h1>
				<div className={classes.image}>
					<img src={item.photo} alt={item.title} />
				</div>
				<div className={classes.content}>
					<p className={classes.content__description}>
						{item.description}
					</p>
					<div className={classes.tags}>
						<div
							className={classNames({
								[classes.tags__type]: true,
								[classes[`tags__type__${item.category.value}`]]:
									true,
							})}
						>
							{item.category.label}
						</div>
						<div className={classes.tags__size}>{item.size}g</div>
						<div className={classes.tags__qty}>
							Serve {item.serving} pessoa{" "}
							{item.serving == 1 ? "" : "s"}
						</div>
						<div className={classes.tags__price}>
							R$ {item.price.toFixed(2)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Detail;
