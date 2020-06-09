import { defineComponent, onMounted, ref, watch } from 'vue';
export default defineComponent({
  name: 'Image',
  setup() {
    const imageRef = ref<HTMLImageElement>();
    // 挂载后获取到其Ref
    onMounted(() => {
      console.log(imageRef.value);
    });
    // 或者
    watch(
      () => imageRef.value, // 当 img ref 传递到 imageRef 时，触发，获取到其值
      (val) => {
        console.log(val); // 输出获取到的值
      },
    );

    return () => {
      return <img ref={imageRef} src={'https://avatars3.githubusercontent.com/u/49316198?s=460&u=5675a6b85989094445e834e86391a0e8e9e51738&v=4'} />;
    };
  },
});
