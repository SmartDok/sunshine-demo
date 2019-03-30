<script>
import Vue from 'vue';

export default Vue.extend({
  functional: true,

  props: {
    name: String,
    type: String,
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

    return [
      h('dt', options, [
        h('span', { class: 'props-item__name' }, name),
        h('span', { class: 'props-item__type' }, type),
        required && h('span', { class: 'props-item__required' }, 'required!'),
      ]),
      h('dd', { class: 'props-item__body' }, scopedSlots.default({})),
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
    border-top: 1px solid $gray;
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
