import React from "react";
import "./styles.css";
import { Empty, Row } from "antd";
export default () => {
    return (
        <div className="Awards">
            <Row>
                <h3>دستاورد‌ها</h3>
            </Row>
            <Row>
                <Empty />
            </Row>
        </div>
    );
};
