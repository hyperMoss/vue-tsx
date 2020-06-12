import { defineComponent, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onErrorCaptured, onBeforeUnmount, ref, onMounted, onRenderTriggered } from 'vue';

export default defineComponent({
  name: 'Lifecircle',
  setup() {
    const message = ref('');
    const TextAarray: String[] = ['beforeCreate -> 使用 setup()',
      'created -> 使用 setup()',
      'beforeMount -> onBeforeMount',
      'mounted -> onMounted',
      'beforeUpdate -> onBeforeUpdate',
      'updated -> onUpdated',
      'beforeDestroy -> onBeforeUnmount',
      'destroyed -> onUnmounted',
      'errorCaptured -> onErrorCaptured']
    onBeforeMount(() => {
      message.value = message.value + '\n onBeforeMount!!!';
    })
    onMounted(() => {
      message.value = message.value + '\n onMounted!!!';
    })
    // onBeforeUpdate(() => {
    //   message.value = message.value + '\n onBeforeUpdate!!!';
    // })
    // onUpdated(() => {
    //   message.value = message.value + '\n onUpdated!!!';
    // })
    onBeforeUnmount(() => {
      message.value = message.value + '\n onBeforeUnmount!!!';
    })
    onUnmounted(() => {
      message.value = message.value + '\n onUnmounted!!!';
    })
    onErrorCaptured(() => {
      message.value = message.value + '\n onErrorCaptured!!!';
    })
    onRenderTriggered((e) => { console.log(e); })
    // 采用 jsx数组模式渲染
    const usersElements = [] // 保存每个句子渲染以后jsx的数组
    for (let item of TextAarray) {
      usersElements.push( // 循环每个文字，构建jsx，push 到数组中
        <li><span>{item}</span> <hr /></li>
      )
    }
    return () => (
      <>
        <h2>this is lifecircle component.</h2>
        <ul>{usersElements}</ul>
        <pre>{message.value}</pre>
      </>
    );
  },
});
