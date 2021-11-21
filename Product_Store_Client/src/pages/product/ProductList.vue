<template>
  <div class="q-pa-md">
    <h1>Product List</h1>
    <q-btn
      color="secondary"
      label="Update Multi"
      v-show="showEditBtn"
      @click="handleEditMultiProduct"
    />
    <q-btn
      color="negative"
      label="Delete Multi"
      v-show="showDeleteBtn"
      @click="handleDeleteMultiProduct"
    />
    <q-table
      :rows="productData"
      :columns="columns"
      ref="myTable"
      title="Product Table"
      row-key="name"
      :loading="loading"
      :filter="filter"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="rowSelected"
      @update:selected="handleUpdateSelected"
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
      <!-- BODY-CELL-SLOT --- STATUS -->
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div>
            <q-badge color="purple" :label="props.value" />
          </div>
          <div class="my-table-details">
            {{ props.row.country }}
          </div>
        </q-td>
      </template>
      <!-- BODY-CELL-SLOT --- price -->
      <template v-slot:body-cell-price="props">
        <q-td :props="props">
          <div>
            <q-badge
              v-if="props.row.price === 0 || props.row.price === null"
              color="negative"
              :label="props.row.price"
            />
            <q-badge v-else color="green" :label="props.row.price" />
          </div>
          <div class="my-table-details">
            {{ props.row.country }}
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: "index",
    required: true,
    label: "Index",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
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
  {
    name: "price",
    label: "Price",
    field: "price",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: "quantity", label: "Quantity", field: "quantity", sortable: true },
  { name: "status", label: "Status", field: "status", sortable: true },
  {
    name: "stock",
    label: "Stock",
    field: "stock",
    sortable: true,
  },
];

export default {
  data() {
    return {
      filter: "",
      columns: columns,
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
      productParameters: {
        keyword: "",
        pageNumber: 0,
        pageSize: 15,
      },
      productData: [],
      paginations: {
        rowsPerPage: 15,
        sortBy: "name",
      },
      showEditBtn: false,
      showDeleteBtn: false,
    };
  },
  methods: {
    handleEditMultiProduct: function () {
      alert("update multi products");
    },
    handleDeleteMultiProduct: function () {
      alert("delete multi products");
    },
    handleUpdateSelected: function () {
      if (this.rowSelected.length > 0) {
        this.showEditBtn = true;
        this.showDeleteBtn = true;
      } else {
        this.showEditBtn = false;
        this.showDeleteBtn = false;
      }
    },
    getSelectedString() {
      return this.rowSelected.length === 0
        ? ""
        : `${this.rowSelected.length} record${
            this.rowSelected.length > 1 ? "s" : ""
          } selected of`;
    },
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
    getProductList: function () {
      this.$store
        .dispatch("product/getProductList", this.productParameters)
        .then(
          (res) => {
            this.loading = false;

            // this.productData = Object.entries(res);
            this.productData = res;
            console.log("productData >>>>>", this.productData);
          },
          (error) => {
            this.loading = false;
            console.log(error);
          }
        );
    },
  },
  computed: {},
  mounted() {
    this.getProductList();
  },
};
</script>
