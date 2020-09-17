import { Row, Progress, Col, Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div>
            <Descriptions title="مهارت‌ها" column={1}>
                <Descriptions.Item label="PHP">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={90}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
                <Descriptions.Item label="NodeJs">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={40}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
