import { defineComponent } from 'vue'
export default  defineComponent({
  name: 'Title',
  props: {
    name: {
      Type: String,
      required: true
    }
  },
  setup(props) {
    return () => <div>{props.name}</div>
  },
})
