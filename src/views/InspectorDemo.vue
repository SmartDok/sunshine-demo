<template>
  <div>
    <div class="toggle" @click="open = !open">
      <i class="fas fa-bars" />
    </div>

    <s-inspector v-model="open">
      <div slot="header">
        <h1>25.08.2018</h1>
        Tor Erik Olsen
      </div>

      <div slot="footer">
        <div class="flex">
          <s-button primary>Godkjenn</s-button>
        </div>
      </div>

      <s-accordion>
        <s-accordion-item>
          <template slot="heading">Timeføring</template>

          <div class="grid">
            <s-text-field class="grid-item--span-3" v-model="from" label="Fra" format="00:00" />
            <s-text-field class="grid-item--span-3" v-model="to" label="Til" format="00:00" />
            <s-text-field class="grid-item--span-3" v-model="pause" label="Pause" />
            <s-text-field class="grid-item--span-3" inactive label="Timer" value="7,5" />
          </div>

          <p>
            Dette er en kommentar
          </p>
        </s-accordion-item>

        <s-accordion-item>
          <template slot="heading">Prosjekt og aktivitet</template>

          <div class="grid">
            <s-text-field class="grid-item--span-12" v-model="project" label="Prosjekt" />

            <s-text-field class="grid-item--span-9" v-model="subProject" label="Underprosjekt" />
            <s-text-field class="grid-item--span-3" v-model="pause" label="Antall" />

            <s-text-field class="grid-item--span-6" v-model="activity" label="Aktivitet" />
            <s-text-field class="grid-item--span-6" v-model="area" label="Område" />
          </div>
        </s-accordion-item>

        <s-accordion-item>
          <template slot="heading">Lønn og tillegg</template>

          <div class="grid">
            <s-text-field class="grid-item--span-9" v-model="wage" label="Lønnsart" />
            <s-text-field class="grid-item--span-3" v-model="pause" label="Antall" />
            <s-text-field v-for="i in 20" class="grid-item--span-6" :key="i" :label="`Tillegg ${i}`" />
          </div>
        </s-accordion-item>

        <s-accordion-item>
          <template slot="heading">Maskintimer</template>

          <p>
            Maskintimer
          </p>
        </s-accordion-item>

      </s-accordion>
    </s-inspector>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InspectorDemo',

  data() {
    return {
      open: false,
      from: '09:00',
      to: '16:00',
      pause: '30',
      project: '2tal Utemiljø',
      subProject: '',
      activity: 'Boring',
      wage: '',
      area: '',
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/settings.scss';

.toggle {
  position: absolute;
  top: 0;
  right: 0;
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.5rem;
  background-color: $white;
  text-align: center;
  z-index: 10000;
  cursor: pointer;
}
</style>

