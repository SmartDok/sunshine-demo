<template>
  <div class="drop-down-demo">
    <h2>Saved setups</h2>
    <example
      :code='`<s-saved-setups :items="items" @save="onSave" @delete="onDelete" />`'
      :data="{items}"
      :methods="{onSave, onDelete}"
      max-width="16rem"
    />

    <todo-list>
    </todo-list>
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
