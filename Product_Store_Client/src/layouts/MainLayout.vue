<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <navbar></navbar>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
      ref="leftDrawerOpen"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links1"
            :key="link.text"
            clickable
          >
            <q-item v-if="link.text === 'login'" class="link_hover">
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }} </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-else>
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }} </q-item-label>
              </q-item-section>
            </q-item>
          </q-item>

          <q-separator inset class="q-my-sm" />
          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links2"
            :key="link.text"
            clickable
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset class="q-my-sm" />
          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links3"
            :key="link.text"
            clickable
          >
            <q-item-section>
              <q-item-label
                >{{ link.text }} <q-icon v-if="link.icon" :name="link.icon"
              /></q-item-label>
            </q-item-section>
          </q-item>

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Privacy"
                >Privacy</a
              >
              <span> · </span>
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Terms"
                >Terms</a
              >
              <span> · </span>
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="About"
                >About Google</a
              >
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Login from "../pages/login/Login.vue";
import { ref } from "vue";
import { fasGlobeAmericas, fasFlask } from "@quasar/extras/fontawesome-v5";
import Navbar from "../components/navbar/Navbar.vue";
import { mapGetters } from "vuex";
export default {
  name: "GoogleNewsLayout",
  components: {
    navbar: Navbar,
  },
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: "",
      hasWords: "",
      excludeWords: "",
      byWebsite: "",
      byDate: "Any time",
      links1: [
        { icon: "web", text: "Top stories" },
        { icon: "person", text: "For you" },
        { icon: "star_border", text: "Favourites" },
        { icon: "search", text: "Saved searches" },
        { icon: "login", text: "login" },
      ],
      links2: [
        { icon: "flag", text: "Canada" },
        { icon: fasGlobeAmericas, text: "World" },
        { icon: "place", text: "Local" },
        { icon: "domain", text: "Business" },
        { icon: "memory", text: "Technology" },
        { icon: "local_movies", text: "Entertainment" },
        { icon: "directions_bike", text: "Sports" },
        { icon: fasFlask, text: "Science" },
        { icon: "fitness_center", text: "Health " },
      ],
      links3: [
        { icon: "", text: "Language & region" },
        { icon: "", text: "Settings" },
        { icon: "open_in_new", text: "Get the Android app" },
        { icon: "open_in_new", text: "Get the iOS app" },
        { icon: "", text: "Send feedback" },
        { icon: "open_in_new", text: "Help" },
      ],
    };
  },
  methods: {
    onClear: function () {
      this.exactPhrase = "";
      this.hasWords = "";
      this.excludeWords = "";
      this.byWebsite = "";
      this.byDate = "Any time";
    },
    changeDate: function (option) {
      this.byDate = option;
      this.showDateOptions = false;
    },
    loadHompage: function () {
      if (!this.getIsLoggedIn) {
        this.$router.push("/login");
      }
    },
    // loadGoogleLogin: function () {
    //   gapi.signin2.render("google-signin-btn", {
    //     // this is the button "id"
    //     onsuccess: this.onSignIn, // note, no "()" here
    //     onfailure: this.onFailure,
    //   });
    // },
  },
  mounted() {
    this.loadHompage();
    // this.loadGoogleLogin();
  },

  computed: {
    ...mapGetters("auth", ["getIsLoggedIn"]),
  },
};
</script>

<style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
.GNL__drawer-item
  a:hover
    color: #e9e9e9
    width: 100%
  a

  width: 100%
</style>
