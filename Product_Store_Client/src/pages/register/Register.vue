<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <label for="">Username</label>
      <q-input filled v-model="form.Username" label="Username *" />
      <label for="">Email</label>
      <q-input
        filled
        v-model="form.Email"
        label="Email *"
        :rules="emailRules"
      />
      <label for="">Password</label>
      <q-input
        filled
        type="password"
        v-model="form.Password"
        label="Password *"
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
        <q-btn label="Register" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      isFormError: false,
      form: {
        Username: "",
        Password: "",
        Email: "",
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
    isValidEmail: function (email) {
      let isValidEmail =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let matcher = email.match(isValidEmail);
      if (matcher) return true;
      return false;
    },
    isConfirmedPass: function (confirmPass) {
      if (this.form.password === confirmPass) return true;
      return false;
    },
    getEmptyForm: function () {
      this.form = {
        Email: "",
        Username: "",
        Password: "",
      };
    },
    onSubmit: function () {
      this.loading = true;
      console.log("myform>>", this.form);
      this.$store.dispatch("auth/register", this.form).then(
        (res) => {
          // alert("login success");
          // this.$router.push("/");
          if (res) {
            //GET DATA FROM RESPONSE
            console.log("resgister res>>>", res);
            //GET DATA FROM STORE
            // console.log("res>>>", this.$store.state.auth.errorResponse);
            if (res.status != 200) {
              this.$q.notify({
                color: "negative",
                textColor: "white",
                icon: "cloud_done",
                message: res.message,
                position: "top",
              });
            } else {
              this.$q.notify({
                color: "positive",
                textColor: "white",
                icon: "cloud_done",
                message: res.message,
                position: "top",
              });
              this.$router.push("/login");
            }
          }
        },
        (error) => {
          this.loading = false;
          // this.message =
          //   (error.response &&
          //     error.response.data &&
          //     error.response.data.message) ||
          //   error.message ||
          //   error.toString();

          const response = this.$store.state.auth.errorResponse;
          // this.$q.notify({
          //   color: "danger",
          //   textColor: "white",
          //   icon: "cloud_done",
          //   message: response.message,
          //   position: "top",
          // });
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
