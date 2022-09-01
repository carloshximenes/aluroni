import { FC, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import classes from "./Sort.module.scss";

interface Props {
    items: {
        name: string;
        value: string;
    }[];
    onSelect: (option: string) => void;
    optionSelected: string;
}

const Sort: FC<Props> = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const getTitle = (key: string) => {
		let title = "Ordenar Por";
		if(key && key.trim().length !== 0) {
			const item = props.items.find(item => item.value === key);
			title = item ? item.name : title;
		}
		return title;
	};

	const stateClickHandler = () => {
		setIsOpen((prev) => !prev);
	};

	const stateBlurHandler = () => {
		setIsOpen(false);
	};

	const getClasses = () => {
		const classList: string[] = [];
		classList.push(classes.sort__options);
		isOpen && classList.push(classes["sort__options--active"]);
		return classList.join(" ");
	};

	return (
		<button
			className={classes.sort}
			onClick={stateClickHandler}
			onBlur={stateBlurHandler}
		>
			<span>{getTitle(props.optionSelected)}</span>
			{isOpen ? (
				<MdKeyboardArrowUp size={20} />
			) : (
				<MdKeyboardArrowDown size={20} />
			)}
			<div className={getClasses()}>
				{props.items.map((item) => (
					<div className={classes.sort__option} key={item.value} onClick={props.onSelect.bind(null, item.value)}>
						{item.name}
					</div>
				))}
			</div>
		</button>
	);
};

export default Sort;
