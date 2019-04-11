<template>
  <div>
    <h2>Filter</h2>
    <example
      code="
      <s-filter-drop-down
        v-model=&quot;value&quot;
        :sections=&quot;data.sections&quot;
      />
      "
      :data="{ data: { sections }, value }"
    />

    <p class="help">
      Filter component is used together with a table, to let the user filter the content
      in various ways, from a single component.
    </p>

    <h2>Props</h2>

    <props-list>
      <props-item
        name="sections"
        type="Array<Object>"
        required
      >
        An array of objects defining each section of available fitlers.

        <p>Each element contains the following attributes:</p>

        <props-list>
          <props-item
            name="key"
            type="String"
            required
          >
            A unique key for each section. The value emitted by the filter component will be
            a list of concatenated keys on the form <code>section-key:item-key</code>.
          </props-item>

          <props-item
            name="label"
            type="String"
            required
          >
            The name of the section, shown to the user.
          </props-item>

          <props-item
            name="items"
            type="Array<Object>"
            required
          >
            The filter items available inside the section.
            Each with the following attributes:

            <props-list>
              <props-item
                name="key"
                type="String"
                required
              >
                Unique key for the item (must be unique within the section).
              </props-item>

              <props-item
                name="label"
                type="String"
                required
              >
                The name of the item, shown to the user.
              </props-item>

              <props-item
                name="category"
                type="String"
              >
                A name shown to the user, to make it possible to distinguish between
                items in different sections. Not really required by the component, but
                most of the time, it should be included.
              </props-item>

              <props-item
                name="type"
                type="String"
              >
                Not really necessary for the component, but most of the time, it's
                necessary to include a <b>type</b> attribute, to be able to distinguish
                between selected items. The type "search" is reserved by the component,
                and should not be used.
              </props-item>
            </props-list>
          </props-item>
        </props-list>
      </props-item>

      <props-item
        name="value"
        type="Array<Object>"
      >
        The input value, normally used with <b>v-model</b>. It contains the currently
        selected items, in the order they are shown from left to right.

        <p>
          In addition to the items provided in <b>sections</b>, one item with the <b>type</b>
          of "search" may also be included.
        </p>
      </props-item>

      <props-item
        name="loading"
        type="Boolean"
      >
        True if data for <b>sections</b> is currently being loaded, and the component will
        show a loading indicator.
      </props-item>
    </props-list>
  </div>
</template>

<script>
import Vue from 'vue';

const itemize = (names, category) => (
  names.map(name => ({ key: name.toLowerCase(), label: name, category }))
);

const names = `\
Tosha Groce
Deloris Ashworth
Jonelle Pridgen
Olene Saavedra
Cythia Moeller
Arnette Lehmann
Yadira Jolley
Danna Romeo
Cammie Riddle
Rebeca Berlin
Jenise Bollinger
Alba Ridley
Jame Diggs
Jeana Thomason
Stephen Keating
Jacquiline Lehman
Denna Edgar
Roxann Levy
Gearldine Vazquez
Sherice Newkirk
Kareen Corona
Lizzette Wiggins
Angle Yoder
Lili Arrington
Hermina Isaacson
Vivienne Funderburk
Kaitlin Aldridge
Velvet Willson
Nikole Kirkland
Virgina Koch
Trinidad Osburn
Elenore Burt
Letisha Bateman
Ray Mcintosh
Joannie Espino
Cammy Guess
Refugio Register
Tenesha Haller
Lilliam Castleberry
Catalina Higginbotham
Myrle Doherty
Helena Thorn
Tommy Ackerman
Sena Horn
Kelle Best
Eugene David
Yolande Rau
Sasha Begley
Lisandra Lister
Quiana Flanagan
Brynn Crouse
Yoko Slater
Tai Lankford
Odette Charles
Myrtis Amaya
Jenni Ransom
Merissa Cortes
Mirella Malcolm
Leesa Wray
Dusti Grubb
Shelli Shackelford
Aretha Mccune
Lynnette Dotson
Audry Lake
Lyndsey Wesley
Moon Garnett
Alethea Mccool
Shanti Apodaca
Lavon Wu
Rima Messer
Rosario Whitehurst
Catherin Brannon
Kristal Ives
Sallie Skaggs
Corrine Fair
Linnie Mcmaster
Lacy Cooley
Piper Her
Trudi Hostetler
Emelina Griffiths
Dorthy Anaya
Pennie Blalock
Chantal Bumgarner
Clotilde Schwarz
Lue Duggan
Pansy Sutherland
Clarita English
Avelina Sands
Dorla Bowling
Annita Koontz
Marge Nagel
Missy Knudsen
Eloisa Randle
Jeanie Witte
Bong Norwood
Erminia Bowens
Ashlee Hogue
Sha Huffman
Dierdre Reedy
Gilma Sommers
`.split('\n');

export default Vue.extend({
  name: 'FilterDemo',

  data() {
    return {
      value: {
        filters: [],
        search: '',
      },
      sections: [
        {
          key: 'departments',
          label: 'Departments',
          items: itemize(['Alta', 'Oslo', 'Fredrikstad', 'Stockholm'], 'Department'),
        },
        {
          key: 'groups',
          label: 'Groups',
          items: itemize(['Workers', 'Other'], 'Group'),
        },
        {
          key: 'projects',
          label: 'Projects',
          items: itemize(['Main road', 'Apartment building', 'Tunnel'], 'Project'),
        },
        {
          key: 'users',
          label: 'Users',
          items: itemize(names, 'User'),
        },
      ],
    };
  },
});
</script>
