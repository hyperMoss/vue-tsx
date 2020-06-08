import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Lifecircle',
  setup() {
    const message = ref('');
    onMounted(() => {
      message.value = message.value + '我触发了一次';
    });
    onMounted(() => {
      message.value = message.value + '\n我又触发了一次';
    });
    onMounted(() => {
      message.value = message.value + '\n我又触发了2次';
    });
    return () => (
      <>
        this is lifecircle component.
        <pre>{message.value}</pre>
      </>
    );
  },
});
