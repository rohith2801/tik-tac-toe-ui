import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const App = () => {
    const [name, setName] = useState("");

    const history = useHistory();

    const [isSocketConnected, setIsSocketConnected] = useState(false);
    const socket = io("http://localhost:4001/ttt");

    const socketListen = () => {
        if (isSocketConnected) {
            return;
        }

        socket.on("connect", () => {
            setIsSocketConnected(true);
        });

        socket.on("tihor", (data) => {
            console.log(data);
        });
    };

    useEffect(socketListen, []);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        const id = shortid.generate();
        socket.emit("tihor", "hey, im a message " + id);

        history.push("game?id=" + id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={nameChangeHandler} />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default App;
