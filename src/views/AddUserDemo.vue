<template>
  <div class="user-demo">
    <div class="user-demo-scale-container" :class="{'open': open}">
      <div class="user-demo-page">
        <div class="user-demo-header">
          <s-button @click="open = !open">Add user</s-button>
        </div>
        <div class="user-demo-fill">
          <p v-for="n in 100" :key="n">Lorem ipsum</p>
        </div>
      </div>
      <div class="user-demo-inspector-placeholder"></div>
    </div>

    <s-inspector v-model="open">
      <template v-slot:header>
        <h1>Ny bruker</h1>
      </template>

      <s-accordion>
        <s-accordion-item>
          <template v-slot:heading>Brukerinformasjon</template>
        </s-accordion-item>

        <s-accordion-item>
          <template v-slot:heading>Brukernavn og passord</template>
        </s-accordion-item>

        <s-accordion-item>
          <template v-slot:heading>Rolle og tilgang</template>
        </s-accordion-item>

        <s-accordion-item>
          <template v-slot:heading>Pårørende</template>
        </s-accordion-item>
      </s-accordion>

      <template v-slot:footer>
        <s-button @click="open = !open">Avbryt</s-button>
        <s-button :primary="formReady">Opprett bruker</s-button>
      </template>
    </s-inspector>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AddUserDemo',
  data() {
    return {
      open: false,
      formReady: true,
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/tools.scss';

.user-demo {
  overflow: hidden;
}

.user-demo-scale-container {
  display: flex;
}

.user-demo-page {
  position: relative;
  background: #dfdfdf;
  display: flex;
  flex-grow: 2;
  flex-direction: column;
}

.user-demo-header {
  width: 100%;
  background: white;
  padding: 1rem;
}

.user-demo-fill {
  max-height: calc(100vh - 260px);
  overflow-y: scroll;
}

.user-demo-fill * {
  padding: 1rem;
  background: #d4d4d4;
  text-align: right;
}

.user-demo-inspector-placeholder {
  width: 0;
  height: 100vh;
  display: inline-flex;
  transition: width .2s linear;
}

.user-demo-scale-container.open .user-demo-inspector-placeholder {
  width: 384px;
  padding: 1.5rem;
}

</style>
