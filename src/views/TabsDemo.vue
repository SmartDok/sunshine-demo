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

    <h2>Props s-tabs</h2>
    <props-list>
      None
    </props-list>

    <h2>Props s-tab</h2>
    <props-list>
      <props-item name="to" type="String">
        The url the tab links to.
      </props-item>
    </props-list>

    <todo-list>
      <todo>
        Decouple from vue-router, to support more use-cases, including a
        proper example page.
      </todo>
      <todo>Responsive design, side scrolling when necessary.</todo>
    </todo-list>
  </div>
</template>
