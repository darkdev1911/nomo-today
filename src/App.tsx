// src/App.tsx
import React, {useEffect, useState} from 'react';
import './App.less';
import {TodayRouter} from "./components/TodayRouter/TodayRouter";
import {BrowserRouter} from "react-router-dom";
import {nomo} from "nomo-webon-kit";

const App: React.FC = () => {
    const [evmAddress, setEvmAddress] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const result = await nomo.getEvmAddress();
            setEvmAddress(result);
        }
        fetchData();
    });
    return (
        <div className={"content-container"}>
            <BrowserRouter>
                <TodayRouter evmAddress={evmAddress}></TodayRouter>
            </BrowserRouter>
        </div>
    );
};

export default App;
