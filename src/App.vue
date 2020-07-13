<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">SurveyJS + VueJS</a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/survey">Survey</router-link>
          </li>
          <li>
            <router-link to="/creator">SurveyJS Creator</router-link>
          </li>
          <li>
            <router-link to="/exportpdf">PDF Export</router-link>
          </li>
          <li>
            <router-link to="/analytics">Analytics</router-link>
          </li>
          <!-- <li>
            <router-link to="/bar/baz">/bar/baz</router-link>
          </li>
          <li>
            <router-link to="/a/b/c">/a/b/c</router-link>
          </li>-->
        </ul>
      </div>
    </nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueRouter);

const Home = () => import("./views/Home.vue");
const Survey = () =>
  import(/* webpackChunkName: "survey" */ "./views/Survey.vue");
const Creator = () =>
  import(/* webpackChunkName: "creator" */ "./views/Creator.vue");
const ExportToPDF = () =>
  import(/* webpackChunkName: "creator" */ "./views/ExportToPDF.vue");
const Analytics = () =>
  import(/* webpackChunkName: "creator" */ "./views/Analytics.vue");

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    // Just use them normally in the route config
    { path: "/survey", component: Survey },
    // multiple parameters, `/` should not be encoded. The name is also important
    // https://github.com/vuejs/vue-router/issues/2719
    // { path: '/a/:tags*', name: 'tagged', component: () => new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({
    //       template: `<div>
    //         <h2>Lazy with params</h2>
    //         <pre id="tagged-path">{{ $route.path }}</pre>
    //       </div>`
    //     })
    //   }, 200)
    // }) },
    // Bar and Baz belong to the same root route
    // and grouped in the same async chunk.
    { path: "/creator", component: Creator },
    { path: "/exportpdf", component: ExportToPDF },
    { path: "/analytics", component: Analytics }
  ]
});

export default {
  name: "app",
  router: router
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
