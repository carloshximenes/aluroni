import { IItem } from "interfaces/Item";
import { FC } from "react";
import Item from "./Item";
import classes from "./Items.module.scss";

const Items: FC<{ items: IItem[] }> = (props) => {
    return (
        <div className={classes.items}>
            {props.items &&
                props.items.length > 0 &&
                props.items.map((item) => <Item key={item.id} {...item} />)}
        </div>
    );
};

export default Items;
