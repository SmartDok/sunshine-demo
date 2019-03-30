<template>
  <div>
    <example :code='`
    <s-button @click="open = !open">Toggle inspector</s-button>

    <s-inspector v-model="open">
      <template v-slot:header>
        <h1>25.08.2018</h1>
        Tor Erik Olsen
      </template>

      <template v-slot:footer>
        <div class="flex">
          <s-button primary>Godkjenn</s-button>
        </div>
      </template>

      <s-accordion>
        <s-accordion-item>
          <template v-slot:heading>Timeføring</template>

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
          <template v-slot:heading>Prosjekt og aktivitet</template>

          <div class="grid">
            <s-grid-item :span="12">
              <s-drop-down :items="projects" label="Prosjekt" />
            </s-grid-item>

            <s-grid-item :span="9">
              <s-text-field label="Underprosjekt" />
            </s-grid-item>

            <s-grid-item :span="3">
              <s-text-field v-model="pause" label="Antall" />
            </s-grid-item>

            <s-grid-item :span="6">
              <s-text-field v-model="activity" label="Aktivitet" />
            </s-grid-item>

            <s-grid-item :span="6">
              <s-text-field v-model="area" label="Område" />
            </s-grid-item>
          </div>
        </s-accordion-item>

        <s-accordion-item>
          <template v-slot:heading>Lønn og tillegg</template>

          <s-grid>
            <s-grid-item :span="9">
              <s-text-field v-model="wage" label="Lønnsart" />
            </s-grid-item>

            <s-grid-item :span="3">
              <s-text-field v-model="pause" label="Antall" />
            </s-grid-item>

            <s-grid-item v-for="(label, i) in additions" :key="i" :span="6">
              <s-text-field :label="label" />
            </s-grid-item>
          </s-grid>
        </s-accordion-item>

        <s-accordion-item>
          <template v-slot:heading>Maskintimer</template>

          <p>
            Maskintimer
          </p>
        </s-accordion-item>

      </s-accordion>
    </s-inspector>`'
    :data="$data"
    />

    <todo-list>
      <todo>Define layout (width, margin, padding).</todo>
      <todo>Inline layout (main page content and inspector side-by-side with spacing between.</todo>
      <todo>Proper layout on legacy pages, with space for SmartDok header above.</todo>
      <todo>Responsive layout (switch to modal on small screens?)</todo>
      <todo>Define inspector header according to design (back arrow etc.)</todo>
    </todo-list>

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
      activity: 'Boring',
      wage: '',
      area: '',

      projects: [
        { label: 'Nybygg' },
        { label: 'Gammelbygg' },
        { label: 'Veiprosjekt' },
        { label: 'Graveprosjekt' },
        { label: 'Brøyteprosjekt' },
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
