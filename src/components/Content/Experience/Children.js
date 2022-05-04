import React from "react";
import { List } from "antd";

export default ({ data }) => {
    return (
        <List
            size="small"
            header={<h1>Projects: </h1>}
            className="children"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        className="exp"
                        title={<a href={item.url}>{item.title}</a>}
                        description={"Tech used: " + item.subTech.join(", ")}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    );
};
