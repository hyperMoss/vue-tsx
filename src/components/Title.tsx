import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Title',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => <><h1>{props.name}</h1></>;
  },
});
