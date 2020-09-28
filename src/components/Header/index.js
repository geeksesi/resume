import { Col, Descriptions, Row } from "antd";
import React from "react";
import myPic from "../../assets/img/me.jpeg";
import "./styles.css";

export default () => {
    return (
        <div className="Headers">
            <Row align="middle">
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 20, order: 1 }}>
                    <Row>
                        <h1>محمد جواد قاسمی</h1>
                    </Row>
                    <Row>
                        <h4>برنامه نویس بک‌اند</h4>
                    </Row>
                    <Row className="social">
                        <Descriptions column={{ xs: 1, md: 2 }}>
                            <Descriptions.Item label="شماره تماس">09100101543</Descriptions.Item>
                            <Descriptions.Item label="ایمیل">Geeksesi@gmail.com</Descriptions.Item>
                        </Descriptions>
                    </Row>
                </Col>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 4, order: 2 }} className="logo">
                    <center>
                        <img src={myPic} alt="Mohammad Javad Ghasemy" />
                    </center>
                </Col>
            </Row>
        </div>
    );
};
