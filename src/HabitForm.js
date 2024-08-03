import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
    const [habitName, setHabitName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (habitName.trim()) {
            addHabit(habitName);
            setHabitName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                placeholder="Enter new habit"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default HabitForm;
