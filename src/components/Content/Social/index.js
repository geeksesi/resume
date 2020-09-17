import { Descriptions } from "antd";
import React from "react";
import "./styles.css";

export default () => {
    return (
        <div>
            <Descriptions title="شبکه‌های اجتماعی" column={1}>
                <Descriptions.Item label="Twitter">
                    <a href="https://twitter.com/geeksesi">@geeksesi</a>
                </Descriptions.Item>
                <Descriptions.Item label="GitLab">
                    <a href="https://gitlab.com/geeksesi">geeksesi</a>
                </Descriptions.Item>
                <Descriptions.Item label="GitHub">
                    <a href="https://github.com/geeksesi">geeksesi</a>
                </Descriptions.Item>
                <Descriptions.Item label="Telegram">
                    <a href="https://t.me/geeksesi">@geeksesi</a>
                </Descriptions.Item>
                <Descriptions.Item label="Blog">
                    <a href="https://geeksesi.ir">وبلاگ محمد جواد قاسمی</a>
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};
