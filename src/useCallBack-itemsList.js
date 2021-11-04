import React, {useState, useEffect} from 'react';

export default function ItemsList({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = getItems();
        setItems(newItems);
        // this log will be triggered(and getItems() too) when we change color!!!)
        // why? generateItems function create every time when rerender appear -> useEffect will triggered
        console.log('get Items change!')
    }, [getItems]);
    return (
        <ul>
            {items.map((el) => <li key={el}>{el}</li>
            )}
        </ul>
    )
}
