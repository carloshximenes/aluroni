import { Dispatch, FC, SetStateAction } from "react";
import { CgSearch } from "react-icons/cg";
import classes from "./Search.module.scss";

interface Props {
    value: string;
    placeholder: string;
    onChange: Dispatch<SetStateAction<string>>;
}

const Search: FC<Props> = (props) => {
	const textChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		props.onChange(event.currentTarget.value);
	};

	return (
		<div className={classes.search}>
			<input
				type="text"
				value={props.value}
				placeholder={props.placeholder}
				onChange={textChangeHandler}
			/>
            ;
			<CgSearch size={20} color="#4D4C5E" />
		</div>
	);
};

export default Search;
