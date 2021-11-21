<template>
  <q-dialog v-model="show_dialog">
    <q-card style="width: 600px; max-width: 60vw">
      <q-card-section>
        <q-btn
          round
          flat
          dense
          icon="close"
          class="float-right"
          color="grey-8"
          v-close-popup
        ></q-btn>
        <div class="text-h6">Update Item</div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none">
        <q-form class="q-gutter-md">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Currency Name</q-item-label>
                <q-input dense outlined v-model="editedItem.name" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Code</q-item-label>
                <q-input dense outlined v-model="editedItem.code" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Buy</q-item-label>
                <q-input dense outlined v-model="editedItem.buyRate" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Spot</q-item-label>
                <q-input dense outlined v-model="editedItem.spotRate" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Sell</q-item-label>
                <q-input dense outlined v-model="editedItem.sellRate" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Symbol</q-item-label>
                <q-input dense outlined v-model="editedItem.symbol" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs"
                  >Status:Active/Disable</q-item-label
                >
                <q-input dense outlined v-model="editedItem.status" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-form>
      </q-card-section>
      <q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            color="warning"
            dense
            v-close-popup
          ></q-btn>
          <q-btn
            flat
            label="OK"
            color="primary"
            dense
            v-close-popup
            @click="updateRow"
          ></q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "Edit Product Form",
  data() {
    return {
      editedItem: null,
      show_dialog: false,
    };
  },
  props: {
    isEditted: Boolean,
    rowSelected: Object,
  },
  methods: {
    updateRow: function () {},
  },
  mounted() {},
};
</script>

<style scoped></style>
