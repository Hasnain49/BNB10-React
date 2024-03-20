import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "./homeslider.css";
// import required modules
import { Navigation } from "swiper/modules";

const HomeSlider = () => {
    return (
        <div className="home-Slider-main">
            <div className="home-slider-inner">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="home-slider-content" >
                            <div className="middle-card middlecard-1">
                                <div className="middle-card-icon">
                                    <img src="/home/icons/money.png" alt="" />
                                </div>
                                <h1>Gas Fee Savings</h1>
                                <p>
                                    Users can participate in gas fee giveaways, reducing the cost
                                    of transactions on the Binance Smart Chain. This incentivizes
                                    wallet holders to engage with the platform and benefit from
                                    reduced fees.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="home-slider-content" >
                            <div className="middle-card middlecard-1">
                                <div className="middle-card-icon">
                                    <img src="/home/icons/colored-wallet.png" alt="" />
                                </div>
                                <h1>Enhanced Wallet Engagement</h1>
                                <p>
                                    By fulfilling certain conditions, users can qualify for gas
                                    fee giveaways. This encourages active participation and
                                    engagement with their BSC wallets, fostering a sense of
                                    community and involvement in the platform.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home-slider-content" >
                            <div className="middle-card middlecard-1">
                                <div className="middle-card-icon">
                                    <img src="/home/icons/finance.png" alt="" />
                                </div>
                                <h1>Financial Accessibility</h1>
                                <p>
                                    Gas fees can be a barrier for some users to engage with
                                    blockchain transactions. Bnb10's gas fee giveaways make
                                    transactions more affordable, promoting financial inclusivity
                                    and accessibility within the Binance Smart Chain ecosystem.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home-slider-content" >
                            <div className="middle-card middlecard-1">
                                <div className="middle-card-icon">
                                    <img src="/home/icons/centric.png" alt="" />
                                </div>
                                <h1>User-Centric Design</h1>
                                <p>
                                    The website's design, structured around three main pages with
                                    distinct purposes, prioritizes user experience. Clear
                                    navigation and focused content ensure that users can easily
                                    find information relevant to gas fee giveaways and wallet
                                    conditions.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home-slider-content" >
                            <div className="middle-card middlecard-1">
                                <div className="middle-card-icon">
                                    <img src="/home/icons/law.png" alt="" />
                                </div>
                                <h1>Transparency and Fairness</h1>
                                <p>
                                    By specifying certain conditions for eligibility, Bnb10
                                    ensures transparency and fairness in its gas fee giveaway
                                    process. Users understand the criteria for participation,
                                    fostering trust and confidence in the platform.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home-slider-content" >
                            <div className="middle-card middlecard-1">
                                <div className="middle-card-icon">
                                    <img src="/home/icons/community.png" alt="" />
                                </div>
                                <h1>Community Building</h1>
                                <p>
                                    Bnb10's mission of providing gas fee giveaways fosters a
                                    community of Binance Smart Chain users who share common
                                    interests in reducing transaction costs. This community
                                    engagement can lead to collaboration, knowledge sharing, and
                                    networking opportunities among users.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default HomeSlider;