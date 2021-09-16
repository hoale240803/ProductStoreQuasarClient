<template>
  <div class="q-md-lg">
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <q-header elevated class="bg-white text-grey-8" height-hint="64">
        <q-toolbar class="GNL__toolbar">
          <q-btn
            flat
            dense
            round
            @click="drawer = !drawer"
            aria-label="Menu"
            icon="menu"
            class="q-mr-sm"
          />
          <q-toolbar-title
            v-if="$q.screen.gt.xs"
            shrink
            class="row items-center no-wrap"
          >
            <img
              src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"
            />
            <span class="q-ml-sm">News</span>
          </q-toolbar-title>
          <q-space />
          <!-- SEARCH BAR -->
          <q-input
            class="GNL__toolbar-input"
            outlined
            dense
            v-model="search"
            color="bg-grey-7 shadow-1"
            placeholder="Search for topics, locations & sources"
          >
            <template v-slot:prepend>
              <q-icon v-if="search === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="search = ''"
              />
            </template>
            <!-- ADVANCED SEARCH -->
            <template v-slot:append>
              <q-btn flat dense round aria-label="Menu" icon="arrow_drop_down">
                <q-menu anchor="bottom end" self="top end">
                  <div class="q-pa-md" style="width: 400px">
                    <div class="text-body2 text-grey q-mb-md">
                      Narrow your search results
                    </div>

                    <div class="row items-center">
                      <div class="col-3 text-subtitle2 text-grey">
                        Exact phrase
                      </div>
                      <div class="col-9 q-pl-md">
                        <q-input dense v-model="exactPhrase" />
                      </div>

                      <div class="col-3 text-subtitle2 text-grey">
                        Has words
                      </div>
                      <div class="col-9 q-pl-md">
                        <q-input dense v-model="hasWords" />
                      </div>

                      <div class="col-3 text-subtitle2 text-grey">
                        Exclude words
                      </div>
                      <div class="col-9 q-pl-md">
                        <q-input dense v-model="excludeWords" />
                      </div>

                      <div class="col-3 text-subtitle2 text-grey">Website</div>
                      <div class="col-9 q-pl-md">
                        <q-input dense v-model="byWebsite" />
                      </div>

                      <div class="col-12 q-pt-lg row justify-end">
                        <q-btn
                          flat
                          dense
                          no-caps
                          color="grey-7"
                          size="md"
                          style="min-width: 68px"
                          label="Search"
                          v-close-popup
                        />
                        <q-btn
                          flat
                          dense
                          no-caps
                          color="grey-7"
                          size="md"
                          style="min-width: 68px"
                          @click="onClear"
                          label="Clear"
                          v-close-popup
                        />
                      </div>
                    </div>
                  </div>
                </q-menu>
              </q-btn>
            </template>
          </q-input>
          <q-space />
          <div class="q-gutter-sm row items-center no-wrap">
            <!-- APPLICATION BUTTON -->
            <q-btn
              v-if="$q.screen.gt.sm"
              round
              dense
              flat
              color="text-grey-7"
              icon="apps"
            >
              <q-tooltip>Google Apps</q-tooltip>
            </q-btn>
            <!-- NOTIFICATION BUTTON -->
            <q-btn round dense flat color="grey-8" icon="notifications">
              <q-badge color="red" text-color="white" floating> 2 </q-badge>
              <q-tooltip>Notifications</q-tooltip>
              <q-menu :offset="[50, 10]">
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>:offset="[50, 10]"</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>:offset="[50, 10]"</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <!-- PROFILE BUTTON -->
            <q-btn round flat>
              <q-avatar size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <q-tooltip>Account</q-tooltip>
              <q-menu :offset="[50, 10]">
                <q-list
                  style="min-width: 100px"
                  class="flex column justify-center items-center full-width"
                >
                  <q-item clickable v-close-popup>
                    <q-icon name="person" />
                    <q-item-section>Profile</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup v-on:click="logout">
                    <q-icon name="logout" />
                    <q-item-section>Log Out</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
            <q-btn
              color="primary"
              icon="check"
              label="OK"
              @click="onClick"
              v-show="isLoggedIn"
            ></q-btn>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        show-if-above
        bordered
        class="bg-white"
        :width="280"
        v-model="drawer"
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
  </div>
</template>

<script>
import { fasGlobeAmericas, fasFlask } from "@quasar/extras/fontawesome-v5";
import { mapGetters } from "vuex";
export default {
  name: "GoogleNewsLayout",
  data() {
    return {
      isLoggedIn: false,
      drawer: false,
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
    logout: function () {
      this.$store.dispatch("auth/logout").then(
        (res) => {
          this.$router.push("/login");
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    toggleLeftDrawerNavbarComp: function (value) {
      console.log("yyy", value);
    },
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
      // if (!this.getIsLoggedIn) {
      //   this.$router.push("/login");
      // }
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("user after login", user.isLoggedIn);
      if (!user.isLoggedIn) {
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
