import { VueConstructor } from 'vue';
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip';

const applySettings = (): void => {
  // Set the VTooltip scss
  VTooltip.options.popover.defaultClass = '';
  VTooltip.options.popover.defaultBaseClass = 's-tooltip';
  VTooltip.options.popover.defaultLoadingClass = '';
  VTooltip.options.popover.defaultInnerClass = 's-tooltip-inner';
  VTooltip.options.popover.defaultArrowClass = 's-tooltip-arrow';
  VTooltip.options.popover.defaultWrapperClass = 's-tooltip-wrapper';
  VTooltip.options.popover.defaultOpenClass = 's-tooltip-open';

  VTooltip.options.defaultTargetClass = 'has-s-tooltip';
  VTooltip.options.defaultClass = 's-tooltip';
  VTooltip.options.defaultArrowSelector = '.s-tooltip-arrow';
  VTooltip.options.defaultInnerSelector = '.s-tooltip-inner';
  VTooltip.options.defaultTemplate = '<div class="s-tooltip" role="tooltip"><div class="s-tooltip-arrow"></div><div class="s-tooltip-inner"></div></div>';
  VTooltip.options.defaultDelay = 350;
};

const Tooltip = {
  install(Vue: VueConstructor) {
    applySettings();
    Vue.directive('tooltip', VTooltip);
    Vue.directive('close-popover', VClosePopover);
    Vue.component('v-popover', VPopover);
  },
};

export default Tooltip;
