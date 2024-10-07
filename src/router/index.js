import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "./../views/HomeView.vue";
import AboutView from "./../views/AboutView.vue";
import PatternView from "./../views/PatternView.vue";
import AllQuestionsView from "./../views/AllQuestionsView.vue";
import QuestionView from "./../views/QuestionView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "about",
    component: AboutView,
  },
  {
    path: "/pattern",
    name: "pattern",
    component: PatternView,
  },
  {
    path: "/all-questions",
    name: "all-questions",
    component: AllQuestionsView,
  },
  {
    path: "/question",
    name: "question",
    component: QuestionView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
