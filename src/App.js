import React, { useState, useEffect } from 'react';
import HabitList from './HabitList';
import HabitForm from './HabitForm';

const App = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits'));
    if (storedHabits) {
      setHabits(storedHabits);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = { id: Date.now(), name, isCompleted: false };
    setHabits([...habits, newHabit]);
  };

  const toggleHabitCompletion = (id) => {
    setHabits(habits.map(habit =>
        habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
    ));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
      <div className="App">
        <h1>Habit Tracker</h1>
        <HabitForm addHabit={addHabit} />
        <HabitList
            habits={habits}
            toggleHabitCompletion={toggleHabitCompletion}
            deleteHabit={deleteHabit}
        />
      </div>
  );
};

export default App;
