import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

type Item = {
    name: string;
    rarity: string;
};

const App: React.FC = () => {
    const [lastItem, setLastItem] = useState<Item | null>(null);

    useEffect(() => {
        socket.on("caseResult", (data: Item) => {
            setLastItem(data);
        });

        return () => {
            socket.off("caseResult");
        };
    }, []);

    const handleOpenCase = () => {
        socket.emit("openCase");
    };

    return (
        <div className="mt-[100px] text-center">
            <h1 className="mb-10 th text-center text-2xl">เกมสุ่มของขวัญ</h1>
            <button onClick={handleOpenCase} className="px-5 py-2 text-sm rounded-lg text-white bg-gradient-to-tr from-blue-600 to-blue-200">
                เริ่มการสุ่ม
            </button>
            <br />

            {lastItem && (
                <div
                  className={`bg-gradient-to-tr from-zinc-100 to-zinc-200 rounded-xl shadow mt-5 p-5 inline-block ${
                    lastItem.rarity === "legendary" ? "bg-gradient-to-tr from-yellow-500 to-yellow-300" : "bg-white"
                  }`}
                >
                    <h2>🎉 คุณได้ของ {lastItem.name} 🎉</h2>
                    <p>ระดับความหายาก {lastItem.rarity}</p>
                </div>
            )}
        </div>
    );
};

export default App;