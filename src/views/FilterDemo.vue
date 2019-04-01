<template>
  <div>
    <h2>Filter</h2>
    <example
      code='
      <s-filter-drop-down
        v-model="selected"
        :sections="data.sections"
      />
      '
      :data="{ data: { sections }, selected }"
    />

    <p class="help">
      Filter component is used together with a table, to let the user filter the content
      in various ways, from a single component.
    </p>

    <h2>Props</h2>

    <props-list>
      <props-item name="sections" type="Array<Object>" required>
        An array of objects defining each section of available fitlers.

        <p>Each element contains the following attributes:</p>

        <props-list>
          <props-item name="label" type="String" required>
            The name of the section, shown to the user.
          </props-item>

          <props-item name="items" type="Array<Object>" required>
            The filter items available inside the section.
            Each with the following attributes:

            <props-list>
              <props-item name="key" type="String" required>
                Unique key for the item (must be unique within the section).
              </props-item>

              <props-item name="label" type="String" required>
                The name of the item, shown to the user.
              </props-item>

              <props-item name="category" type="String">
                A name shown to the user, to make it possible to distinguish between
                items in different sections. Not really required by the component, but
                most of the time, it should be included.
              </props-item>

              <props-item name="type" type="String">
                Not really necessary for the component, but most of the time, it's
                necessary to include a <b>type</b> attribute, to be able to distinguish
                between selected items. The type "search" is reserved by the component,
                and should not be used.
              </props-item>
            </props-list>
          </props-item>
        </props-list>
      </props-item>

      <props-item name="value" type="Array<Object>">
        The input value, normally used with <b>v-model</b>. It contains the currently
        selected items, in the order they are shown from left to right.

        <p>
          In addition to the items provided in <b>sections</b>, one item with the <b>type</b>
          of "search" may also be included.
        </p>
      </props-item>

      <props-item name="loading" type="Boolean">
        True if data for <b>sections</b> is currently being loaded, and the component will
        show a loading indicator.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

const itemize = (names, category) => (
  names.map(name => ({ key: name, label: name, category }))
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
