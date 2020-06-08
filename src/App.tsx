import { defineComponent, ref, computed } from 'vue';
import * as style from './index.css';
import Title from './components/Title';
import LifeCycle from './components/LifeCycle';
import Image from './components/Image'

export default defineComponent({
  name: 'App',
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2)
    return () => (
      <>
        <Image></Image>
        <Title name="2222"></Title>
        <button onClick={(_) => count.value++} class={style['app']}>
          Add
        </button>
        <p>{count.value}</p>
        <p>{double.value}</p>
        <LifeCycle></LifeCycle>
      </>
    );
  },
});
