import { defineComponent } from "vue";
import Comment from "./Comment";

export default defineComponent({
  name: 'Commentcomments',
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    return () =>
      // 直接在jsx内渲染评论列表
      <div>{props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}</div>
  }
})
