# 前端面试题
::: tip 每日5道面试题 
坚持每天都刷5道真实面试题,保持面试感觉
:::
## 2024/08/23
1. 如何实现一个三角形,怎么给这个三角形加阴影,如果这个三角形边要弧度怎么办?

> 实现一个三角形有多种方法，比如css，svg等：
>
> 1. * 用css，将div宽高设为零，在设置3边的边框高度。
>
>      角对着那边就不设置边框，反方向边框设置颜色和高度。
>
>      其他两边设置透明，且高度是角反方向边框的一半；
>
>    * 用svg画三角形比较简单，只要在points 填好坐标就好；
>    
> 1. 给三角形加阴影需要用到css的滤镜。设置 filter: drop-shadow值,svg也一样；
>
> 3. 那只能想到用svg画了，在points里设置好路径，这种一般都是UI设计好给我们；
>
> 下面是代码以及原理：
>
> 1. ```css
>    /* 用css实现三角形 */
>    .triangle {
>        width: 0;
>        height: 0;
>        border-left: 50px solid transparent;
>        border-right: 50px solid transparent;
>        border-bottom: 100px solid #007BFF;
>    }
>    ```
>
>    ```xml
>    <!-- svg三角形 --> 
>    <svg width="200" height="200">
>        <polygon points="100 0 0 200 200 200" fill="blue"></polygon>
>      </svg>
>    ```
>
> 2. ```css
>    /* 用三角形阴影 css svg */
>    .triangle-shadow {
>    	filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
>    }
>    ```
>
> 3. ```xml
>    <!-- svg三角形有弧度 --> 
>    <svg width="250" height="250">
>        <polygon stroke-linejoin="round" 
>                 points="100,10,10,200,200,200"
>                 style="fill: #00f;stroke: #00f;stroke-width: 20;"
>         ></polygon>
>    </svg>
>    ```


2. css盒居中有几种办法？如何居中一个浮动元素？如何让绝对定位的div居中？

> 盒居中有很多中，像 flex，position，grid都可以；
>
> 1. 使用 `flexbox`：设置父容器display: flex;  justify-content: center;  align-items: center;
> 2. 使用 `flex`： 设置父容器display: flex;子盒子 margin: auto 居中块级元素；
> 3. 使用`position`：设置盒子position: absolute;top: 50%; left: 50%;margin-top,margin-left:  宽高的一半;
> 4. 使用`position`：设置盒子position: absolute;top: 50%; left: 50%;transform:translate(-50%, -50%);
> 5. 使用 `grid`；设置父容器display: grid;在设置place-items: center; 
>
> 下面是代码以及原理：
>
> 1. ```CSS
>    /* 使用 `flexbox */
>    .parent {
>      display: flex;
>      justify-content: center; /* 水平居中 */
>      align-items: center; /* 垂直居中 */
>      height: 100vh; 
>    }
>    .child {
>      width: 100px;
>      height: 100px;
>    }
>    ```
>
> 2. ```CSS
>    /* 使用 flex */
>    .parent {
>      width: 100%;
>      height: 100vh;
>      display: flex;
>    }
>    .child {
>      margin: auto; /* 水平垂直居中 */
>      width: 100px;
>      height: 100px;
>    }
>    
>    ```
>
> 3. ```css
>    /* 使用position */
>    .parent {
>      position: relative;
>      height: 100vh;
>    }
>    .child {
>      width: 100px;
>      height: 100px;
>      position: absolute;
>      top: 50%;  /* 水平居中 */
>      left: 50%; /* 垂直居中 */
>      margin-top: 25px; /* 垂直中心点居中 */
>      margin-left: 25px;/* 水平中心点居中 */
>    }
>    ```
>
> 4. ```css
>    /* 使用position */
>    .parent {
>      position: relative;
>      height: 100vh;
>    }
>    .child {
>      width: 100px;
>      height: 100px;
>      position: absolute;
>      top: 50%;  /* 水平居中 */
>      left: 50%; /* 垂直居中 */
>      transform: translate(-50%, -50%); /* 水平垂直中心点居中 */
>    }
>    ```
>
> 5. ```css
>    .parent {
>      display: grid;
>      place-items: center; /* 上下左右居中 */
>      height: 100vh;
>    }
>    .child {
>      width: 100px;
>      height: 100px;
>    }
>    ```


3. 弹性盒子怎么设置,这里会有一个排版实现，（例如剩余撑满）？
> 
4. css3有哪些新特性，怎么实现一个简单动画？
> 
5. 对BFC规范的理解，高度塌陷怎么修复？
> 
