import { defineComponent, ref, watch, onMounted } from 'vue';
export default defineComponent({
  name: 'Image',
  setup() {
    const imageRef = ref<HTMLImageElement>(); // 此时为 null
    // 挂载后获取到其Ref
    onMounted(() => {
      console.log(imageRef.value);
      // do anything...
    });
    // eslint-disable-next-line prettier/prettier

    // 或者
    watch(
      () => imageRef.value, // 当 img ref 传递到 imageRef 时，触发，获取到其值
      (val) => {
        console.log(val); // 输出获取到的值
      },
    );

    return () => {
      return <img ref={imageRef} src={'https://avatars3.githubusercontent.com/u/49316198?s=60&v=4'} />;
    };
  },
});
