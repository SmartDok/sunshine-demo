<template>
  <div>
    <h2>Filter</h2>
    <example
      code='
      <s-filter-drop-down
        v-model="selected"
        :sections="sections"
      />
      '
      :data="{ sections, selected }"
    />
  </div>
</template>

<script>
import Vue from 'vue';

const itemize = (names, category) => (
  names.map(name => ({ key: `${category}:${name}`, label: name, category }))
);

export default Vue.extend({
  name: 'FilterDemo',

  data() {
    return {
      selected: [],
      sections: [
        {
          label: 'Departments',
          items: itemize(['Alta', 'Oslo', 'Fredrikstad', 'Stockholm'], 'Department'),
        },
        {
          label: 'Groups',
          items: itemize(['Workers', 'Other'], 'Group'),
        },
        {
          label: 'Projects',
          items: itemize(['Main road', 'Apartment building', 'Tunnel'], 'Project'),
        },
        {
          label: 'Users',
          items: itemize(names, 'User'),
        },
      ],
    };
  },
});


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

</script>

