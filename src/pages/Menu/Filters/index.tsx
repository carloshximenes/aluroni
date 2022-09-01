import { FC, useState } from "react";
import Filter from "./Filter";
import classes from "./Filters.module.scss";

interface Props {
	items: { id: number; label: string }[];
	onFilterSelectHandler: (id: number) => void;
}

const Filters: FC<Props> = (props) => {
	const [filter, setFilter] = useState<number | null>(null);

	const selectFilterHandler = (idSelected: number) => {
		setFilter(idSelected);
		props.onFilterSelectHandler(idSelected);
	};

	return (
		<div className={classes.filters}>
			{props.items &&
				props.items.length > 0 &&
				props.items.map((item) => (
					<Filter
						key={item.id}
						id={item.id}
						label={item.label}
						isSelected={filter === item.id}
						onClick={selectFilterHandler}
					/>
				))}
		</div>
	);
};

export default Filters;
