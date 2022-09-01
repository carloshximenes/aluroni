import { IItem } from "interfaces/Item";
import { FC } from "react";
import classes from "./Item.module.scss";

const Item: FC<IItem> = (props) => {
    const {
        photo,
        title,
        description,
        category: { label, value },
        size,
        serving,
        price,
    } = props;

    const getLabelClasses = () => {
        let classList: string[] = [];
        classList.push(classes.item__type);
        let classByLabel = classes[`item__type__${value}`];
        classList.push(classByLabel);
        return classList.join(" ");
    };

    return (
        <div className={classes.item}>
            <div className={classes.item__image}>
                <img alt={title} src={photo} />
            </div>
            <div className={classes.item__description}>
                <div className={classes.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={classes.item__tags}>
                    <div className={getLabelClasses()}>{label}</div>
                    <div className={classes.item__portion}>{size}g</div>
                    <div className={classes.item__qty}>
                        Serve {serving} pessoa(s)
                    </div>
                    <div className={classes.item__price}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
