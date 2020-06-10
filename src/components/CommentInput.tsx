import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CommentInput',
  // 通过props传入回调函数
  props:{
    submitComment:{
      type:Function,
      required:true
    }
  },
  setup(props, ctx) {
    const username =ref('');
    const content= ref('');
    // 处理用户名变化 因不知道怎么在TSX内使用v-modal故未使用
    function handeleUsernameChange(event) {
      username.value= event.target.value;
    }
    // 处理评论变化
    function handeleContentChange(event) {
      content.value = event.target.value;
    }
    // 处理提交 函数
    function handleSubmit() {
      props.submitComment( JSON.parse(JSON.stringify({ username, content }))  )
      content.value = ''
    }
    return () => (
      <div class="comment-input">
        <div class="comment-field">
          <span class="comment-field-name">用户名：</span>
          <div class="comment-field-input">
            <input value={username.value} onChange={handeleUsernameChange} />
          </div>
        </div>
        <div class="comment-field">
          <span class="comment-field-name">评论内容：</span>
          <div class="comment-field-input">
            <textarea value={content.value} onChange={handeleContentChange} />
          </div>
        </div>
        <div class="comment-field-button">
          <button onClick={handleSubmit}>发布</button>
        </div>
      </div>
    );
  },
});
