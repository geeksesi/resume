import React from "react";
import "./styles.css";
import { Row } from "antd";
export default () => {
    return (
        <div className="Experience">
            <Row>
                <h3>تجربیات</h3>
            </Row>
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
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/Ermile/PHP-URL"
                                >
                                    ساختار شی‌گرایی و حل مسئله
                                </a>
                            </li>
                            <li>آشنایی با poedit و وب سایت های چند‌زبانه</li>
                            <li>آشنایی با وب‌سرویس nginx و نگهداری و کانفیگ سرور </li>
                        </ul>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1397 - 1398</h4>
                    <h4 className="Title">فریلنسری</h4>
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
                                    href="https://github.com/geeksesi/wp-zilon-woocommerce"
                                >
                                    افزونه وردپرس درگاه پرداخت زیلون
                                </a>
                                <Row className="sub-tech">
                                    <small>Wordpress</small>
                                    <small>MVC</small>
                                    <small>RestApi</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/LeaderBoardApi"
                                >
                                    سرویس لیدربورد برای بازی های رقابتی{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>PHP</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/QIAU-tg-bot-manager"
                                >
                                    ربات cli تلگرام مدیریت اعضای کانال و گروه برای دانشگاه آزاد
                                    اسلامی قم
                                </a>
                                <Row className="sub-tech">
                                    <small>Python</small>
                                    <small>OOP</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/s-mtz/mangadl_tbot"
                                >
                                    ربات تلگرام دانلود مانگا و تبدیل عکس به pdf
                                </a>
                                <Row className="sub-tech">
                                    <small>PHP</small>
                                    <small>MVC</small>
                                    <small>OOP</small>
                                    <small>Composer</small>
                                    <small>TDD</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/kmtqom/search-book-by-isbn"
                                >
                                    جستجوی اطلاعات کتاب براساس شابک کتاب
                                </a>
                                <Row className="sub-tech">
                                    <small>ComposerLib</small>
                                    <small>TDD</small>
                                    <small>Scammer</small>
                                </Row>
                            </li>
                        </ul>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1399</h4>
                    <h4 className="Title">
                        سرویس پرداخت{" "}
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://gitlab.com/payzos"
                        >
                            Payzos
                        </a>
                    </h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">مدیرفنی و برنامه‌نویس بک‌اند</h5>
                </Row>
                <Row>
                    <p>
                        Payzos سرویس درگاه‌پرداختی آزاد و متن‌باز برای شبکه Tezos است و برای
                        دارندگان فروشگاه های مجازی امکان دریافت وجه از طریق این رمزارز را فراهم می
                        کند.
                    </p>
                    <p>
                        وظیفه اصلی این سرویس ارائه خدمات پرداخت برای فروشگاه‌ساز های
                        <br />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/wp-payzos-payment-woocommerce"
                                >
                                    WooCommerce{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>RestApi</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-payment-opencart"
                                >
                                    OpenCart{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>RestApi</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-magento"
                                >
                                    Magento{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>Composer</small>
                                    <small>MVC</small>
                                    <small>OOP</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-prestashop"
                                >
                                    PrestaShop{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>RestApi</small>
                                </Row>
                            </li>
                        </ul>
                        می باشد.
                    </p>
                </Row>
                <Row>
                    <p>
                        دیگر مخازن آزاد پروژه
                        <br />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos"
                                >
                                    Backend{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>MVC</small>
                                    <small>Composer</small>
                                    <small>RestApi</small>
                                    <small>FastRoute</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-frontend"
                                >
                                    Frontrnd{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>React</small>
                                </Row>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/conseil-php"
                                >
                                    ConseilPHP{" "}
                                </a>
                                <Row className="sub-tech">
                                    <small>ComposerLib</small>
                                    <small>PHPSpec</small>
                                </Row>
                            </li>
                        </ul>
                    </p>
                </Row>
            </>
        </div>
    );
};
