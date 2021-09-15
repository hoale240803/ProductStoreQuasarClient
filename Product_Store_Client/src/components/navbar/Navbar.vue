<template>
  <q-header elevated class="bg-white text-grey-8" height-hint="64">
    <q-toolbar class="GNL__toolbar">
      <q-btn
        flat
        dense
        round
        @click="toggleLeftDrawer"
        aria-label="Menu"
        icon="menu"
        class="q-mr-sm"
        ref="leftDrawerOpen"
      />

      <q-toolbar-title
        v-if="$q.screen.gt.xs"
        shrink
        class="row items-center no-wrap"
      >
        <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg" />
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
                  <div class="col-3 text-subtitle2 text-grey">Exact phrase</div>
                  <div class="col-9 q-pl-md">
                    <q-input dense v-model="exactPhrase" />
                  </div>

                  <div class="col-3 text-subtitle2 text-grey">Has words</div>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      leftDrawerOpen: false,
      isLoggedIn: false,
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
    toggleLeftDrawer: function () {
      this.leftDrawerOpen = !this.$refs.leftDrawerOpen;
    },
    // loadData: function () {
    //   // console.log(
    //   //   "isLoggedIn from store",
    //   //   this.$store.state.auth.userStates.isLoggedIn
    //   // );
    //   // console.log("isLoggedIn from getter", this.getIsLoggedIn);
    //   var user = localStorage.getItem("user");
    //   if (!user.isLoggedIn) {
    //     this.$router.push("/login");
    //   }
    //   this.isLoggedIn = user.isLoggedIn;
    // },
  },
  mounted() {
    // this.loadData();
  },
  computed: {
    ...mapGetters("auth", ["getIsLoggedIn"]),
  },
};
</script>
