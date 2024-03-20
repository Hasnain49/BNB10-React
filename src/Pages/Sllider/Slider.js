import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "./Slider.css";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

const EaningSlider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className="earning-Slider-main">
            <div className="earning-slider-inner">
                <Swiper
                    navigation={true}
                    pagination={pagination}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="earning-slider-content" >
                            <div className="earning-slider-table">
                                <table>
                                    <tr>
                                        <th className="activity-active"><span>Date</span> <p>Activity</p></th>
                                        <th className="table-head-coin">Coin</th>
                                        <th className="percentage-of-day">24 Hour Change</th>
                                        <th className="slider-table-amount">Amount</th>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/Bitcoin.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>

                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/etrium.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/etrium.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/Bitcoin.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/etrium.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/etrium.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>


                                </table>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="earning-slider-content" >
                            <div className="earning-slider-table">
                                <table>
                                    <tr>
                                        <th className="activity-active"><span>Date</span> <p>Activity</p></th>
                                        <th className="table-head-coin">Coin</th>
                                        <th className="percentage-of-day">24 Hour Change</th>
                                        <th className="slider-table-amount">Amount</th>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/Bitcoin.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>

                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/etrium.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/etrium.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/Bitcoin.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/etrium.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>
                                    <tr>
                                        <td className="date-of-table"><span><img src="/home/icons/etrium.png" alt="" />Bitcoin</span><p>12/02/24</p></td>
                                        <td className="coin-icon-table table-head-coin"><img src="/home/icons/Bitcoin.png" alt="" /> Bitcoin</td>
                                        <td className="percentage-of-day">-7.86% ~ 44.00%</td>
                                        <td className="amount-of-table">$5000</td>
                                    </tr>


                                </table>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div >
    );
};

export default EaningSlider;