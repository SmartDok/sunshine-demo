<template>
  <div>
    <h2>Tabs</h2>
    <example :code='`\
    <s-tabs>
      <s-tab to="?first">First</s-tab>
      <s-tab to="?second">Second</s-tab>
      <s-tab to="?third">Third</s-tab>
    </s-tabs>
    `'
    />

    <todo-list>
      <todo>Decouple from vue-router, to support more use-cases, including a proper example page.</todo>
      <todo>Responsive design, side scrolling when necessary.</todo>
    </todo-list>
  </div>
</template>
