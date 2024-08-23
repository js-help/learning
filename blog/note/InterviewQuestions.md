# 前端面试题
::: tip 每日5道面试题 
坚持每天都刷5道真实面试题,保持面试感觉
:::
## 2024/08/25
1. 如何实现一个三角形,怎么给这个三角形加阴影,如果这个三角形边要弧度怎么办?

> 实现一个三角形有多种方法，比如css，svg等。
>
> 1. 用css，将div宽高设为零，在设置3边的边框高度。
>
>    角对着那边就不设置边框，反方向边框设置颜色和高度。
>
>    其他两边设置透明，且高度是角反方向边框的一半；
>
>    ```css
>    .triangle {
>                width: 0;
>                height: 0;
>                border-left: 50px solid transparent;
>                border-right: 50px solid transparent;
>                border-bottom: 100px solid #007BFF;
>            }
>    ```
>
>    用svg画三角形比较简单，只要在points 填好坐标就好；
>
>    ```HTML
>      <svg width="200" height="200">
>        <polygon points="100 0 0 200 200 200" fill="blue"></polygon>
>      </svg>
>    ```
>
>    
>
> 2. 给三角形加阴影需要用到css的滤镜。设置 filter: drop-shadow值,svg也一样；
>
> ```css
>  .triangle-shadow {
>             filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
>         }
> ```
>
>  
>
> 3. 那只能想到用svg画了，在path里设置好路径，这样一般都是UI设计好给我们；
>
> ```html
>     <svg width="250" height="250">
>         <polygon stroke-linejoin="round" 
>                  points="100,10,10,200,200,200"
>                  style="fill: #00f;stroke: #00f;stroke-width: 20;"
>         ></polygon>
>     </svg>
> ```
2. css盒居中有几种办法？如何居中一个浮动元素？如何让绝对定位的div居中？
> 
3. 弹性盒子怎么设置,这里会有一个排版实现，（例如剩余撑满）？
> 
4. css3有哪些新特性，怎么实现一个简单动画？
> 
5. 对BFC规范的理解，高度塌陷怎么修复？
> 
