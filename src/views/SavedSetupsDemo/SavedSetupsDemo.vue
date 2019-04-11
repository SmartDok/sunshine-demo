<template>
  <div class="drop-down-demo">
    <div class="header">
      <h1>Saved setups</h1>
    </div>

    <p class="help">
      The <b>s-saved-setups</b> component adds the ability to save, edit and retrieve settings
      for the <a href="http://localhost:8080/table/props"><b>s-table</b></a> component.
    </p>
    <p class="help">
      Creation of a new setup or editing an existing one is done in a dialog, which is visible
      after one of these options has been selected in the components dropdown list.
    </p>

    <br>

    <example
      :code="`
  <s-saved-setups
    :items=&quot;items&quot;
    @save=&quot;onSave&quot;
    @delete=&quot;onDelete&quot;
  />`"
      :data="{ items }"
      :methods="{onSave, onDelete}"
      max-width="16rem"
    />

    <div class="header">
      <h1>API</h1>
    </div>

    <s-tabs>
      <s-tab to="props">
        Props
      </s-tab>
      <s-tab to="slots">
        Slots
      </s-tab>
      <s-tab to="events">
        Events
      </s-tab>
    </s-tabs>

    <router-view />

    <!--div class="header">
      <h1>Examples</h1>
    </div-->

    <todo-list />
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
