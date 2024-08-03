import React from 'react';

const HabitList = ({ habits, toggleHabitCompletion, deleteHabit }) => {
    return (
        <ul>
            {habits.map(habit => (
                <li key={habit.id}>
          <span
              style={{ textDecoration: habit.isCompleted ? 'line-through' : 'none' }}
              onClick={() => toggleHabitCompletion(habit.id)}
          >
            {habit.name}
          </span>
                    <button onClick={() => deleteHabit(habit.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default HabitList;
