import React from "react";
import "./styles.css";
import { Row } from "antd";
export default () => {
    return (
        <div className="Experience">
            <Row>
                <h3>خلاصه فعالیت‌ها</h3>
            </Row>

            <>
                <Row>
                    <h4 className="Year">1401 تاکنون</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.jackwestin.com/">
                            JackWestin
                        </a>
                    </h4>
                </Row>
                <Row>
                    <p>برند برگزار کننده دوره‌های آموزشی و آمادگی برای آزمون پذیرش دانشکده پزشکی</p>
                </Row>
                <Row>
                    <p>
                        بهینه سازی و توسعه بخش‌های قدیمی سایت.
                        <Row className="sub-tech">
                            <small>Laravel</small>
                            <small>Redis</small>
                            <small>Mysql</small>
                            <small>
                                <a href="https://stripe.com/">Stripe</a>
                            </small>
                            <small>
                                <a href="https://nova.laravel.com/">Nova</a>
                            </small>
                            <small>TDD</small>
                        </Row>
                    </p>
                </Row>
                <Row>
                    <p>
                        ساخت و توسعه{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://jackwestin.com/flashcards/">
                            سیستم فلش‌کارت بر پایه Anki{" "}
                        </a>
                        <Row className="sub-tech">
                            <small>Laravel</small>
                            <small>Redis</small>
                            <small>Mysql</small>
                            <small>TDD</small>
                            <small>
                                <a href="https://ankiweb.net/">Anki</a>
                            </small>
                        </Row>
                    </p>
                </Row>
            </>
            <>
                <Row>
                    <h4 className="Year">1400</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://signalads.com/">
                            سیگنال
                        </a>
                    </h4>
                </Row>
                <Row>
                    <p>
                        توسعه و نگهداری -{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://virafruits.com/">
                            CRM ویرا
                        </a>{" "}
                        و{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://viratracker.ir/">
                            ویرا ترکر
                        </a>
                        .
                        <Row className="sub-tech">
                            <small>Laravel</small>
                            <small>GraphQL</small>
                            <small>Repository pattern</small>
                        </Row>
                    </p>
                </Row>
                <Row>
                    <p>
                        ساخت و توسعه{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/signalads-co">
                            وب‌سرویس پیامک سیگنال
                        </a>
                        <Row className="sub-tech">
                            <small>Laravel</small>
                            <small>RestApi</small>
                            <small>Postgresql</small>
                            <small>RabbitMQ</small>
                            <small>Redis</small>
                            <small>TDD</small>
                            <small>سند نویسی</small>
                        </Row>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1400 تاکنون</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/geeksesi">
                            آموزش برنامه‌نویسی
                        </a>
                    </h4>
                </Row>
                <Row>
                    <p>تولید محتوای ویدئویی و آموزش حضوری برنامه‌نویسی پی‌اچ‌پی</p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">از سال 1397</h4>
                    <h4 className="Title">فریلنسری و پروژه های اپن‌سورس</h4>
                </Row>
                <Row>
                    <p>
                        برخی پروژه‌های اپن‌سورس و آزادی که در انتشار آنها مشارکت داشتم.
                        <br />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/guess_emoji_telegram_bot"
                                >
                                    ربات تلگرام بازی حدس ایموجی
                                </a>
                                <Row className="sub-tech">
                                    <small>Youtube</small>
                                    <small>PHP</small>
                                    <small>Mysql</small>
                                    <small>Redis</small>
                                    <small>Phinx</small>
                                </Row>
                            </li>
                            <li>
                                توسعه و نگهداری فروشگاه{" "}
                                <a rel="noopener noreferrer" target="_blank" href="https://emall.market">
                                    Emall
                                </a>
                                <br />
                                <Row className="sub-tech">
                                    <small>Laravel</small>
                                    <small>Ajax</small>
                                    <small>Javascript</small>
                                    <small>Oracle Cloud Infrastructure</small>
                                </Row>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target="_blank" href="https://zanjani.ir">
                                    وبسایت آیت الله العظمی شبیری زنجانی
                                </a>
                                <br />
                                بازسازی سایت آیت الله زنجانی و مهاجرت از سیستم تبیان به وردپرس.
                                <Row className="sub-tech">
                                    <small>مدیریت پروژه</small>
                                    <small>Wordpress</small>
                                    <small>Javascript</small>
                                    <small>PHP</small>
                                </Row>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target="_blank" href="https://gitlab.com/payzos">
                                    Payzos
                                </a>
                                <br />
                                سرویس درگاه‌پرداختی آزاد و متن‌باز برای شبکه Tezos است و برای دارندگان فروشگاه های مجازی
                                امکان دریافت وجه از طریق این رمزارز را فراهم می کند.
                                <Row className="sub-tech">
                                    <small>RestApi</small>
                                    <small>PHP</small>
                                    <small>Mysql</small>
                                    <small>Wordpress</small>
                                </Row>
                            </li>
                        </ul>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1396</h4>
                    <h4 className="Title">
                        <a href="https://ermile.com/" rel="noopener noreferrer" target="_blank">
                            Ermile
                        </a>
                    </h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">کارآموز برنامه‌نویسی بک‌اند</h5>
                </Row>
                <Row>
                    <p>
                        برخی مهارت‌هایی که در این دوره کارآموزی آموختم
                        <br />
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Ermile/PHP-URL">
                                    ساختار شی‌گرایی و حل مسئله
                                </a>
                            </li>
                            <li>آشنایی با poedit و وب سایت های چند‌زبانه</li>
                            <li>آشنایی با وب‌سرویس nginx و نگهداری و کانفیگ سرور </li>
                        </ul>
                    </p>
                </Row>
            </>
        </div>
    );
};
