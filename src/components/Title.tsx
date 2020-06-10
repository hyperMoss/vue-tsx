import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Title',
  // 声明props
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  // 用setup函数渲染
  setup(props) {
    return () => <h1>{props.name}</h1>;
  },
});
