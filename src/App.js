import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const App = (props) => {
    const [isSocketConnected, setIsSocketConnected] = useState(false);
    const socket = io("http://localhost:4001");

    const socketListen = () => {
        if (isSocketConnected) {
            return;
        }

        socket.on("connect", () => {
            setIsSocketConnected(true);
        });

        socket.on("disconnect", () => {
            console.warn("im disconnected");
        });

        socket.emit("tihor", "hey, im a message");
    };

    useEffect(socketListen, []);

    return (
        <>
            <div>Rohith - TIHOR</div>
        </>
    );
};

export default App;
