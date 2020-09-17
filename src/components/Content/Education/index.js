import { Descriptions, Row } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Education">
            <Descriptions title="تحصیلات" column={1} layout="vertical">
                <Descriptions.Item label="کارشناسی مهندسی کامپیوتر">
                    دانشگاه آزاد اسلامی واحد قم (از مهر 97)
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
