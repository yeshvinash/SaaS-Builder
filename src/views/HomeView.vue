<template>
  <div class="header-spacing">
    <!-- hero section start //RIA-->
    <section class="hero">
      <div class="container">
        <div
          class="hero-wrap d-flex align-items-center flex-wrap flex-xl-nowrap space-120 justify-content-xl-between justify-content-center position-relative">
          <div class="hero-content-wrap mw-745">
            <div class="image-wrap d-flex align-items-center justify-content-center">
              <img src="../assets/images/icons/hand.png" alt="hand" />
            </div>
            <h6 class="dark-gray fw-400">Welcome to the Sass Builder Community</h6>
            <h1 class="font-fahkwang fw-700 hero-main-title">Build <span class="orange">Saas</span> Apps Together.</h1>
            <h5 class="small dark-gray fw-300 mrBottom-40 mw-670">
              The Saas Builder community is a place for all builders to learn and share experiences. The learning
              experience and shared knowledge is our primary focus.
            </h5>
            <div>
              <ul class="list-wrap">
                <li>
                  <h5 class="fw-400 light-black small">Learn</h5>
                </li>
                <li>
                  <h5 class="fw-400 light-black small">Share</h5>
                </li>
                <li>
                  <h5 class="fw-400 light-black small">Grow</h5>
                </li>
              </ul>
            </div>
          </div>
          <div class="hero-form-wrap">
            <div class="sign-up-wrap gradientBlue">
              <form action="">
                <div class="page-title-label">Quick Sign Up</div>
                <h4 class="small font-fahkwang fw-700">Sign Up & Join the Community</h4>
                <div class="details-wrap d-flex">
                  <div class="input-icon d-flex align-items-center justify-content-center">
                    <img src="../assets/images/icons/person.svg" alt="person" />
                  </div>
                  <input type="text" class="primary-input" placeholder="Enter First Name" />
                </div>
                <div class="details-wrap d-flex">
                  <div class="input-icon d-flex align-items-center justify-content-center">
                    <img src="../assets/images/icons/person.svg" alt="person" />
                  </div>
                  <input type="text" class="primary-input" placeholder="Enter Last Name" />
                </div>
                <div class="details-wrap d-flex">
                  <div class="input-icon d-flex align-items-center justify-content-center">
                    <img src="../assets/images/icons/sms.svg" alt="sms" />
                  </div>
                  <input type="email" class="primary-input" placeholder="Enter Email Address" />
                </div>
                <div class="details-wrap d-flex">
                  <div class="input-icon d-flex align-items-center justify-content-center">
                    <img src="../assets/images/icons/lock.svg" alt="lock" />
                  </div>
                  <input type="password" class="primary-input" placeholder="Pick a Password" />
                </div>
                <span class="d-block fw-400 small-head text-lightgray highlight-text">Use at least one letter, one
                  numeral, and seven characters.</span>
                <button class="custom-btn w-100 orange-btn" type="button">
                  Sign Up for Saas Builder
                  <img src="../assets/images/icons/arrow.svg" alt="arrow" class="ms-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- hero section end //RIA-->

    <!-- Trending section start by AVN -->
    <section class="trending-wrap">
      <img src="../assets/images/curve.png" class="curve-img" alt="curve1" />
      <router-link to="/about-us" class="text-circle-rotate">
        <img src="../assets/images/icons/text-rotate.svg" class="text-rotate-img" alt="rotation" />
        <img src="../assets/images/icons/arrow-circle.svg" class="arrow-circle-img" alt="arrow-circle" />
      </router-link>

      <div class="container">
        <div class="trending-header d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
          <div class="trending-title">
            <h3 class="h3 font-fahkwang fw-700 titlegradient">Trending Topics In Our Forum</h3>
            <h5 class="small secondary-text fw-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </h5>
          </div>
          <router-link to="/all-questions" class="custom-btn orange-btn">View all</router-link>
        </div>

        <b-tabs nav-class="tab-ques-wrap" pills vertical>
          <b-tab active active-nav-item-class="custom-tab">
            <template #title>
              <div class="trending-tab-col">
                <p class="h6">1. Error get-function rgba-css-var is not a valid value for background-color</p>
                <div class="d-flex align-items-center flex-wrap tab-datacontent">
                  <a href="javascript:void(0)" class="me-3 tab-link"><span class="secondary-text fw-400"># Deployment
                      Models</span></a>
                  <a href="javascript:void(0)" class="me-3 tab-link"><span class="secondary-text fw-400"># Deployment
                      Cards</span></a>
                </div>
              </div>
            </template>
            <div class="tab-content-wrap">
              <h4 class="small fw-400 primary-text">1. What are examples of a full stack silo deployment models?</h4>
              <div class="tab-profile">
                <div class="d-flex">
                  <div class="tab-avatar">
                    <img src="../assets/images/avatars/avatar2.jpg" alt="" />
                  </div>
                  <div class="ps-3 tab-content">
                    <p>
                      I refer to the steps mentioned in this answer and found that with a few changes it started
                      working. I was experiencing the same issue. Turned out to be the SASS Compiler I was using. I'm
                      running a NET MVC C# Web App, and ...
                    </p>
                    <div>
                      <span class="page-title-label d-block primary-text">Jonathan Doe</span>
                      <span class="small-content secondary-text">22 Aug, 2022</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="tab-avatar">
                    <img src="../assets/images/avatars/avatar1.jpg" alt="" />
                  </div>
                  <div class="ps-3 tab-content">
                    <p>
                      You could refer to my answer to make SASS work. After that, if you still facing the issue with the
                      CSS then you need to share your...
                    </p>
                    <div>
                      <span class="page-title-label d-block primary-text">Mark Berg</span>
                      <span class="small-content secondary-text">22 Aug, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <div class="trending-tab-col">
                <p class="h6">2. How do you partition data in RDS for multi - tenancy?</p>
                <div class="d-flex align-items-center flex-wrap tab-datacontent">
                  <a href="javascript:void(0)" class="me-3 tab-link"><span class="secondary-text fw-400"># Data
                      Partitioning</span></a>
                  <a href="javascript:void(0)" class="me-3 tab-link"><span class="secondary-text fw-400"># Data
                      Partitioning</span></a>
                </div>
              </div>
            </template>
            <div class="tab-content-wrap">
              <h4 class="small fw-400 primary-text">2. How do you partition data in RDS for multi - tenancy?</h4>
              <div class="tab-profile">
                <div class="d-flex">
                  <div class="tab-avatar">
                    <img src="../assets/images/avatars/avatar2.jpg" alt="" />
                  </div>
                  <div class="ps-3 tab-content">
                    <p>
                      I refer to the steps mentioned in this answer and found that with a few changes it started
                      working. I was experiencing the same issue. Turned out to be the SASS Compiler I was using. I'm
                      running a NET MVC C# Web App, and ...
                    </p>
                    <div>
                      <span class="page-title-label d-block primary-text">Jonathan Doe</span>
                      <span class="small-content secondary-text">22 Aug, 2022</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="tab-avatar">
                    <img src="../assets/images/avatars/avatar1.jpg" alt="" />
                  </div>
                  <div class="ps-3 tab-content">
                    <p>
                      You could refer to my answer to make SASS work. After that, if you still facing the issue with the
                      CSS then you need to share your...
                    </p>
                    <div>
                      <span class="page-title-label d-block primary-text">Mark Berg</span>
                      <span class="small-content secondary-text">22 Aug, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <div class="trending-tab-col">
                <p class="h6">3. How to setup user profiles for multi - tenancy?</p>
                <div class="d-flex align-items-center flex-wrap tab-datacontent">
                  <a href="javascript:void(0)" class="me-3 tab-link"><span class="secondary-text fw-400"># Data
                      Partitioning</span></a>
                  <a href="javascript:void(0)" class="me-3 tab-link"><span class="secondary-text fw-400"># Data
                      Partitioning</span></a>
                </div>
              </div>
            </template>
            <div class="tab-content-wrap">
              <h4 class="small fw-400 primary-text">3. How to setup user profiles for multi - tenancy?</h4>
              <div class="tab-profile">
                <div class="d-flex">
                  <div class="tab-avatar">
                    <img src="../assets/images/avatars/avatar2.jpg" alt="" />
                  </div>
                  <div class="ps-3 tab-content">
                    <p>
                      I refer to the steps mentioned in this answer and found that with a few changes it started
                      working. I was experiencing the same issue. Turned out to be the SASS Compiler I was using. I'm
                      running a NET MVC C# Web App, and ...
                    </p>
                    <div>
                      <span class="page-title-label d-block primary-text">Jonathan Doe</span>
                      <span class="small-content secondary-text">22 Aug, 2022</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="tab-avatar">
                    <img src="../assets/images/avatars/avatar1.jpg" alt="" />
                  </div>
                  <div class="ps-3 tab-content">
                    <p>
                      You could refer to my answer to make SASS work. After that, if you still facing the issue with the
                      CSS then you need to share your...
                    </p>
                    <div>
                      <span class="page-title-label d-block primary-text">Mark Berg</span>
                      <span class="small-content secondary-text">22 Aug, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </section>
    <!-- Trending section end by AVN -->

    <!--slider start //RIA-->
    <section class="trending-swiper space-75">
      <div class="container">
        <div class="trending-title text-center">
          <h3 class="h3 font-fahkwang fw-700 titlegradient">Trending Topics In Our Forum</h3>
          <h5 class="small text-lightgray fw-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </h5>
        </div>
      </div>
      <div class="swiper" ref="trendingSwiper">
        <div class="swiper-wrap swiper-wrapper">
          <div class="swiper-slide active">
            <div class="swiper-card">
              <button class="custom-btn orange-btn">Account Per Tenant</button>
              <h4>Full Stack Silo Deployment Models</h4>
              <p class="fw-400 mw-713 text-center">
                With self-hosted identity, a SaaS provider will select the identity tooling/service that best aligns
                with the needs of their environment.
              </p>
              <div class="click-wrap d-flex align-items-center justify-content-center">
                <a href="#" class="click-info"># Data Partitioning</a>
                <a href="#" class="click-info"># Deployment Models</a>
                <a href="#" class="click-info"># Data Partitioning</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-card">
              <button class="custom-btn orange-btn">Account Per Tenant</button>
              <h4>Full Stack Silo Deployment Models</h4>
              <p class="fw-400 mw-713 text-center">
                With self-hosted identity, a SaaS provider will select the identity tooling/service that best aligns
                with the needs of their environment.
              </p>
              <div class="click-wrap d-flex align-items-center justify-content-center">
                <a href="#" class="click-info"># Data Partitioning</a>
                <a href="#" class="click-info"># Deployment Models</a>
                <a href="#" class="click-info"># Data Partitioning</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-card">
              <button class="custom-btn orange-btn">Account Per Tenant</button>
              <h4>Full Stack Silo Deployment Models</h4>
              <p class="fw-400 mw-713 text-center">
                With self-hosted identity, a SaaS provider will select the identity tooling/service that best aligns
                with the needs of their environment.
              </p>
              <div class="click-wrap d-flex align-items-center justify-content-center">
                <a href="#" class="click-info"># Data Partitioning</a>
                <a href="#" class="click-info"># Deployment Models</a>
                <a href="#" class="click-info"># Data Partitioning</a>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-custom-nav">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>

      <div class="mw-450 my-0 mx-auto signup-swiper-btn">
        <a href="#" class="custom-btn w-100 orange-btn">Sign Up for Saas Builder
          <img src="../assets/images/icons/arrow.svg" alt="arrow" class="ms-2" />
        </a>
      </div>
    </section>
    <!--slider end //RIA-->
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    RouterLink,
  },
  name: "home-view",
  title: "Home",

  mounted() {
    new Swiper(this.$refs.trendingSwiper, {
      modules: [Navigation],
      loop: true,
      autoHeight: true,
      slidesPerView: 1.2,
      spaceBetween: 50,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        480: {
          // slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    });
  },
};
</script>
<style>
/* hero start  //RIA*/

/* style added by AVN */
.hero {
  position: relative;
  padding-bottom: 88px;
  background-color: #f4f4f7;
  /* margin-top: 100px; */
}

.hero::after {
  content: "";
  position: absolute;
  background-image: url("../assets/images/icons/Line.svg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
}

.hero-form-wrap {
  position: relative;
  z-index: 5;
}

/* style added by AVN */

.hero-content-wrap {
  position: relative;
  z-index: 11;
}

.hero-content-wrap h5.small {
  line-height: 2;
}

.image-wrap {
  width: 70px;
  height: 70px;
  flex: 0 0 auto;
  margin-bottom: 30px;
}

.image-wrap img {
  width: inherit;
  height: inherit;
  object-fit: contain;
}

.hero-main-title {
  margin-top: 15px;
  margin-bottom: 35px;
}

.list-wrap {
  display: inline-flex;
  list-style: disc;
}

.list-wrap li:first-child {
  list-style: none;
}

.list-wrap li {
  margin-right: 30px;
}

.sign-up-wrap {
  padding: 30px 25px 25px 25px;
  width: 500px;
  color: var(--white);
}

.sign-up-wrap .page-title-label {
  margin-bottom: 15px;
}

.sign-up-wrap h4 {
  margin-bottom: 30px;
}

.details-wrap {
  /* padding: 20px 15px; */
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  position: relative;
}

.details-wrap:first-child {
  margin-top: 0px;
}

.input-icon {
  position: absolute;
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.input-icon img {
  width: inherit;
  height: inherit;
  object-fit: contain;
}

.highlight-text {
  margin: 10px 0 27px 0;
}

/* trending section style by AVN */
.trending-wrap {
  position: relative;
  padding: 6.6rem 0 12rem 0;
}

.trending-title .h3 {
  margin-bottom: 20px;
}

.trending-header {
  margin-bottom: 60px;
}

.trending-header .custom-btn {
  font-size: 16px;
}

.tab-link {
  background-color: rgb(130, 139, 163, 0.1);
  padding: 11px 13px;
}

.trending-tab-col {
  position: relative;
  padding: 20px 30px 15px;
  border: 1px solid #bbc0cd;
}

.trending-tab-col .h6 {
  color: rgb(19, 19, 27, 0.7);
  margin-bottom: 15px;
  font-weight: 400;
}

.tab-ques-wrap>div {
  margin-bottom: 25px;
}

.tab-ques-wrap>div:last-child {
  margin-bottom: 0;
}

.tab-ques-wrap .nav-item:not(:last-child) {
  margin-bottom: 25px;
}

.tab-ques-wrap .nav-link {
  padding: 0;
}

.trending-wrap .tab-ques-wrap .nav-link.active,
.trending-wrap .tab-ques-wrap .show>.nav-link {
  background-color: transparent;
}

.nav-link.active .trending-tab-col {
  position: relative;
  border: 1px solid var(--orange);
  box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.05);
}

.nav-link.active .trending-tab-col .h6 {
  color: var(--dark-black);
}

.nav-link.active .trending-tab-col::before {
  content: "";
  position: absolute;
  display: block;
  width: 18px;
  height: 18px;
  top: 50%;
  right: -9px;
  transform: translateY(-50%) rotate(45deg);
  border: 1px solid;
  border-color: var(--orange) var(--orange) transparent transparent;
  background-color: var(--white);
}

.trending-tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
}

.tab-avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.tab-avatar img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: 100%;
}

.tab-content p {
  font-weight: 400;
  color: var(--light-gray);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
  line-height: 1.95;
}

.tab-content-wrap {
  padding: 25px 30px;
  border: 1px solid var(--orange);
}

.tab-content-wrap h4 {
  margin-bottom: 15px;
}

.tab-profile>div {
  margin-bottom: 30px;
}

.tab-profile>div:last-child {
  margin-bottom: 0;
}

.curve-img {
  position: absolute;
  max-width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: -88px;
  min-height: 89px;
  object-fit: cover;
}

.text-circle-rotate {
  position: absolute;
  top: -170px;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 9;
}

.arrow-circle-img {
  position: absolute;
  width: 59px;
  height: auto;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}

.text-rotate-img {
  width: 125px;
  height: 125px;
  animation-name: rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

.tab-content.col {
  padding-left: 40px;
}

/* trending section style by AVN */

/*trending-swiper start//RIA */
.trending-swiper {
  margin: 10px 0 0 0;
  background-color: #f4f4f7;
}

.trending-swiper .trending-title h3 {
  margin-bottom: 20px;
}

.swiper-wrap {
  margin: 60px 0;
}

.swiper-card {
  max-width: 1000px;
  width: 100%;
  height: 450px;
  background-color: #e9eaef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.swiper-card .custom-btn {
  margin-bottom: 20px;
}

.swiper-card h4 {
  font-weight: 500;
  color: var(--dark-black);
  margin-bottom: 30px;
  font-family: var(var(--font-euclid));
}

.swiper-card p {
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  color: var(--dark-black);
  line-height: 1.5;
}

.click-info {
  font-size: 14px;
  font-weight: 400;
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3168e0;
  background-color: #d7ddee;
  margin-right: 10px;
}

.swiper-slide-active .swiper-card {
  background: url(../assets/images/backgrounds/bg-gradient.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
}

.swiper-slide-active .swiper-card .custom-btn {
  border: 2px solid var(--orange);
  background-color: #868b6c;
  color: var(--white);
}

.swiper-slide-active .swiper-card h4 {
  color: var(--white);
  font-family: var(--font-fahkwang);
  font-weight: 700;
}

.swiper-slide-active .swiper-card p {
  color: var(--white);
}

.swiper-slide-active .swiper-card .click-info {
  background-color: rgb(255, 255, 255, 0.2);
  color: rgb(255, 255, 255, 0.8);
}

/*trending-swiper end//RIA */

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-custom-nav>[class^="swiper-button"]::after {
  content: unset;
}

.swiper-button-prev {
  left: calc(50% - 525px);
  transform: translateX(50%);
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk2MjUgNy40MTI2TDQuMzc1IDE1LjAwMDFMMTEuOTYyNSAyMi41ODc2IiBzdHJva2U9IiMxMzEzMUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjUuNjI1IDE1SDQuNTg3NTIiIHN0cm9rZT0iIzEzMTMxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
}

.swiper-button-next {
  right: calc(50% - 525px);
  transform: translateX(-50%);
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjAzNzUgNy40MTI2TDI1LjYyNSAxNS4wMDAxTDE4LjAzNzUgMjIuNTg3NiIgc3Ryb2tlPSIjMTMxMzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQuMzc1MDEgMTVIMjUuNDEyNSIgc3Ryb2tlPSIjMTMxMzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==");
}

.swiper-custom-nav>[class^="swiper-button"] {
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-position: center center;
  background-color: var(--white);
  transition: 0.3s all;
}

.swiper-custom-nav>[class^="swiper-button"]:hover {
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
}
</style>
