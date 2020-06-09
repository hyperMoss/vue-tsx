import { computed, defineComponent, ref } from 'vue';
import Image from './components/Image';
import LifeCycle from './components/LifeCycle';
import Title from './components/Title';
import Add from './components/Add'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
      <Title name="Vue3 with TSX"></Title>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Image></Image>
        <Add></Add>
        <LifeCycle></LifeCycle>
        </div>
      
      </>
    );
  },
});
