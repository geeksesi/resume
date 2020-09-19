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
                                    href="https://github.com/geeksesi/do0ir-cli"
                                >
                                    نرم افزار کوتاه کننده لینک به زبان Rust{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/wp-zilon-woocommerce"
                                >
                                    افزونه وردپرس درگاه پرداخت زیلون
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/geeksesi/LeaderBoardApi"
                                >
                                    سرویس لیدربورد برای بازی های رقابتی{" "}
                                </a>
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
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/s-mtz/mangadl_tbot"
                                >
                                    ربات تلگرام دانلود مانگا و تبدیل عکس به pdf
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/kmtqom/search-book-by-isbn"
                                >
                                    جستجوی اطلاعات کتاب براساس شابک کتاب
                                </a>
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
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-payment-opencart"
                                >
                                    OpenCart{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-magento"
                                >
                                    Magento{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://gitlab.com/payzos/payzos-prestashop"
                                >
                                    PrestaShop{" "}
                                </a>
                            </li>
                        </ul>
                        می باشد.
                    </p>
                </Row>
            </>
        </div>
    );
};
