import Vue from 'vue';
import Router from 'vue-router';
import ButtonDemo from '@/views/ButtonDemo/ButtonDemo.vue';
import ButtonProps from '@/views/ButtonDemo/ButtonProps.vue';
import ButtonSlots from '@/views/ButtonDemo/ButtonSlots.vue';
import ButtonEvents from '@/views/ButtonDemo/ButtonEvents.vue';
import CheckboxDemo from '@/views/CheckboxDemo/CheckboxDemo.vue';
import CheckboxProps from '@/views/CheckboxDemo/CheckboxProps.vue';
import CheckboxSlots from '@/views/CheckboxDemo/CheckboxSlots.vue';
import CheckboxEvents from '@/views/CheckboxDemo/CheckboxEvents.vue';
import RadioButtonDemo from '@/views/RadioButtonDemo/RadioButtonDemo.vue';
import RadioButtonProps from '@/views/RadioButtonDemo/RadioButtonProps.vue';
import RadioButtonSlots from '@/views/RadioButtonDemo/RadioButtonSlots.vue';
import RadioButtonEvents from '@/views/RadioButtonDemo/RadioButtonEvents.vue';
import TextFieldDemo from '@/views/TextFieldDemo/TextFieldDemo.vue';
import TextFieldProps from '@/views/TextFieldDemo/TextFieldProps.vue';
import TextFieldSlots from '@/views/TextFieldDemo/TextFieldSlots.vue';
import TextFieldEvents from '@/views/TextFieldDemo/TextFieldEvents.vue';
import DropDownDemo from '@/views/DropDownDemo/DropDownDemo.vue';
import DropDownProps from '@/views/DropDownDemo/DropDownProps.vue';
import DropDownSlots from '@/views/DropDownDemo/DropDownSlots.vue';
import DropDownEvents from '@/views/DropDownDemo/DropDownEvents.vue';
import IconDemo from '@/views/IconDemo/IconDemo.vue';
import IconProps from '@/views/IconDemo/IconProps.vue';
import IconSlots from '@/views/IconDemo/IconSlots.vue';
import IconEvents from '@/views/IconDemo/IconEvents.vue';
import AccordionDemo from '@/views/AccordionDemo/AccordionDemo.vue';
import AccordionProps from '@/views/AccordionDemo/AccordionProps.vue';
import AccordionSlots from '@/views/AccordionDemo/AccordionSlots.vue';
import AccordionEvents from '@/views/AccordionDemo/AccordionEvents.vue';
import InspectorDemo from './views/InspectorDemo/InspectorDemo.vue';
import InspectorProps from './views/InspectorDemo/InspectorProps.vue';
import InspectorSlots from './views/InspectorDemo/InspectorSlots.vue';
import InspectorEvents from './views/InspectorDemo/InspectorEvents.vue';
import DialogDemo from '@/views/DialogDemo/DialogDemo.vue';
import DialogProps from '@/views/DialogDemo/DialogProps.vue';
import DialogSlots from '@/views/DialogDemo/DialogSlots.vue';
import DialogEvents from '@/views/DialogDemo/DialogEvents.vue';
import TabsDemo from '@/views/TabsDemo/TabsDemo.vue';
import TabsProps from '@/views/TabsDemo/TabsProps.vue';
import TabsSlots from '@/views/TabsDemo/TabsSlots.vue';
import TabsEvents from '@/views/TabsDemo/TabsEvents.vue';
import TableDemo from '@/views/TableDemo/TableDemo.vue';
import TableProps from '@/views/TableDemo/TableProps.vue';
import TableSlots from '@/views/TableDemo/TableSlots.vue';
import TableEvents from '@/views/TableDemo/TableEvents.vue';
import SavedSetupsDemo from '@/views/SavedSetupsDemo/SavedSetupsDemo.vue';
import SavedSetupsProps from '@/views/SavedSetupsDemo/SavedSetupsProps.vue';
import SavedSetupsSlots from '@/views/SavedSetupsDemo/SavedSetupsSlots.vue';
import SavedSetupsEvents from '@/views/SavedSetupsDemo/SavedSetupsEvents.vue';
import FilterDemo from '@/views/FilterDemo/FilterDemo.vue';
import FilterProps from '@/views/FilterDemo/FilterProps.vue';
import FilterSlots from '@/views/FilterDemo/FilterSlots.vue';
import FilterEvents from '@/views/FilterDemo/FilterEvents.vue';
import ValidationDemo from '@/views/ValidationDemo/ValidationDemo.vue';
import ChartDemo from '@/views/ChartDemo/ChartDemo.vue';
import ChartProps from '@/views/ChartDemo/ChartProps.vue';
import ChartSlots from '@/views/ChartDemo/ChartSlots.vue';
import ChartEvents from '@/views/ChartDemo/ChartEvents.vue';
import CalendarDemo from '@/views/CalendarDemo/CalendarDemo.vue';
import CalendarProps from '@/views/CalendarDemo/CalendarProps.vue';
import CalendarSlots from '@/views/CalendarDemo/CalendarSlots.vue';
import CalendarEvents from '@/views/CalendarDemo/CalendarEvents.vue';
import DatepickerDemo from '@/views/DatepickerDemo/DatepickerDemo.vue';
import DatepickerProps from '@/views/DatepickerDemo/DatepickerProps.vue';
import DatepickerSlots from '@/views/DatepickerDemo/DatepickerSlots.vue';
import DatepickerEvents from '@/views/DatepickerDemo/DatepickerEvents.vue';
import TextAreaDemo from '@/views/TextAreaDemo/TextAreaDemo.vue';
import TextAreaProps from '@/views/TextAreaDemo/TextAreaProps.vue';
import TextAreaSlots from '@/views/TextAreaDemo/TextAreaSlots.vue';
import TextAreaEvents from '@/views/TextAreaDemo/TextAreaEvents.vue';
import AlertsDemo from '@/views/AlertsDemo/AlertsDemo.vue';
import AlertsProps from '@/views/AlertsDemo/AlertsProps.vue';
import AlertsSlots from '@/views/AlertsDemo/AlertsSlots.vue';
import AlertsEvents from '@/views/AlertsDemo/AlertsEvents.vue';
import MultiselectDemo from '@/views/MultiselectDemo/MultiselectDemo.vue';
import MultiselectProps from '@/views/MultiselectDemo/MultiselectProps.vue';
import MultiselectSlots from '@/views/MultiselectDemo/MultiselectSlots.vue';
import MultiselectEvents from '@/views/MultiselectDemo/MultiselectEvents.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/button',
    },
    {
      path: '/button',
      component: ButtonDemo,
      children: [
        {
          path: '',
          name: 'button',
          redirect: 'props',
        },
        {
          path: 'props',
          component: ButtonProps,
        },
        {
          path: 'slots',
          component: ButtonSlots,
        },
        {
          path: 'events',
          component: ButtonEvents,
        },
      ],
    },
    {
      path: '/checkbox',
      component: CheckboxDemo,
      children: [
        {
          path: '',
          name: 'checkbox',
          redirect: 'props',
        },
        {
          path: 'props',
          component: CheckboxProps,
        },
        {
          path: 'slots',
          component: CheckboxSlots,
        },
        {
          path: 'events',
          component: CheckboxEvents,
        },
      ],
    },
    {
      path: '/radio',
      component: RadioButtonDemo,
      children: [
        {
          path: '',
          name: 'radio',
          redirect: 'props',
        },
        {
          path: 'props',
          component: RadioButtonProps,
        },
        {
          path: 'slots',
          component: RadioButtonSlots,
        },
        {
          path: 'events',
          component: RadioButtonEvents,
        },
      ],
    },
    {
      path: '/textfield',
      component: TextFieldDemo,
      children: [
        {
          path: '',
          name: 'textfield',
          redirect: 'props',
        },
        {
          path: 'props',
          component: TextFieldProps,
        },
        {
          path: 'slots',
          component: TextFieldSlots,
        },
        {
          path: 'events',
          component: TextFieldEvents,
        },
      ],
    },
    {
      path: '/dropdown',
      component: DropDownDemo,
      children: [
        {
          path: '',
          name: 'dropdown',
          redirect: 'props',
        },
        {
          path: 'props',
          component: DropDownProps,
        },
        {
          path: 'slots',
          component: DropDownSlots,
        },
        {
          path: 'events',
          component: DropDownEvents,
        },
      ],
    },
    {
      path: '/alerts',
      component: AlertsDemo,
      children: [
        {
          path: '',
          name: 'alerts',
          redirect: 'props',
        },
        {
          path: 'props',
          component: AlertsProps,
        },
        {
          path: 'slots',
          component: AlertsSlots,
        },
        {
          path: 'events',
          component: AlertsEvents,
        },
      ],
    },
    {
      path: '/icons',
      component: IconDemo,
      children: [
        {
          path: '',
          name: 'icons',
          redirect: 'props',
        },
        {
          path: 'props',
          component: IconProps,
        },
        {
          path: 'slots',
          component: IconSlots,
        },
        {
          path: 'events',
          component: IconEvents,
        },
      ],
    },
    {
      path: '/accordion',
      component: AccordionDemo,
      children: [
        {
          path: '',
          name: 'accordion',
          redirect: 'props',
        },
        {
          path: 'props',
          component: AccordionProps,
        },
        {
          path: 'slots',
          component: AccordionSlots,
        },
        {
          path: 'events',
          component: AccordionEvents,
        },
      ],
    },
    {
      path: '/inspector',
      component: InspectorDemo,
      children: [
        {
          path: '',
          name: 'inspector',
          redirect: 'props',
        },
        {
          path: 'props',
          component: InspectorProps,
        },
        {
          path: 'slots',
          component: InspectorSlots,
        },
        {
          path: 'events',
          component: InspectorEvents,
        },
      ],
    },
    {
      path: '/dialog',
      component: DialogDemo,
      children: [
        {
          path: '',
          name: 'dialog',
          redirect: 'props',
        },
        {
          path: 'props',
          component: DialogProps,
        },
        {
          path: 'slots',
          component: DialogSlots,
        },
        {
          path: 'events',
          component: DialogEvents,
        },
      ],
    },
    {
      path: '/tabs',
      component: TabsDemo,
      children: [
        {
          path: '',
          name: 'tabs',
          redirect: 'props',
        },
        {
          path: 'props',
          component: TabsProps,
        },
        {
          path: 'slots',
          component: TabsSlots,
        },
        {
          path: 'events',
          component: TabsEvents,
        },
      ],
    },
    {
      path: '/saved-setups',
      component: SavedSetupsDemo,
      children: [
        {
          path: '',
          name: 'saved-setups',
          redirect: 'props',
        },
        {
          path: 'props',
          component: SavedSetupsProps,
        },
        {
          path: 'slots',
          component: SavedSetupsSlots,
        },
        {
          path: 'events',
          component: SavedSetupsEvents,
        },
      ],
    },
    {
      path: '/filter',
      component: FilterDemo,
      children: [
        {
          path: '',
          name: 'filter',
          redirect: 'props',
        },
        {
          path: 'props',
          component: FilterProps,
        },
        {
          path: 'slots',
          component: FilterSlots,
        },
        {
          path: 'events',
          component: FilterEvents,
        },
      ],
    },
    {
      path: '/validation',
      name: 'validation',
      component: ValidationDemo,
    },
    {
      path: '/table',
      component: TableDemo,
      children: [
        {
          path: '',
          name: 'table',
          redirect: 'props',
        },
        {
          path: 'props',
          component: TableProps,
        },
        {
          path: 'slots',
          component: TableSlots,
        },
        {
          path: 'events',
          component: TableEvents,
        },
      ],
    },
    {
      path: '/chart',
      component: ChartDemo,
      children: [
        {
          path: '',
          name: 'chart',
          redirect: 'props',
        },
        {
          path: 'props',
          component: ChartProps,
        },
        {
          path: 'slots',
          component: ChartSlots,
        },
        {
          path: 'events',
          component: ChartEvents,
        },
      ],
    },
    {
      path: '/calendar',
      component: CalendarDemo,
      children: [
        {
          path: '',
          name: 'calendar',
          redirect: 'props',
        },
        {
          path: 'props',
          component: CalendarProps,
        },
        {
          path: 'slots',
          component: CalendarSlots,
        },
        {
          path: 'events',
          component: CalendarEvents,
        },
      ],
    },
    {
      path: '/datepicker',
      component: DatepickerDemo,
      children: [
        {
          path: '',
          name: 'datepicker',
          redirect: 'props',
        },
        {
          path: 'props',
          component: DatepickerProps,
        },
        {
          path: 'slots',
          component: DatepickerSlots,
        },
        {
          path: 'events',
          component: DatepickerEvents,
        },
      ],
    },
    {
      path: '/textarea',
      component: TextAreaDemo,
      children: [
        {
          path: '',
          name: 'textarea',
          redirect: 'props',
        },
        {
          path: 'props',
          component: TextAreaProps,
        },
        {
          path: 'slots',
          component: TextAreaSlots,
        },
        {
          path: 'events',
          component: TextAreaEvents,
        },
      ],
    },
    {
      path: '/multiselect',
      component: MultiselectDemo,
      children: [
        {
          path: '',
          name: 'multiselect',
          redirect: 'props',
        },
        {
          path: 'props',
          component: MultiselectProps,
        },
        {
          path: 'slots',
          component: MultiselectSlots,
        },
        {
          path: 'events',
          component: MultiselectEvents,
        },
      ],
    },
  ],
});
