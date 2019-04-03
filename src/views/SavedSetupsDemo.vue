<template>
  <div class="drop-down-demo">
    <h2>Saved setups</h2>
    <example
      :code='`<s-saved-setups :items="items" @save="onSave" @delete="onDelete" />`'
      :data="{items}"
      :methods="{onSave, onDelete}"
    />

    <todo-list>
    </todo-list>

    <h2>Props</h2>
    <props-list>
      <props-item name="items" type="Array<key: String, label: String>">
          An array of objects where each object is an item in the list.
      </props-item>
    </props-list>

    <h2>Events</h2>
    <props-list>
      <props-item name="@save">
        When save is confirmed in the dialog, the newly created/edited item, and it's label
        is emitted.
      </props-item>
      <props-item name="@delete">
        When delete is confirmed in the dialog the item is emitted.
      </props-item>
      <props-item name="@select">
        Emits the item that is selected.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DropDownDemo',

  data() {
    return {
      items: [
        'Hours this week',
      ].map(n => ({ key: n, label: n })),
    };
  },

  methods: {
    onSave(item, label) {
      if (item) {
        item.label = label;
      } else {
        this.items.push({ key: label, label });
      }
    },

    onDelete(item) {
      const index = this.items.findIndex(i => i.key === item.key);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
  },
});
</script>
