import {Input, InputGroup} from 'rsuite'
import {Search} from "@rsuite/icons";
import React from "react";

const styles = {
    marginBottom: 10,
};

export type CustomInputProps = {
    placeholder: string | undefined,
    onChange: (value: any, event: React.SyntheticEvent) => void
    size?: "xs" | "sm" | "md" | "lg"
}


export const CustomInputGroup = ({placeholder, onChange, size}: CustomInputProps) => (
    <InputGroup style={styles}>
        <InputGroup.Addon>
            <Search/>
        </InputGroup.Addon>
        <Input placeholder={placeholder} onChange={onChange} size={size ?? "md"}/>
    </InputGroup>
);
