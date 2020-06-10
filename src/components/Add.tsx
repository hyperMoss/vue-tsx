import { defineComponent, computed, ref } from "vue";

export default defineComponent({
    // 一个简单的累加器
    name: 'Add',
    setup() {
        const times = ref(0)
        // 使用computed
        const doubleTimes = computed(() => { return times.value * 2 })
        return () => <div>
            <h2>+1S</h2>
            <button onClick={() => { times.value++ }}>Times+1</button>
            <div>{times.value}</div>
            <div>{doubleTimes.value}</div></div>
    }
})
