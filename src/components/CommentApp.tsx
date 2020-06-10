import { defineComponent, reactive } from 'vue';
import ComentInput from './CommentInput';
import CommentList from './CommentList';
export default defineComponent({
  name: 'CommentApp',
  setup() {
    // 用reactive 包装对象使其获得响应性
    const commentDataList = reactive([
      { username: 'Jerry', content: 'Hello' },
      { username: 'Tomy', content: 'World' },
      { username: 'Lucy', content: 'Good' },
    ]);
    // 因不知道在父组件怎么接受emit信息,故采用传函数props,
    // 处理评论添加信息
    function handlePushComment(data) {
      console.log(data);
      commentDataList.push(data);
    }
    return () => (
      <div class="wrapper">
        <ComentInput submitComment={handlePushComment} />
        <CommentList comments={commentDataList} />
      </div>
    );
  },
});
