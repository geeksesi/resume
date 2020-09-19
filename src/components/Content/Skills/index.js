import { Row, Progress, Col, Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Skills">
            <Descriptions title="مهارت‌ها" column={1}>
                <Descriptions.Item label="PHP">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={80}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
                <Descriptions.Item label="Laravel">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={30}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
                <Descriptions.Item label="Composer">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={70}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
                <Descriptions.Item label="JavaScript">
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
                <Descriptions.Item label="React">
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
                <Descriptions.Item label="Git">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={60}
                        steps={30}
                        size="small"
                        strokeColor="#E07A5F"
                        trailColor="#F2CC8F"
                    />
                </Descriptions.Item>
                <Descriptions.Item label="TDD">
                    <Progress
                        showInfo={false}
                        type="line"
                        percent={30}
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
