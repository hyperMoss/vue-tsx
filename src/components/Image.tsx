import { defineComponent, onMounted, ref, watch } from 'vue';
export default defineComponent({
  name: 'Image',
  setup() {
    const imageRef = ref<HTMLImageElement>();
    // 组件挂载后获取到其Ref
    onMounted(() => {
      console.log(imageRef.value,'mounted');
    });
    // 或者watch
    watch(
      // 监听的值
      () => imageRef.value,
      // 处理函数
      (val) => {
        console.log(val); // 输出获取到的值
      },
    );

    return () => {
      return <img style={{height:'200px'}} ref={imageRef} src={'https://avatars3.githubusercontent.com/u/49316198?s=460&u=5675a6b85989094445e834e86391a0e8e9e51738&v=4'} />;
    };
  },
});
