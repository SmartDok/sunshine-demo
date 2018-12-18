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

          <s-grid>
            <s-grid-item :span="3">
              <s-text-field v-model="from" label="Fra" format="00:00" />
            </s-grid-item>
            <s-grid-item :span="3">
              <s-text-field v-model="to" label="Til" format="00:00" />
            </s-grid-item>
            <s-grid-item :span="3">
              <s-text-field v-model="pause" label="Pause" />
            </s-grid-item>
            <s-grid-item :span="3">
              <s-text-field inactive label="Timer" value="7,5" />
            </s-grid-item>
          </s-grid>

          <p>
            Dette er en kommentar
          </p>
        </s-accordion-item>

        <s-accordion-item>
          <template slot="heading">Prosjekt og aktivitet</template>

          <div class="grid">
            <s-grid-item :span="12">
              <s-drop-down v-model="project" :items="projects" label="Prosjekt" />
            </s-grid-item>

            <s-grid-item :span="9">
              <s-text-field v-model="subProject" label="Underprosjekt" />
            </s-grid-item>

            <s-grid-item :span="3">
              <s-text-field v-model="pause" label="Antall" />
            </s-grid-item>

            <s-grid-item :span="6">
              <s-text-field class="grid-item--span-6" v-model="activity" label="Aktivitet" />
            </s-grid-item>

            <s-grid-item :span="6">
              <s-text-field class="grid-item--span-6" v-model="area" label="Område" />
            </s-grid-item>
          </div>
        </s-accordion-item>

        <s-accordion-item>
          <template slot="heading">Lønn og tillegg</template>

          <s-grid>
            <s-grid-item :span="9">
              <s-text-field v-model="wage" label="Lønnsart" />
            </s-grid-item>

            <s-grid-item :span="3">
              <s-text-field class="grid-item--span-3" v-model="pause" label="Antall" />
            </s-grid-item>

            <s-grid-item v-for="i in 20" :key="i" :span="6">
              <s-text-field :label="`Tillegg ${i}`" />
            </s-grid-item>
          </s-grid>
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
      project: null,
      subProject: '',
      activity: 'Boring',
      wage: '',
      area: '',

      projects: [
        {title: 'Nybygg'},
        {title: 'Gammelbygg'},
        {title: 'Veiprosjekt'},
        {title: 'Graveprosjekt'},
        {title: 'Brøyteprosjekt'},
      ],
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

