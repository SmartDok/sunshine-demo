<template>
  <s-inspector-page @submit.prevent="$root.showInspector = false">
    <template v-slot:header>
      <h1>Header text</h1>
    </template>

    <template v-slot:footer>
      <div class="flex">
        <s-button
          primary
          submit
        >
          Godkjenn
        </s-button>
      </div>
    </template>

    <s-accordion>
      <s-accordion-item heading="Timeføring">
        <s-grid>
          <s-grid-item :span="3">
            <s-text-field
              v-model="from"
              label="Fra"
              name="Fra"
              format="00:00"
            />
          </s-grid-item>
          <s-grid-item :span="3">
            <s-text-field
              v-model="to"
              label="Til"
              name="Til"
              format="00:00"
            />
          </s-grid-item>
          <s-grid-item :span="3">
            <s-text-field
              v-model="pause"
              label="Pause"
            />
          </s-grid-item>
          <s-grid-item :span="3">
            <s-text-field
              inactive
              label="Timer"
              value="7,5"
            />
          </s-grid-item>

          <s-grid-item :span="12">
            <s-text-area label="Kommentar" />
          </s-grid-item>
        </s-grid>
      </s-accordion-item>

      <s-accordion-item>
        <template v-slot:heading>
          Prosjekt og aktivitet
        </template>

        <s-grid>
          <s-grid-item :span="12">
            <s-drop-down
              :items="projects"
              label="Prosjekt"
            />
          </s-grid-item>

          <s-grid-item :span="9">
            <s-text-field label="Underprosjekt" />
          </s-grid-item>

          <s-grid-item :span="3">
            <s-text-field
              v-model="pause"
              label="Antall"
            />
          </s-grid-item>

          <s-grid-item :span="6">
            <s-text-field
              v-model="activity"
              label="Aktivitet"
            />
          </s-grid-item>

          <s-grid-item :span="6">
            <s-text-field
              v-model="area"
              label="Område"
            />
          </s-grid-item>
        </s-grid>
      </s-accordion-item>

      <s-accordion-item>
        <template v-slot:heading>
          Lønn og tillegg
        </template>

        <s-grid>
          <s-grid-item :span="9">
            <s-text-field
              v-model="wage"
              label="Lønnsart"
            />
          </s-grid-item>

          <s-grid-item :span="3">
            <s-text-field
              v-model="pause"
              label="Antall"
            />
          </s-grid-item>

          <s-grid-item
            v-for="(label, i) in additions"
            :key="i"
            :span="6"
          >
            <s-text-field :label="label" />
          </s-grid-item>
        </s-grid>
      </s-accordion-item>

      <s-accordion-item>
        <template v-slot:heading>
          Maskintimer
        </template>

        <p>
          Maskintimer
        </p>
      </s-accordion-item>
    </s-accordion>
  </s-inspector-page>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'InspectorExample',

  data() {
    return {
      from: '08:00',
      to: '16:00',
      pause: '30',
      activity: 'Boring',
      wage: '',
      area: '',

      projects: [
        { key: 1, label: 'Nybygg' },
        { key: 2, label: 'Gammelbygg' },
        { key: 3, label: 'Veiprosjekt' },
        { key: 4, label: 'Graveprosjekt' },
        { key: 5, label: 'Brøyteprosjekt' },
      ],

      additions: [
        'Nattillegg',
        'Helgtillegg',
        'Risikotillegg',
        'Overtid 50%',
        'Overtid 100%',
        'Overtid 125%',
        'Ustyrstillegg',
        'Hjelmtillegg',
        'Bråktillegg',
        'Timetillegg',
      ].concat([...Array(20).keys()].map(n => `Andre tillegg ${n + 1}`)),
    };
  },
});
</script>
