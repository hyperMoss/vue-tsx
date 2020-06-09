import { defineComponent } from "vue";
import CommentList from './CommentList'
import ComentInput from './CommentInput'
export default defineComponent({
  name: 'CommentApp',
  setup() {
    return () =>
      <>
      <CommentList/>
      <ComentInput/>
      </>
  }
})
