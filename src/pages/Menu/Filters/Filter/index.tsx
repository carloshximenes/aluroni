import { FC } from "react";
import classes from "./Filter.module.scss";

const Filter: FC<{
    id: number;
    label: string;
    isSelected: boolean;
    onClick: (idSelected: number) => void;
}> = (props) => {
    const getClasses = () => {
        let listClasses: string[] = [];
        listClasses.push(classes.filter);
        props.isSelected && listClasses.push(classes["filter--active"]);
        return listClasses.join(" ");
    };

    return (
        <button
            className={getClasses()}
            onClick={props.onClick.bind(null, props.id)}
        >
            {props.label}
        </button>
    );
};

export default Filter;
