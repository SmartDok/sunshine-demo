<template>
  <div>
    <div class="header">
      <h1>Filter</h1>
    </div>

    <p class="help">
      The <b>s-filter-drop-down</b> component is a filter with predefined groups,
      and items to filter by in these groups. The available groups and theire <br>
      respective filter items is accessed by using the components dropdown list.
      When typing in the input field suggestions will pop up in the dropdown list.
    </p>
    <p class="help">
      Several filter items can be active at the same time. When a filter item
      is chosen its visually represented as a 'box' in the input field. <br>
      A filter item can be removed by closing the 'box' or using the backspace key.
    </p>
    <p class="help">
      The component supports navigation and selection of filter items by using the arrow,
      enter, space and escape key(s).
    </p>

    <br>

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
      The filter component is used together with a table, to let the user filter the content
      in various ways, from a single component.
    </p>

    <br>

    <div class="header">
      <h1>API</h1>
    </div>

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
