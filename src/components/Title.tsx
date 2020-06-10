import { defineComponent, reactive, readonly, watchEffect } from 'vue';
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
    const origin = reactive({ count: 0 })
    // copy只是origin的代理,所以origin改变时他也会变
    const copy = readonly(origin)
    // 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    watchEffect(() => {
      console.log(copy.count, 'copy');
    })
    origin.count++
    // eslint提示会报错，同时console也会报Warning,"深层"的对象内属性也不可修改
    copy.count++
    return () => <h1>{props.name}</h1>;
  },
});
