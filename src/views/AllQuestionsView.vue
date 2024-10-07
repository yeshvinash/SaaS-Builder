<template>
  <div class="header-spacing">
    <section class="allQuestions">
      <div class="container">
        <h2 class="font-fahkwang fw-700 mb-5">All <span class="orange">Question</span></h2>
        <div class="allQuestions-wrap d-flex align-items-start justify-content-between  flex-xl-nowrap flex-wrap">
          <div class="allQuestions-sidebar">
            <div class="d-flex align-items-center justify-content-between mb-5 flex-wrap">
              <h4 class="primary-text fw-500 line-height-30">12,345+ Questions</h4>
              <div class="d-flex justify-content-start quesOptions">
                <div class="labelWrap">
                  <span
                    class="spanLabel fw-500 primary-text d-flex align-items-center justify-content-center">Latest</span>
                  <span
                    class="spanLabel fw-500 primary-text d-flex align-items-center justify-content-center">Trending</span>
                </div>
                <div class="selectOptionwrap mt-3 mt-sm-0">
                  <img src="../assets/images/icons/down-arrow.svg" class="down-arrow-img" alt="" />
                  <select property="spanLabel fw-500 primary-text selectOption">
                    <option value="0">Category</option>
                    <option value="1">Category1</option>
                    <option value="2">Category2</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="questionsWrap">
              <div class="qnContainer" v-for="qn in questions" :key="qn.id">
                <div class="d-flex align-items-start">
                  <div>
                    <h4 class="small fw-400 primary-text me-4">{{ qn.id }}.</h4>
                  </div>
                  <div class="content-wrap">
                    <router-link to="/question">
                      <h4 class="small fw-400 primary-text shortTextDesc mb-4 mb-xl-3">
                        {{ qn.question }}
                      </h4>

                      <p class="shortTextDesc secondary-text fw-400 h6 mb-0 mb-xl-4">
                        {{ qn.answer }}
                      </p>
                    </router-link>

                    <div class="d-flex flex-wrap">
                      <div class="d-flex align-items-center justify-content-center tag-background p-3 qn-tag">
                        <span class="secondary-text fw-400 small-head">#cloud</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-center tag-background p-3 qn-tag">
                        <span class="secondary-text fw-400 small-head">#snowflake-cloud-data-platform</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-center tag-background p-3 qn-tag">
                        <span class="secondary-text fw-400 small-head">#data-warehouse</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-center tag-background p-3 qn-tag">
                        <span class="secondary-text fw-400 small-head">#provider</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-center tag-background p-3 qn-tag">
                        <span class="secondary-text fw-400 small-head">#azure-synapse</span>
                      </div>
                    </div>
                    <div class="grayBorderClass"></div>
                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                      <div class="d-flex justify-content-start order-2 order-sm-1">
                        <div class="d-flex flex-column align-items-center votersList">
                          <h4 class="small primary-text fw-500 mb-2">0</h4>
                          <p class="secondary-text fw-400 mb-0">Votes</p>
                        </div>
                        <div class="d-flex flex-column align-items-center votersList">
                          <h4 class="small primary-text fw-500 mb-2">5</h4>
                          <p class="secondary-text fw-400 mb-0">Answers</p>
                        </div>
                        <div class="d-flex flex-column align-items-center votersList">
                          <h4 class="small primary-text fw-500 mb-2">10</h4>
                          <p class="secondary-text fw-400 mb-0">Views</p>
                        </div>
                      </div>
                      <div class="userProfile d-flex align-items-center order-1 order-sm-2">
                        <div class="user-img me-4 me-xl-3">
                          <img src="../assets/images/avatars/avatar3.jpg" alt="user" />
                        </div>
                        <div class="d-flex flex-column">
                          <span class="primary-text fw-400 mb-2 word-break">Jonathan Doe</span>
                          <span class="d-inline-block secondary-text small-content fw-400">5:20 PM 22 Aug, 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-container">
            <div class="group-header d-flex align-items-center justify-content-between">
              <h6 class="primary-text fw-500 text-capitalize">Groups</h6>
              <a href="javascript:void(0)" class="secondary-text fw-400 small-head">See all</a>
            </div>
            <div class="groupsWrapPattern">
              <div class="group-content-wrap">
                <div class="testWrap">
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="d-flex align-items-center">
                      <div class="grouplogo google-bg">
                        <img src="../assets/images/icons/google.svg" alt="google" />
                      </div>
                      <div class="d-flex flex-column">
                        <p class="fw-500 primary-text mb-2 text-break">Google Team</p>
                        <span class="secondary-text fw-500 small-head">25k Members</span>
                      </div>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="fw-500 primary-text join-btn">Join</a>
                    </div>
                  </div>
                  <p class="mb-0 secondary-text small-content fw-400">
                    GitLab is the open DevOps platform, delivered as a single application. Our open source
                  </p>
                </div>
              </div>
              <div class="group-content-wrap">
                <div class="testWrap">
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="d-flex align-items-center">
                      <div class="grouplogo google-bg">
                        <img src="../assets/images/icons/gitlab.svg" alt="gitlab" />
                      </div>
                      <div class="d-flex flex-column">
                        <p class="fw-500 primary-text mb-2 text-break">Gitlab</p>
                        <span class="secondary-text fw-500 small-head">12k Members</span>
                      </div>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="fw-500 primary-text join-btn">Join</a>
                    </div>
                  </div>
                  <p class="mb-0 secondary-text small-content fw-400">
                    Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the
                  </p>
                </div>
              </div>
              <div class="group-content-wrap">
                <div class="testWrap">
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="d-flex align-items-center">
                      <div class="grouplogo google-bg">
                        <img src="../assets/images/icons/wso2.svg" alt="wso2" />
                      </div>
                      <div class="d-flex flex-column">
                        <p class="fw-500 primary-text mb-2 text-break">WSO2</p>
                        <span class="secondary-text fw-500 small-head">25k Members</span>
                      </div>
                    </div>
                    <div>
                      <a href="javascript:void(0)" class="fw-500 primary-text join-btn">Join</a>
                    </div>
                  </div>
                  <p class="mb-0 secondary-text small-content fw-400">
                    WSO2 solutions give enterprises the flexibility to deploy applications and services on-premises, on
                    private or public clouds, or in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
  name: "all-questions",
  title: "All Questions",
  data: function () {
    return {
      questions: [
        {
          id: 1,
          question: `Does Snowflake require less people to mantain than Azure Synapse
          Data Warehouse?`,
          answer: `Snowflake sells its product as "Near-Zero management". This eliminates admin and
          management requirements of traditional platforms. It automatically handles the management..`,
        },
        {
          id: 2,
          question: `Replacing specific value on pandas with edited value of row`,
          answer: `I need to replacing a specific selected value of row with value that has been edited, what
          method that I need to do this? For example, I need to replace only the value chosen that...`,
        },
        {
          id: 3,
          question: `How to get react native pixel color when clicked?`,
          answer: `I am using a react native app and I want to get the pixel color of the image that I am clicking. I
          want to do something based the color of the selected pixel. Is it possible to that in react native..`,
        },
        {
          id: 4,
          question: `How to generate OAuth 2.0 token using TOTP?`,
          answer: `Have this code in python: import pyotp totp = pyotp.TOTP('secret') otp = totp.now() How can I
          use otp generated above as a request parameter in the below API call to retrieve the OAuth2...`,
        },
        {
          id: 5,
          question: `how to call function after executing dialog functionality in angular 10?`,
          answer: `Below is my code this.openEditBookmarkDialog('', ''); this.initializeJSONnOBJECT(tmpElem); Here
          what I want first open dialog openEditBookmarkDialog(which will automatically call functions...`,
        },
      ],
    };
  },
};
</script>

