import React from "react";
import "./styles.css";
import { Avatar, List, Row } from "antd";
import data from "./data";
import Children from "./Children";

export default () => {
    return (
        <div className="Experience">
            <Row className="header">
                <h3>Experiences</h3>
            </Row>

            <>
                <List
                    size="large"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                className="exp"
                                avatar={<Avatar className="avatar" src={item.avatar} />}
                                title={
                                    <>
                                        <a href={item.url}>{item.title}</a>
                                        <small className="year">{item.year}</small>
                                    </>
                                }
                                description={item.description}
                            />
                            {item.content}
                            {item.children && <Children data={item.children} />}
                        </List.Item>
                    )}
                />
            </>
        </div>
    );
};
