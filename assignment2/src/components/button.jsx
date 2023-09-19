import React from "react";
import { Button } from "antd"

const MyButton = (props) => {
    return (
        <>
            <Button> {props.name} </Button>
        </>
    )
}

export default MyButton;