<style>
.allQuestions {
  position: relative;
  padding: 12rem 0 6rem;
  background: #f4f4f7 url("../assets/images/backgrounds/saas-builder-bg-patern.png") no-repeat top left;
  width: 100%;
  height: 100%;
}

.questionsWrap>div {
  margin-bottom: 15px;
}

.questionsWrap>div:last-child {
  margin-bottom: 0;
}

.allQuestions-sidebar {
  width: 1050px;
}

.group-container {
  width: calc(100% - 1050px);
  margin-left: 20px;
}

.spanLabel {
  padding: 17px 30px;
  background-color: var(--white);
  border: 1px solid #bbc0cd;
}

.labelWrap {
  display: flex;
}

.labelWrap span:not(:last-child) {
  margin-right: 10px;
}

.quesOptions>* {
  margin-right: 10px;
}

.quesOptions>*:last-child {
  margin-right: 0px;
}

.selectOptionwrap {
  position: relative;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  border: 1px solid #bbc0cd;
  background-color: var(--white);
  height: 100%;
  padding: 17px 68px 17px 15px;
  font-weight: 500;
  text-indent: 1px;
  text-overflow: "";
}

select:focus {
  outline: none;
}

.down-arrow-img {
  position: absolute;
  top: 50%;
  right: 25px;
}

.qnContainer {
  padding: 23px 38px 19px 30px;
  border: 1px solid #bbc0cd;
  background-color: var(--white);
}

.shortTextDesc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  word-break: break-word;
}

.content-wrap p {
  letter-spacing: 0.03em;
}

.qn-tag:not(:last-child) {
  margin-right: 10px;
}

.grayBorderClass {
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background-color: var(--separator);
}

.votersList:not(:last-child) {
  margin-right: 50px;
}

.user-img {
  width: 45px;
  height: 45px;
  border-radius: 30px;
}

.user-img img {
  width: inherit;
  height: inherit;
  border-radius: 30px;
  object-fit: cover;
  flex: 0 0 auto;
}

.userProfile .small-content {
  line-height: 15px;
}

.group-container {
  border: 1px solid #bbc0cd;
  background-color: var(--white);
}

.group-header {
  padding: 15px 20px;
  background-color: rgb(130, 139, 163, 0.1);
}

.group-header a {
  transition: 0.3s all;
}

.group-header a:hover {
  color: var(--dark-black);
}

.groupsWrapPattern {
  padding: 20px;
}

.grouplogo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  margin-right: 10px;
  flex: 0 0 auto;
}

.google-bg {
  background-color: rgb(215, 85, 62, 0.1);
}

.join-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background: var(--white);
  border: 1px solid #bbc0cd;
  transition: 0.3s all;
}

.join-btn:hover {
  background-color: #f4f4f7;
  border: 1px solid #f4f4f7;
  color: var(--dark-black);
}

.group-content-wrap:not(:last-child) .testWrap {
  padding-bottom: 20px;
  border-bottom: 2px solid var(--separator);
}

.group-content-wrap:not(:first-child) .testWrap {
  padding-top: 20px;
}
</style>
