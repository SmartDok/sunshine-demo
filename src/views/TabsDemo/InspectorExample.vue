<template>
  <s-inspector-page @submit.prevent="$root.showInspector = false">
    <template v-slot:header>
      <h1>Inspector</h1>
      <h2>02.05.2019</h2>
    </template>

    <template v-slot:footer>
      <div style="text-align: center;">
        <s-button
          primary
          submit
        >
          Lukk
        </s-button>
      </div>
    </template>

    <img
      height="370"
      width="300"
      src="./gul_logo_rgb.png"
    >
  </s-inspector-page>
</template>
