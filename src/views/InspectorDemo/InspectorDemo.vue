<template>
  <div>
    <h1>Inspector</h1>
    <div class="help">
      <p>
        A view that slides in from the left. This view can e. g. be used
        to create forms for registering and edit user data.
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
      :code="`
    <s-button @click=&quot;open = !open&quot;>
      Toggle inspector
    </s-button>

    <s-inspector v-model=&quot;open&quot;>
      <s-inspector-page
        @submit.prevent=&quot;open = false&quot;
      >
        <template v-slot:header>
          <h1>25.08.2018</h1>
          <h2>Tor Erik Olsen</h2>
        </template>

        <template v-slot:footer>
          <div class=&quot;flex&quot;>
            <s-button primary submit>Godkjenn</s-button>
          </div>
        </template>

        <s-accordion>
          <s-accordion-item heading=&quot;Timeføring&quot;>
            <s-grid>
              <s-grid-item :span=&quot;3&quot;>
                <s-text-field
                  v-model=&quot;from&quot;
                  label=&quot;Fra&quot;
                  name=&quot;Fra&quot;
                  format=&quot;00:00&quot;
                />
              </s-grid-item>
              <s-grid-item :span=&quot;3&quot;>
                <s-text-field
                v-model=&quot;to&quot;
                label=&quot;Til&quot;
                name=&quot;Til&quot;
                format=&quot;00:00&quot;
              />
              </s-grid-item>
              <s-grid-item :span=&quot;3&quot;>
                <s-text-field
                  v-model=&quot;pause&quot;
                  label=&quot;Pause&quot;
                />
              </s-grid-item>
              <s-grid-item :span=&quot;3&quot;>
                <s-text-field
                  inactive
                  label=&quot;Timer&quot;
                  value=&quot;7,5&quot;
                />
              </s-grid-item>

              <s-grid-item :span=&quot;12&quot;>
                <s-text-area label=&quot;Kommentar&quot; />
              </s-grid-item>
            </s-grid>
          </s-accordion-item>

          <s-accordion-item>
            <template v-slot:heading>Prosjekt og aktivitet</template>

            <s-grid>
              <s-grid-item :span=&quot;12&quot;>
                <s-drop-down
                  :items=&quot;projects&quot;
                  label=&quot;Prosjekt&quot;
                />
              </s-grid-item>

              <s-grid-item :span=&quot;9&quot;>
                <s-text-field label=&quot;Underprosjekt&quot; />
              </s-grid-item>

              <s-grid-item :span=&quot;3&quot;>
                <s-text-field
                  v-model=&quot;pause&quot;
                  label=&quot;Antall&quot;
                />
              </s-grid-item>

              <s-grid-item :span=&quot;6&quot;>
                <s-text-field
                  v-model=&quot;activity&quot;
                  label=&quot;Aktivitet&quot;
                />
              </s-grid-item>

              <s-grid-item :span=&quot;6&quot;>
                <s-text-field
                  v-model=&quot;area&quot;
                  label=&quot;Område&quot;
                />
              </s-grid-item>
            </s-grid>
          </s-accordion-item>

          <s-accordion-item>
            <template v-slot:heading>Lønn og tillegg</template>

            <s-grid>
              <s-grid-item :span=&quot;9&quot;>
                <s-text-field
                  v-model=&quot;wage&quot;
                  label=&quot;Lønnsart&quot;
                />
              </s-grid-item>

              <s-grid-item :span=&quot;3&quot;>
                <s-text-field
                  v-model=&quot;pause&quot;
                  label=&quot;Antall&quot;
                />
              </s-grid-item>

              <s-grid-item
                v-for=&quot;(label, i) in additions&quot;
                :key=&quot;i&quot;
                :span=&quot;6&quot;
              >
                <s-text-field :label=&quot;label&quot; />
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
      </s-inspector-page>
    </s-inspector>`"
      :data="{ ...$data, required: 'required' }"
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
