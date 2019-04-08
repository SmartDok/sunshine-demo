<script>
import Vue from 'vue';

export default Vue.extend({
  functional: true,

  props: {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: '',
    },

    required: Boolean,
  },

  render(h, { props, scopedSlots }) {
    const { name, type, required } = props;

    const options = {
      class: {
        'props-item': true,
        'props-item--required': !!required,
      },
    };

    const slot = scopedSlots.default;

    return [
      h('dt', options, [
        h('span', { class: 'props-item__name' }, name),
        type && h('span', { class: 'props-item__type' }, type),
        required && h('span', { class: 'props-item__required' }, 'required!'),
      ]),
      slot && h('dd', { class: 'props-item__body' }, slot({})),
    ];
  },
});
</script>

<style lang="scss" scoped>
@import 'smartdok-sunshine/src/style/settings.scss';

.props-item {
  padding-left: .25rem;

  &:not(:first-child) {
    margin-top: .25rem;
  }
}

.props-item__name {
  font-weight: bold;
  font-family: monospace;
}

.props-item__type {
  font-weight: normal;
  margin-left: 1rem;
  color: $grayer;
}

.props-item__required {
  font-weight: normal;
  margin-left: 1rem;
}

.props-item__body {
  margin-inline-start: 1rem;
}
</style>
