import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import {EnterPost} from "../EnterPost/EnterPost";
import {PayAndConfirm} from "../PayAndConfirm/PayAndConfirm";
import {SelectType} from "../SelectType/SelectType";
import {Success} from "../Success/Success";
import {ViewAll} from "../ViewAll/ViewAll";

type TodayProps = {
    evmAddress: string
}

export function TodayRouter(props: TodayProps) {
    const {evmAddress} = props
    return (
            <Routes>
                <Route path="" element={<SelectType evmAddress={evmAddress} />} />
                <Route path="enterpost/:type" element={<EnterPost />} />
                <Route path="payandconfirm" element={<PayAndConfirm />} />
                <Route path="success" element={<Success />} />
                <Route path="viewall" element={<ViewAll />} />
            </Routes>
    );
}