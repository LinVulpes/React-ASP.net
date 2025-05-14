import { useEffect, useState } from 'react';
import PizzaList from './PizzaList';

const term = "Pizza";

function Pizza() {
    const [data, setData] = useState([]);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        fetchPizzaData(); 
    }, []);
    
    const fetchPizzaData = () => {
        // Simulate fetching data from an API
        const pizzaData = [
            { id: 1, name: 'Margherita', description: 'Classic pizza with tomato sauce and mozzarella cheese' },
            { id: 2, name: 'Pepperoni', description: 'Spicy pepperoni with mozzarella cheese' },
            { id: 3, name: 'Vegetarian', description: 'Loaded with fresh vegetables and mozzarella cheese' },
            { id: 4, name: 'BBQ Chicken', description: 'Grilled chicken with BBQ sauce and red onions' },
            { id: 5, name: 'Hawaiian', description: 'Ham and pineapple on a cheesy base' }
        ];
        setData(pizzaData);
        setMaxId(Math.max(...pizzaData.map(pizza => pizza.id)));
    };

    const handleCreate = (item) => {
        // Simulate creating item on API
        const newItem = { ...item, id: maxId + 1 };
        setData([...data, newItem]);
        setMaxId(maxId + 1);
    };
    const handleUpdate = (item) => {
        // Simulate updating item on API
        const updatedData = data.map(pizza => pizza.id === item.id ? item : pizza);
        setData(updatedData);
    };

    const handleDelete = (id) => {
        // Simulate deleting item on API
        const updatedData = data.filter(pizza => pizza.id !== id);
        setData(updatedData);
    };

    return (
        <div>
            <h1>List</h1>
            <PizzaList
                name={term}
                data={data}
                onCreate={handleCreate}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </div>
    );
}
export default Pizza;