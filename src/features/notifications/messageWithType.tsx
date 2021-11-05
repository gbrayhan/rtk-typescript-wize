import React from 'react'
import {Notification, Placeholder} from "rsuite";

export type MessageType = 'info' | 'success' | 'warning' | 'error';
export type PlacementType = "topStart" | "topCenter" | "bottomCenter" | "topEnd" | "bottomStart" | "bottomEnd" | undefined;


export function message ({type, } :{type :MessageType}) {
    return (
        <Notification type={type} header={type} closable>
            <Placeholder.Paragraph  rows={3} />
        </Notification>
    );

}
