<template>
  <div class="center-position">
    <div class="q-pa-md" style="max-width: 700px">
      <h2>Forgot password</h2>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <label for="">Email</label>
        <q-input
          filled
          v-model="form.Email"
          label="Email *"
          :rules="emailRules"
        />

        <div>
          <q-btn label="Continue" type="submit" color="primary" />
          <div>
            <h5>
              I've alreay have an account,
              <p v-on:click="handleLogin" class="link">Login</p>
            </h5>
          </div>
          <!-- <div v-on:click="handleForgotPassword" class="link">
          Forgot Password
        </div> -->
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      isFormError: false,
      form: {
        Email: "",
      },
      isFromValid: false,
      success: false,
      emailRules: [
        (val) => (val !== null && val !== "") || "Please type your email",
        // (val) => this.isValidEmail(val) || "Please type valid email",
      ],
    };
  },
  methods: {
    handleForgotPassword: function () {
      this.$router.push("/forgotPassword");
    },
    handleLogin: function () {
      this.$router.push("/login");
    },
    isEmpty: function (val) {
      if (val !== null || val !== "") {
        return false;
      }
      return true;
    },

    isValidEmail: function (email) {
      let isValidEmail =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let matcher = email.match(isValidEmail);
      if (matcher) return true;
      return false;
    },
    getEmptyForm: function () {
      this.form = {
        Email: "",
      };
    },
    onSubmit: function () {
      this.loading = true;
      console.log("myform>>", this.form);
      this.$store.dispatch("auth/forgotPassword", this.form).then(
        (res) => {
          let data = res.data;
          if (res) {
            console.log("forgot password res>>>", data);
            let message =
              data && data.message
                ? data.message
                : "The Email field is not a valid e-mail address.";
            if (data.status != 200) {
              this.$q.notify({
                color: "negative",
                textColor: "white",
                icon: "cloud_done",
                message: message,
                position: "top",
              });
            } else {
              this.$q.notify({
                color: "positive",
                textColor: "white",
                icon: "cloud_done",
                message: "We sent to your email, check it please",
                position: "top",
              });
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
