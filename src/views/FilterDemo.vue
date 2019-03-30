<template>
  <div>
    <h2>Filter</h2>
    <example
      code='
      <s-filter-drop-down
        v-model="selected"
        :sections="sections"
      />
      '
      :data="{ sections, selected }"
    />
  </div>
</template>

<script>
import Vue from 'vue';

const itemize = (names, category) => (
  names.map(name => ({ key: name, label: name, extendedLabel: `${name} (${category})` }))
);

export default Vue.extend({
  name: 'FilterDemo',

  data() {
    return {
      selected: [],
      sections: [
        {
          label: 'Departments',
          items: itemize(['Alta', 'Oslo', 'Fredrikstad', 'Stockholm'], 'Department'),
        },
        {
          label: 'Groups',
          items: itemize(['Workers', 'Other'], 'Group'),
        },
        {
          label: 'Projects',
          items: itemize(['Main road', 'Apartment building', 'Tunnel'], 'Project'),
        },
      ],
    };
  },
});
</script>
