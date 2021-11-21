<template>
  <div class="center-position">
    <div class="q-pa-md" style="max-width: 700px">
      <h2>Reset password</h2>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <label for="">New Password</label>
        <q-input
          filled
          type="password"
          v-model="form.Password"
          label="Password *"
          :rules="passwordRules"
        />
        <label for="">Confirm Password</label>
        <q-input
          filled
          type="confirmPassword"
          v-model="form.ConfirmPassword"
          label="Confirm Password *"
          :rules="passwordRules"
        />
        <!-- <label for="">Confirm Password <span>*</span></label>
      <q-input
        filled
        type="password"
        v-model="confirmPassword"
        :rules="isConfirmedPassRules"
      /> -->

        <div>
          <q-btn label="Reset password" type="submit" color="primary" />
          <div>
            <h5>
              I've alreay have an account,
              <p v-on:click="handleLogin" class="link">Login</p>
            </h5>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: false,
      isFormError: false,
      form: {
        Password: "",
        ConfirmPassword: "",
        Email: "",
        token: "",
      },
      isFromValid: false,
      success: false,
      emailRules: [
        (val) => (val !== null && val !== "") || "Please type your email",
        // (val) => this.isValidEmail(val) || "Please type valid email",
      ],
      passwordRules: [
        (val) => (val !== null && val !== "") || "Please type your password",
        // (val) => this.isStrongPassword(val) || "Please type a strong password",
      ],
      isConfirmedPassRules: [
        (val) =>
          this.isConfirmedPass(val) ||
          "Please The confirmed password and pasword must be the same",
      ],
    };
  },
  methods: {
    handleLogin: function () {
      this.$router.push("/login");
    },
    isEmpty: function (val) {
      if (val !== null || val !== "") {
        return false;
      }
      return true;
    },
    isStrongPassword: function (password) {
      let strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/g;
      let matcher = password.match(strongPassword);
      if (matcher) return true;
      return false;
    },
    isConfirmedPass: function (confirmPass) {
      if (this.form.password === confirmPass) return true;
      return false;
    },
    getEmptyForm: function () {
      this.form = {
        Password: "",
      };
    },
    onSubmit: function () {
      this.loading = true;
      // GET FORGOTPASSWORD
      console.log("reset token", this.$route.query.token);
      console.log("reset email", this.$route.query.email);
      this.form.token = this.$route.query.token;
      this.form.Email = this.$route.query.email;
      console.log("myform>>", this.form);
      this.$store.dispatch("auth/resetPassword", this.form).then(
        (res) => {
          if (res) {
            let data = res.data;
            console.log("reset password res>>>", res);

            if (res.status != 200) {
              let message = data.listMessage[1];
              this.$q.notify({
                color: "negative",
                textColor: "white",
                icon: "cloud_done",
                message: message
                  ? message.description
                  : "Please re-check password",
                position: "top",
              });
            } else {
              this.$q.notify({
                color: "positive",
                textColor: "white",
                icon: "cloud_done",
                message: "Reset password success!",
                position: "top",
              });
              this.$router.push("/login");
              nguy;
            }
          }
        },
        (error) => {
          this.loading = false;
          const response = this.$store.state.auth.errorResponse;
        }
      );

      this.loading = false;
    },
    onReset: function () {
      // this.getEmptyForm();
    },
  },
  mounted() {},
  // computed: {
  //   ...mapGetters("auth", ["forgotInfo"]),
  // },
};
</script>

<style scoped>
.center-position {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 700px;
}
.link {
  cursor: pointer;
  color: blue;
  padding: 1rem;
  font-style: italic;
}
.link:active {
  text-decoration-line: underline;
}
</style>
