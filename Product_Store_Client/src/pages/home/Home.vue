<template>
  <div>Welcome to hompage, {{ userInfo }}</div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      userInfo: "",
    };
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    } else {
      this.userInfo = currentUser();
    }
  },
};
</script>
