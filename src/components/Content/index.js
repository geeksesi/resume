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
                            از سال 94 علاقه‌زیادی به طراحی‌سایت و بازیسازی پیداکردم و با یادگرفتن
                            html-css و وردپرس، از سن کم شروع کردم به ساختن سایت و یادگرفتن، از سال
                            96 شروع به برنامه‌نویسی با زبان php کردم و بعد از چندماه به صورت کارآموز
                            خدمت شرکت ارمایل بودم که کمکم کرد نقش و مسیر خودم رو توی برنامه‌نویسی
                            پیداکنم، از همون زمان مسیر برنامه‌س‌نویسی سمت سرور رو پیش گرفتم، با
                            python, php, nodejs کار کردم و سعی کردم توی گروه‌های دانشجویی روی
                            پروژه‌های متنوع تجربه کسب کنم.
                        </p>
                    </Row>
                </div>
            </Row>
            <Row className="contents">
                <Col xs={{ span: 24, order: 2 }} md={{ span: 9, order: 1 }} className="right">
                    <Row className="skills">
                        <Skills />
                    </Row>
                    <Row className="education">
                        <Education />
                    </Row>
                    <Row className="social">
                        <Social />
                    </Row>
                    {/* <Row className="awards">
                        <Awards />
                    </Row> */}
                </Col>
                <Col xs={{ span: 24, order: 1 }} md={{ span: 15, order: 2 }} className="left">
                    <Experience />
                </Col>
            </Row>
        </div>
    );
};
