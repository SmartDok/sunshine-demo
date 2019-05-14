<template>
  <div>
    <h1>Inspector</h1>
    <div class="help">
      <p>
        A view that slides in from the left. This view can e. g. be used
        to create forms for registering and edit user data.
      </p>

      <p>
        In practice, most of the time we don't actually use the
        <code>s-inspector</code> component directly, but we use the
        <code>s-base-layout</code> component, and we put the content for the
        inspector inside the <code>inspector</code> slot. In this demo page,
        the entire page is wrapped in <code>s-page-layout</code>, and the
        actual inspector content is injected from the Vue router. This is not
        part of the example code that is seen below, but instead the example
        code includes a hidden section that shows the basic structure.
      </p>

      <p>
        The <code>s-inspector-page</code> component defines the layout of the
        content inside the inspector. It is a separate component, because we
        ofter want to have <b>one</b> inspector, that can display different
        content, in different scenarios.
      </p>

      <p>
        The inspector page content is wrapped in a <b>form</b> element. Additional attributes and
        event listeners are passed to this element. Most of the time, users would want to
        handle the <b>submit</b> event, as in the example above.
      </p>
    </div>

    <h2>Example</h2>
    <example
      :code="code"
      max-width="16rem"
    />

    <h1>API</h1>
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

    <todo-list>
      <todo>Inline layout (main page content and inspector side-by-side with spacing between.</todo>
      <todo>Responsive layout (switch to modal on small screens?)</todo>
      <todo>Define inspector header according to design (back arrow etc.)</todo>
    </todo-list>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'InspectorDemo',

  data() {
    return {
      code: `
      <s-button @click="$root.showInspector = !$root.showInspector">
        Toggle inspector
      </s-button>

      <!-- Example code, see SInspectorExample for the source code for the actual demo -->
      <div v-if="false">
        <s-page-layout :show-inspector="showInspector">
          Main page content

          <template v-slot:inspector>
            <s-inspector-page @submit.prevent="">
              <template v-slot:header>
                Inspector header
              </template>

              <template v-slot:footer>
                Inspector footer
              </template>

              Inspector main content

            </s-inspector-page>
          </template>
        </s-page-layout>
      </div>
      `,
    };
  },
});
</script>
