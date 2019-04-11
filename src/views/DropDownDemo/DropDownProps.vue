<template>
  <props-list>
    <props-item
      name="items"
      type="Array<key: String, value: String>"
    >
      An array of objects where each object is an item in the list.
    </props-item>
    <props-item
      name="value"
      type="Array<key: String, value: String>"
    >
      The selected item(s) in drop down. Updated automatically when used with v-model.
    </props-item>
    <props-item
      name="labelKey"
      type="String"
    >
      Sets the name for the label key. Default: label
    </props-item>
    <props-item
      name="error"
      type="String"
    >
      If an error message is present the dropdown gets a red border and the error
      message is displayed below.
    </props-item>
    <props-item
      name="search"
      type="Boolean"
    >
      Enables search.
    </props-item>
    <props-item
      name="multiple"
      type="Boolean"
    >
      Enables multiselect.
    </props-item>

    <!-- Are allowMissing and maxSelectedShown meant to be documentet, or are
    these for internal use only -->
  </props-list>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'DropDownProps',
});
</script>
