<template>
  <div>
    <h2>Basic icon</h2>
    <example :code='`<s-icon name="Briefcase-1" />`' />

  <h2>Props</h2>
  <props-list>
    <props-item name="name" type="String" required>
        Icon name
    </props-item>
    <props-item name="package" type="String">
        The package where the icon is to be found.
      </props-item>
    </props-list>
  </div>
</template>
