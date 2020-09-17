import { Col, Row } from "antd";
import React from "react";
import "./styles.css";
import Skills from "./Skills/";
import Education from "./Education/";
import Social from "./Social/";
import Awards from "./Awards/";
import Experience from "./Experience/";

export default () => {
    return (
        <div className="Content">
            <Row className="about">
                <div>
                    <Row>
                        <h2>معرفی</h2>
                    </Row>
                    <Row>
                        <p>
                            من محمد جواد قاسمی، متولد مرداد 1379 شهر قم، دانشجوی رشته مهندسی
                            کامپیوتر و برنامه‌نویس back-end، علاقمند به کار گروهی و چالش‌های مربوط
                            به شبکه، متمرکز بر php، آشنا به nodeJs و برنامه نویسی front-end، طرفدار
                            نرم افزار آزاد و عضو کوچکی از این جامعه هستم.
                        </p>
                    </Row>
                </div>
            </Row>
            <Row className="contents">
                <Col md={{ span: 9 }} className="right">
                    <Row className="skills">
                        <Skills />
                    </Row>
                    <Row className="education">
                        <Education />
                    </Row>
                    <Row className="social">
                        <Social />
                    </Row>
                    <Row className="awards">
                        <Awards />
                    </Row>
                </Col>
                <Col md={{ span: 15 }} className="left">
                    <Experience />
                </Col>
            </Row>
        </div>
    );
};
