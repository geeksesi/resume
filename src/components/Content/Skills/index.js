import { Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div className="Skills">
            <Descriptions title="مهارت‌ها" column={3}>
                <Descriptions.Item label="">
                    <bold>PHP</bold>
                </Descriptions.Item>
                <Descriptions.Item label="">Laravel</Descriptions.Item>
                <Descriptions.Item label="">React</Descriptions.Item>
                <Descriptions.Item label="">Mysql</Descriptions.Item>
                <Descriptions.Item label="">Postgresql</Descriptions.Item>
                <Descriptions.Item label=""></Descriptions.Item>
                <Descriptions.Item label="">Git</Descriptions.Item>
                <Descriptions.Item label="">Docker</Descriptions.Item>
                <Descriptions.Item label="">Linux</Descriptions.Item>
                <Descriptions.Item label="">Redis</Descriptions.Item>
                <Descriptions.Item label="">RabbitMQ</Descriptions.Item>
                <Descriptions.Item label=""> </Descriptions.Item>
                <Descriptions.Item label="">RestApi</Descriptions.Item>
                <Descriptions.Item label="">GraphQL</Descriptions.Item>
                <Descriptions.Item label=""></Descriptions.Item>
            </Descriptions>
        </div>
    );
};
