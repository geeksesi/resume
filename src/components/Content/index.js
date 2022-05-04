import { Col, Row } from "antd";
import React from "react";
import "./styles.css";
import Skills from "./Skills/";
import Education from "./Education/";
import Social from "./Social/";
// import Awards from "./Awards/";
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
                            از سال 94 با ساخت وبسایت آشنا شدم، روی پروژه‌های مختلف با هم‌تیمی ها و دوستان مختلف کار کردم
                            و علاقه خیلی زیادی به تیم‌سازی و آموزش افراد جدید تیم دارم. به نرم افزار آزاد اعتقاد دارم و
                            سعی می‌کنم در پروژه‌ها اپن سورس مشارک داشته‌ باشم.
                        </p>
                    </Row>
                </div>
            </Row>
            <Row className="contents">
                <Experience />
            </Row>
            <Row className="contents">
                <Col xs={{ span: 24, order: 2 }} md={{ span: 15, order: 1 }} className="right">
                    <Row className="skills">
                        <Skills />
                    </Row>
                    {/* <Row className="awards">
                        <Awards />
                    </Row> */}
                </Col>
                <Col xs={{ span: 24, order: 1 }} md={{ span: 9, order: 2 }} className="left">
                    <Row className="education">
                        <Education />
                    </Row>
                    <Row className="social">
                        <Social />
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
