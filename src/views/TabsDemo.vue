<template>
  <div>
    <h2>Tabs</h2>
    <example :code='`\
    <s-tabs>
      <s-tab to="?first">Button</s-tab>
      <s-tab to="?second">Tabs</s-tab>
      <s-tab to="?third">Button</s-tab>
    </s-tabs>
    `'
    />

    <todo-list>
      <todo>Decouple from vue-router, to support more use-cases, including a proper example page.</todo>
      <todo>Responsive design, side scrolling when necessary.</todo>
    </todo-list>
  </div>
</template>
