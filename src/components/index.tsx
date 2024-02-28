import React from "react";

import * as UI from "./UI.styled";

interface IBtnProps {
    varient?: "primary" | "secondary" | "danger";
    childer?: React.ReactNode;
    isDisabled?: boolean;
}

export default function Button({varient, isDisabled, children}: IBtnProps ) {
    if (varient === "secondary") {
        return <UI.Secondary isDisabled={isDisabled}>{children}</UI.Secondary>;
    }
    if (varient === "danger") {
        return <UI.Danger isDisabled={isDisabled}>{children}</UI.Danger>;
    }
};