import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class="comment">
        <div class="comment-user">
          <span>{props.comment.username}</span>：
        </div> 
        <p>{props.comment.content}</p>
      </div>
    );
  },
});
