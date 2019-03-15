import Vue from 'vue';
import Router from 'vue-router';
import ButtonDemo from '@/views/ButtonDemo.vue';
import CheckboxDemo from '@/views/CheckboxDemo.vue';
import RadioButtonDemo from '@/views/RadioButtonDemo.vue';
import InputsDemo from '@/views/InputsDemo.vue';
import DropDownDemo from '@/views/DropDownDemo.vue';
import AlertsDemo from '@/views/AlertsDemo.vue';
import AccordionDemo from '@/views/AccordionDemo.vue';
import InspectorDemo from './views/InspectorDemo.vue';
import DialogDemo from '@/views/DialogDemo.vue';
import TabsDemo from '@/views/TabsDemo.vue';
import TableDemo from '@/views/TableDemo.vue';
import ChartDemo from '@/views/ChartDemo.vue';
import CalendarDemo from '@/views/CalendarDemo.vue';
import DatepickerDemo from '@/views/DatepickerDemo.vue';
import AddUserDemo from '@/views/AddUserDemo.vue';

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
      name: 'button',
      component: ButtonDemo,
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckboxDemo,
    },
    {
      path: '/radio',
      name: 'radio',
      component: RadioButtonDemo,
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: InputsDemo,
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: DropDownDemo,
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: AlertsDemo,
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: AccordionDemo,
    },
    {
      path: '/inspector',
      name: 'inspector',
      component: InspectorDemo,
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: DialogDemo,
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsDemo,
    },
    {
      path: '/table',
      name: 'table',
      component: TableDemo,
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartDemo,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarDemo,
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: DatepickerDemo,
    },
    {
      path: '/add-user',
      name: 'adduser',
      component: AddUserDemo,
    },
  ],
});
