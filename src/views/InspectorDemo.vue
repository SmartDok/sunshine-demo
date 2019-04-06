<template>
  <div>
    <example :code='`
    <s-button @click="open = !open">Toggle inspector</s-button>

    <s-inspector
      v-model="open"
      @submit.prevent="open = false"
    >
      <template v-slot:header>
        <h1>25.08.2018</h1>
        Tor Erik Olsen
      </template>

      <template v-slot:footer>
        <div class="flex">
          <s-button primary submit>Godkjenn</s-button>
        </div>
      </template>

      <s-accordion>
        <s-accordion-item heading="Timeføring">
          <s-grid>
            <s-grid-item :span="3">
              <s-text-field v-model="from" label="Fra" name="Fra" format="00:00" />
            </s-grid-item>
            <s-grid-item :span="3">
              <s-text-field v-model="to" label="Til" name="Til" format="00:00" />
            </s-grid-item>
            <s-grid-item :span="3">
              <s-text-field v-model="pause" label="Pause" />
            </s-grid-item>
            <s-grid-item :span="3">
              <s-text-field inactive label="Timer" value="7,5" />
            </s-grid-item>

            <s-grid-item :span="12">
              <s-text-area label="Kommentar" />
            </s-grid-item>
          </s-grid>
        </s-accordion-item>

        <s-accordion-item>
          <template v-slot:heading>Prosjekt og aktivitet</template>

          <s-grid>
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
          </s-grid>
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
      :data="{ ...$data, required: 'required' }"
      max-width="16rem"
    />

    <p class="help">
      The inspector content is wrapped in a <b>form</b> element. Additional attributes and
      event listeners are passed to this element. Most of the time, users would want to
      handle the <b>submit</b> event, as in the example above.
    </p>

   <h2>Props</h2>
    <props-list>
      <props-item name="show" type="Boolean" required>
        Sets the visible state of the inspector. Can be used with v-model. Default: false.
      </props-item>
      <br>This component has two named slots; header and footer. Use these to place
      content above or/and below the main content of the inspector.
    </props-list>

    <todo-list>
      <todo>Define layout (width, margin, padding).</todo>
      <todo>Inline layout (main page content and inspector side-by-side with spacing between.</todo>
      <todo>Proper layout on legacy pages, with space for SmartDok header above.</todo>
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
      open: false,
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
