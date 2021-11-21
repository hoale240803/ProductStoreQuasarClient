import { date } from "quasar";
// import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';

export default ({ app, router, Vue }) => {
  Vue.mixin({
    // components: {
    //   Hooper,
    //   Slide,
    //   HooperPagination
    // },
    methods: {
      findOptionsLabel(array, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i].value === value) {
            return array[i].label;
          }
        }
        return "";
      },
      formatDate: function (val) {
        return date.formatDate(val, "DD-MM-YYYY");
      },
      formatDateTime: function (val) {
        return date.formatDate(val, "DD-MM-YYYY HH:mm");
      },
      formatNumber: function (value) {
        if (!value) return "0";
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      formatPrice: function (value) {
        if (!value || value == 0) return "0.00";
        let val = (value / 1).toFixed(2); //.replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      formatPrice4: function (value) {
        if (!value || value == 0) return "0.0000";
        let val = (value / 1).toFixed(4); //.replace('.', ',')
        return val; //val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      validateEmail: function (email) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
      validatePhoneNo: function (value) {
        var reg = /^\d+$/;
        return reg.test(value);
      },
      getImageUrl: function (fileId) {
        return fileId
          ? process.env.API_HOST + "common/viewimg/" + fileId
          : "statics/images/default-avatar.png";
      },
    },
  });
};
