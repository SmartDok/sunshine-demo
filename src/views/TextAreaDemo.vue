<template>
  <div>
    <h2>Standard inputs</h2>
    <p class="help">By default, text areas automatically get bigger when text is added.</p>
    <example :code="standard" :data="{ text: ''}"/>

    <p class="help">
     For more examples: <router-link to="/textarea-demo">Textarea demo page</router-link>
    </p>

    <h2>Props</h2>

    <props-list>
      <props-item name="label" type="String">
        The label shown in the textarea.
      </props-item>
      <props-item name="placeholder" type="String">
        The placeholder of the textarea. Disappears when user starts typing.
      </props-item>
      <props-item name="value" type="String">
       Sets the content of the textarea. If v-model is used this
       prop is automatically updated while typing.
      </props-item>
      <props-item name="intirows" type="Number">
        The initial height of the textarea in rows. Default: 2.
      </props-item>
      <props-item name="maxrows" type="Number">
        The maximum height of the textarea in rows. Default: 10.
      </props-item>
      <props-item name="inactive" type="Boolean">
       Sets the textarea to an inactive state.
      </props-item>
      <props-item name="readonly" type="Boolean">
       Sets the textarea to a read only state.
      </props-item>
    </props-list>

    <h2>Events</h2>

    <props-list>
      <props-item name="@input">
        Fires when the value prop has changed, and passes by the value.
      </props-item>
    </props-list>

    <todo-list>
      <todo>Fit content attribute? Given content as value, TextArea displays all the content.</todo>
      <todo>State when in readonly?</todo>
      <todo>Scrollbard design?</todo>
    </todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextAreaDemo',

  computed: {
    standard() {
      return `\
        <s-text-area label="Comments" v-model="text" />
      `;
    },

    placeholder() {
      return `\
        <p><s-text-area placeholder="Placeholder.." v-model="text" /></p>
        <p><s-text-area placeholder="Placeholder.." label="Label" v-model="text" /></p>
      `;
    },

    readonly() {
      return `\
        <s-text-area value="Lorum ipsum dolor sit amet." readonly />
      `;
    },

    inactive() {
      return `\
        <p><s-text-area label="Inactive area" inactive/></p>
        <p><s-text-area label="Inactive area" value="With text" inactive/></p>
      `;
    },
  },
});
</script>
