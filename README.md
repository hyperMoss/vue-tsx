# Vue3-tsx-demo

## 简介

vue3 即将正式面世，现在已经推出了beta版本，在github上可以清晰的查看到对应项目进度[地址](https://github.com/vuejs/vue-next)

这次就干脆试一下Vue3+Typescript+vite的编程体验到底如何。

## 创建vite项目

之前试过使用Vue-CLI创建项目，再使用[vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next),创建的项目，采用ts和eslint，体验效果不是特别理想，故采用[vite](https://github.com/vitejs/vite)来创建新的项目。

感谢vite提供了开箱即用的脚手架

create 之前需要安装脚手架依赖

```shell
npm  install -g create-vite-app
# 或
yarn add -g create-vite-app
```

```shell
$ yarn create vite-app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev
```
使用npm的话，github文档也有介绍
即可方便的创建新的vite项目。如果想体验vite新功能的话也可以直接克隆vite项目master分支然后

```shell
yarn
yarn build
yarn link
```

## 项目基础配置

先给项目加上typescript模块，和eslint，pritter模组吧。

```
yarn add --dev typescript
```

```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev

yarn add -D eslint eslint-plugin-vue@next
```


配置eslint 参考的是[Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project),
[eslint-plugin-vue](https://eslint.vuejs.org/)
基本上按着教程一步一步来就行了，中间也报过很多次错。
一步一步来查看文档就解决了那些问题。

## TSX粗体验
虽然没写过业务上的react代码，但第一次使用tsx还是挺不错的编程体验，auto import，出色的代码提示，包括足够简约的组件代码，都是和写template方式不太一样的使用习惯。

这里选择了几个比较简单的用例，比如传props，点击累加器，computed double 等用例。
要说有什么不习惯的,还是之前template用的太多,老想用双括号去包裹数据,
同时一些vue特有的attr,少了template的编译环节而变得不可用.

```js
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Title',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => <h1>{props.name}</h1>;
  },
});

```

```js
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

```

## 深入实践

这里采用了胡子大哈的React小书里的评论App用例,来看看Vue3+TSX的写法和react有何区别.
[React小书](http://huziketang.mangojuice.top/books/react/)
直接用了其实战用例的评论组件结构,来试试复现一个通过vue3来实现其React的评论组件.
按照原结构分为了,`Comment`,`CommentApp`,`CommentInput`,`CommentList`这几个模块.
将主要数据 和处理方法放在了`CommentApp`模块内.

```js
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
```
写着写着还得去查询一下react里面的那些JSX的方法.也算是一次在vue里学react使用的实践了.

## 总结
目前这个项目还是比较初级的,算不上可以去用到生产环境之中.比如vue-router-next和vuex和css module都没有放入到本次实践之中.
以后会继续的完善本项目.


## 参考
- [组合式 API 征求意见稿](https://vue-composition-api-rfc.netlify.app/zh/#%E6%A6%82%E8%BF%B0)
- [API 手册](https://vue-composition-api-rfc.netlify.app/zh/api.html)
- [vue-next+typescript 初体验](https://zhuanlan.zhihu.com/p/146062445)
- [React小书](http://huziketang.mangojuice.top/books/react/)
