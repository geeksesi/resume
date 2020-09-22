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
                <Descriptions.Item label="">Composer</Descriptions.Item>
                <Descriptions.Item label="">JavaScript</Descriptions.Item>
                <Descriptions.Item label="">NodeJs</Descriptions.Item>
                <Descriptions.Item label="">React</Descriptions.Item>
                <Descriptions.Item label="">Git</Descriptions.Item>
                <Descriptions.Item label="">Nginx</Descriptions.Item>
                <Descriptions.Item label="">Linux</Descriptions.Item>
                <Descriptions.Item label="">Mysql</Descriptions.Item>
                <Descriptions.Item label="">MongoDB</Descriptions.Item>
                <Descriptions.Item label=""> </Descriptions.Item>
                <Descriptions.Item label="">MVC</Descriptions.Item>
                <Descriptions.Item label="">OOP</Descriptions.Item>
                <Descriptions.Item label="">TDD</Descriptions.Item>
                <Descriptions.Item label="">RestApi</Descriptions.Item>
                <Descriptions.Item label="">Twig</Descriptions.Item>
                <Descriptions.Item label=""></Descriptions.Item>
            </Descriptions>
        </div>
    );
};
