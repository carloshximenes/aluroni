import { ReactComponent as Logo } from "assets/image/logo.svg";
import DUMMY_FILTERS from "assets/json/filters.json";
import DUMMY_ITEMS from "assets/json/items.json";
import DUMMY_SORT from "assets/json/sort.json";
import { IItem } from "interfaces/Item";
import { useEffect, useReducer, useState } from "react";
import Filters from "./Filters";
import Items from "./Items";
import classes from "./Menu.module.scss";
import Search from "./Search";
import Sort from "./Sort";

interface ItemsReducerAction {
    type: string;
    payload: IItem[];
}

const itemsReducer = (state: IItem[], action: ItemsReducerAction) => {
    const { type, payload } = action;
    console.log(state);    
    switch (type) {
        case "porcao":
            return [...state].sort((a, b) => (a.size > b.size ? 1 : -1));
        case "qtd_pessoas":
            return [...state].sort((a, b) => (a.serving > b.serving ? 1 : -1));
        case "preco":
            return [...state].sort((a, b) => (a.price > b.price ? 1 : -1));
        case "filter":
            return [...payload];
        default:
            return [...state];
    }
};

const Menu = () => {
    const [searchText, setSearchText] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [filterOption, setFilterOption] = useState(0);
    const [items, dispatchItems] = useReducer(itemsReducer, DUMMY_ITEMS);
    // const [items, setItems] = useState(DUMMY_ITEMS);

    useEffect(() => {
        const searchValidation = (title: string) => {
            const regex = new RegExp(searchText, "i");
            return regex.test(title);
        };

        const filterValidation = (id: number) => {
            return filterOption > 0 ? filterOption === id : true;
        };

        let filteredItems = DUMMY_ITEMS.filter(
            (item) =>
                searchValidation(item.title) &&
                filterValidation(item.category.id)
        );

        dispatchItems({ type: "filter", payload: filteredItems });
    }, [searchText, filterOption]);

    useEffect(() => {
        dispatchItems({ type: sortOption, payload: [] });
    }, [sortOption]);

    const sortOptionHandler = (option: string) => {
        setSortOption(option);
    };

    const filterSelectHandler = (id: number) => {
        setFilterOption(id);
    };

    return (
        <>
            <main>
                <nav className={classes.container}>
                    <Logo />
                </nav>
                <header className={classes.header}>
                    <div className={classes.header__text}>
                        A casa do código e da massa
                    </div>
                </header>
                <section className={classes.menu}>
                    <h3 className={classes.menu__title}>Cardápio</h3>
                    <Search
                        value={searchText}
                        placeholder="Buscar"
                        onChange={setSearchText}
                    />
                    <div className={classes.menu__filters}>
                        <Filters
                            items={DUMMY_FILTERS}
                            onFilterSelectHandler={filterSelectHandler}
                        />
                        <Sort
                            items={DUMMY_SORT}
                            onSelect={sortOptionHandler}
                            optionSelected={sortOption}
                        />
                    </div>
                    <Items items={items} />
                </section>
            </main>
        </>
    );
};

export default Menu;
