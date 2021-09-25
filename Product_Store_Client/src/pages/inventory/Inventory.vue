<template>
  <div class="q-pa-md">
    <h1>Inventory List</h1>
    <q-table
      ref="myTable"
      title="User Table"
      :data="inventoryData"
      :columns="columns"
      row-key="name"
      selection="multiple"
      :loading="loading"
      :filter="filter"
      paginations="paginations"
      v-model:selected="selectedRows"
    >
      <!-- COMBOBOX -->
      <template v-slot:top-left>
        <div class="q-pa-md row">
          <div>
            <div>{{ userSelected }}</div>
            <q-select
              color="purple-12"
              v-model="userSelected"
              ref="userSelected"
              :options="options"
              option-value="value"
              option-label="label"
              label="Standard"
              style="min-width: 200px"
              emit-value
              map-options
              @input="userFilterChange"
              use-input
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
            </q-select>
          </div>
          <!-- Action buttons -->
          <div class="q-ml-xl">
            <q-btn
              color="primary"
              class="q-ml-lg"
              label="Add"
              v-on:click="addUser"
            />
            <q-btn
              color="primary"
              class="q-ml-lg"
              label="Update"
              v-on:click="updateUser"
            />
            <q-btn
              color="negative"
              class="q-ml-lg"
              label="Delete"
              v-on:click="deleteUser"
            />
          </div>
        </div>
      </template>

      <!-- SEARCH BOX -->
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="100"
          v-model="filter"
          ref="filter"
          placeholder="Search"
          @keydown="searchUser(filter)"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const columns = [
  {
    name: "index",
    required: true,
    label: "Index",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "category",
    align: "center",
    label: "Category",
    field: "idCategory",
    sortable: true,
  },
  { name: "company", label: "Company", field: "idCompany", sortable: true },
  { name: "price", label: "Price", field: "price" },
  { name: "quantity", label: "Quantity", field: "quantity" },
  { name: "status", label: "Status", field: "status" },
  {
    name: "stock",
    label: "Stock",
    field: "stock",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default {
  name: "Inventory",

  data() {
    return {
      filter: "",
      columns: columns,
      rows: rows,
      rowSelected: [],
      selectedRows: [],
      loading: false,
      userData: [],
      options: [
        { value: "value", label: "label" },
        { value: "value1", label: "label1" },
        { value: "value2", label: "label2" },
      ],
      userSelected: null,
      inventoryData: [],
    };
  },
  computed: {
    ...mapGetters("product", ["productList"]),
  },
  methods: {
    addUser: function () {
      alert("Add user");
    },
    updateUser: function () {
      alert("Update user");
    },
    deleteUser: function () {
      alert("Delete user");
    },
    userFilterChange: function (input) {},
    searchUser: function (input) {
      if (input != "") {
        this.userData = rows.filter((row) => {
          return row.name.toUpperCase().includes(input.toUpperCase());
        });
      } else {
        this.userData = this.rows;
      }
    },
    loadProducts: function () {
      debugger;
      console.log("productList at Inventory>>>>>>>", this.productList);
      this.inventoryData = this.productList;
      // console.log("productList $store", this.store.getters.productList);
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>
