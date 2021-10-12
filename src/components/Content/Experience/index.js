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
                    <h4 className="Year">1400</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="http://majazeh.ir/">
                            گروه مجازه
                        </a>
                    </h4>
                </Row>
                <Row>
                    <p>
                        توسعه و نگهداری فروشگاه ایمول{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://emall.market">
                            Emall
                        </a>
                        .
                        <Row className="sub-tech">
                            <small>laravel</small>
                            <small>Ajax</small>
                            <small>Javascript</small>
                            <small>Oracle Cloud Infrastructure</small>
                        </Row>
                    </p>
                </Row>
                <Row>
                    <p>
                        <a rel="noopener noreferrer" target="_blank" href="https://tooba.app/">
                            Tooba
                        </a>
                        <Row className="sub-tech">
                            <small>laravel</small>
                            <small>GraphQL</small>
                        </Row>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1400</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://zanjani.ir">
                            وبسایت آیت الله العظمی شبیری زنجانی
                        </a>
                    </h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">مدیر پروژه - برنامه‌نویس</h5>
                </Row>
                <Row>
                    <p>
                        بازسازی سایت آیت الله زنجانی و مهاجرت از سیستم تبیان به وردپرس.
                        <Row className="sub-tech">
                            <small>Wordpress</small>
                            <small>Ajax</small>
                            <small>Javascript</small>
                            <small>PHP</small>
                        </Row>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">از سال 1399</h4>
                    <h4 className="Title">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/channel/UCurthvdUrUirkqHzKZmcoPA"
                        >
                            تولید محتوای فنی ویدئویی (youtube - aparat)
                        </a>
                    </h4>
                </Row>
                <Row>
                    <p>
                        تولیدمحتوای ویدئوی برای دانشجویان جدید الورود دانشگاه ( آموزش فلوچارت -
                        سی‌پلاس‌پلاس) و محتوای تخصصی تر برای افراد تازه‌کار تیم.
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1399</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://olivecademy.com">
                            تیم نرم افزاری زیتون سبز
                        </a>
                    </h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">برنامه‌نویس بک‌اند</h5>
                </Row>
                <Row>
                    <p>
                        توسعه و نگهداری پروژه نسبتا قدیمی آکادمی زیتون سبز
                        <Row className="sub-tech">
                            <small>Laravel</small>
                            <small>React</small>
                            <small>devops</small>
                        </Row>
                    </p>
                </Row>
            </>

            <>
                <Row>
                    <h4 className="Year">1399</h4>
                    <h4 className="Title">
                        <a rel="noopener noreferrer" target="_blank" href="https://payzos.io">
                            سرویس پرداخت Payzos
                        </a>
                    </h4>
                </Row>
                <Row>
                    <h5 className="JobTitle">برنامه‌نویس بک‌اند</h5>
                </Row>
                <Row>
                    <p>
                        <a rel="noopener noreferrer" target="_blank" href="https://payzos.io">
                            Payzos
                        </a>{" "}
                        سرویس درگاه‌پرداختی آزاد و متن‌باز برای شبکه Tezos است و برای دارندگان
                        فروشگاه های مجازی امکان دریافت وجه از طریق این رمزارز را فراهم می کند.
                    </p>
                    <p>
                        وظیفه اصلی این سرویس ارائه خدمات پرداخت برای این فروشگاه‌سازهاست: <br />
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
                                    <small>REST API</small>
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
                                    <small>REST API</small>
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
                                    <small>REST API</small>
                                </Row>
                            </li>
                        </ul>
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
                                    <small>REST API</small>
                                    <small>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://github.com/nikic/FastRoute"
                                        >
                                            FastRoute
                                        </a>
                                    </small>
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

            <>
                <Row>
                    <h4 className="Year">از سال 1398</h4>
                    <h4 className="Title">
                        <a>دانشگاه آزاد اسلامی قم</a>
                    </h4>
                </Row>
                <Row>
                    <p>
                        تدریسیار استاد اسماعیلی، عضو هیئت علمی مهندسی کامپیوتر دانشگاه آزاد قم.
                        <br />
                        <br />
                        رفع‌اشکال دانشجویان، برگذاری کلاس حل‌تمرین، همکاری در برگذاری کارگاه‌های
                        انجمن‌علمی.
                    </p>
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
                                    <small>Docker</small>
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
        </div>
    );
};
