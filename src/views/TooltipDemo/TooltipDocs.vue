<template>
  <p class="help">
    This is a third-party package. See documentation
    <a href="https://github.com/Akryum/v-tooltip">here.</a>.
    <br><br>
    Use version 2.0.2.
    <br><br>
    To avoid naming collisions, the tooltip css class(es) are prefix or
    contains 's-tooltip'. The plugin is configured to use these classes:
    <br><br>
    <code>
      VTooltip.options.popover.defaultClass = '';<br>
      VTooltip.options.popover.defaultBaseClass = 's-tooltip';<br>
      VTooltip.options.popover.defaultLoadingClass = '';<br>
      VTooltip.options.popover.defaultInnerClass = 's-tooltip-inner';<br>
      VTooltip.options.popover.defaultArrowClass = 's-tooltip-arrow';<br>
      VTooltip.options.popover.defaultWrapperClass = 's-tooltip-wrapper';<br>
      VTooltip.options.popover.defaultOpenClass = 's-tooltip-open';<br>
      VTooltip.options.defaultTargetClass = 'has-s-tooltip';<br>
      VTooltip.options.defaultClass = 's-tooltip';<br>
      VTooltip.options.defaultArrowSelector = '.s-tooltip-arrow';<br>
      VTooltip.options.defaultInnerSelector = '.s-tooltip-inner';<br><br>
    </code>
    In addition <code> VTooltip.options.defaultTemplate </code> is changed to reflect
    the changes (see documentation).
  </p>
</template>
