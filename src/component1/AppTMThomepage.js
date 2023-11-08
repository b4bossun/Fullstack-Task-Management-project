import React, { useState } from "react";
import './AppTMThomepage.css'
import profileicon from '../assetsandimages/homepage/profileicon.png'
import { Link } from 'react-router-dom'


const AppTMThomepage = () => {

    const [input, setInput] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [list, setList] = useState([]);
    const [editText, setEditText] = useState("");
    const [editingId, setEditingId] = useState(null);

    const addTodo = () => {
        if (input.trim() === "" || selectedDate === "") {
            // Prevent adding empty todos or todos without a date
            return;
        }

        const newTodo = {
            id: Math.random(),
            todo: input,
            date: selectedDate,
            isEditing: false
        };

        setList([...list, newTodo]);
        setInput("");
        setSelectedDate("");
    };

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

    const handleEdit = (id) => {
        const updatedList = list.map((todo) =>
            todo.id === id ? { ...todo, isEditing: true } : todo
        );
        setList(updatedList);
        setEditingId(id);
        const todoToEdit = list.find((todo) => todo.id === id);
        setEditText(todoToEdit.todo);
    };

    const handleSave = (id) => {
        const updatedList = list.map((todo) =>
            todo.id === id ? { ...todo, todo: editText, isEditing: false } : todo
        );
        setList(updatedList);
        setEditingId(null);
    };

    const handleCancelEdit = (id) => {
        const updatedList = list.map((todo) =>
            todo.id === id ? { ...todo, isEditing: false } : todo
        );
        setList(updatedList);
        setEditingId(null);
    };

    const homepagediv = {
        backgroundColor: 'rgb(237, 112, 98)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '100vh',
        width: '100vw',
        color: 'white',
        position: 'fixed'
    };
    // function AppTMThomepage() {
    return (
        <>
            <div className='homepagediv' style={homepagediv}>
                <nav className='homepagenavdiv'>
                    <div className='logo'>QuickSchedule</div>
                    <button id='statbutton' className='weeklystat' >
                        <Link to='/apptmtstatisticpage' className='hbuttonlink' >
                            Weekly Stat
                        </Link>
                    </button>
                    <button id='statbutton' className='monthlystat' >
                        <Link to='/apptmtstatisticpage' className='hbuttonlink' >
                            Monthly Stat
                        </Link>
                    </button>
                    <div className='profileicondiv'>
                        <img src={profileicon} alt="Profileicon" className="profileicon" />
                    </div>
                    {/* <button className='profile'> */}
                    {/* <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul> */}
                    {/* </button> */}
                </nav>
                <div className='taskorganizerdiv'>
                    <div className='homepageinputdiv'>
                        <input id='homepageinputspace' className='email inputspace1' type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)} placeholder="  enter task" />
                        <input value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)} id='homepageinputspace' className='password inputspace2' type="date" />
                        <button onClick={() => addTodo(input)} className='createbutton'>
                            Create
                        </button>
                    </div>
                    <div class="taskmanagementdiv">
                        <ul className="list">
                            {list.map((todo) => (
                                <li className="li" key={todo.id}>
                                    {todo.isEditing ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                            />
                                            <button onClick={() => handleSave(todo.id)}>Save</button>
                                            <button onClick={() => handleCancelEdit(todo.id)}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            {`${todo.todo} - ${todo.date}`}
                                            <button className="listbutton" onClick={() => deleteTodo(todo.id)}>
                                                Done
                                            </button>
                                            <button className="listbutton" onClick={() => handleEdit(todo.id)}>
                                                Edit
                                            </button>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppTMThomepage