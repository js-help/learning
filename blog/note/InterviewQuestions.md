# 前端面试题
::: tip 每日5道面试题 
坚持每天都刷5道真实面试题,保持面试感觉
:::
## 2024/08/24
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




3. flex1代表什么意思？如何实现一个三列布局? 双飞翼和圣杯？

> `flex: 1` 是 CSS 中 `flexbox` 布局的一个简写属性，它的完整形式是 `flex-grow`, `flex-shrink`, 和 `flex-basis`，`flex: 1` 等价于以下设置：
>
> ```css
> .item {
> flex-grow: 1;   /* 元素可以根据可用空间进行扩展 */
> flex-shrink: 1; /* 如果空间不足，元素可以收缩 */
> flex-basis: 0%; /* 元素的初始基础尺寸为 0，实际尺寸由 flex-grow 决定 */
> }
> ```
>
> * **`flex-grow: 1`**：表示该元素在父容器中有剩余空间时，可以按比例扩展。`1` 代表元素将根据其容器中的可用空间，按照其他子元素的 `flex-grow` 值来分配空间。例如，如果有两个子元素，一个 `flex-grow` 为 `1`，另一个为 `2`，则第二个子元素将获得两倍于第一个子元素的可用空间。
>
> * **`flex-shrink: 1`**：表示当空间不足时，该元素会按比例收缩。`1` 表示元素将按比例缩小，以适应父容器的尺寸。如果没有设置 `flex-shrink`，元素可能会超出容器范围。
>
> * **`flex-basis: 0%`**：表示元素的初始尺寸为 `0`，即元素没有固定的基础尺寸，完全依赖于 `flex-grow` 的设置来决定其尺寸。如果你想设置一个具体的初始尺寸，可以直接指定，例如 `flex-basis: 100px;`。
>
> 
>
> 双飞翼布局
>
> > 这个常考，效果就是中间不变，两边自适应；主要了解flex: 0 0 600px;这个设置；和flex: 1;
>
> ```html
> <div class="container">
>   <div class="side left">左侧内容</div>
>   <div class="main">中间内容</div>
>   <div class="side right">右侧内容</div>
> </div>
> ```
>
> ```css
> .container {
>   display: flex;
>   width: 100%;
> }
> 
> .side {
>   flex: 1; /* 左右两侧自适应宽度 */
>   background-color: #f0f0f0;
> }
> 
> .main {
>   flex: 0 0 600px; /* 中间内容区宽度固定为 600px */
>   background-color: #eaeaea;
> }
> 
> .left {
>   background-color: #ccc; /* 左侧背景颜色 */
> }
> 
> .right {
>   background-color: #aaa; /* 右侧背景颜色 */
> }
> ```
>
>  
>
> 圣杯布局
>
> > 这个一般不会考，这个效果就是中间改变，两边不变；了解一下效果和order，flex-shrink属性就好；
>
> ```html
> <div class="container">
>     <div class="left">左侧内容</div>
>     <div class="main">中间内容</div>
>     <div class="right">右侧内容</div>
> </div>
> ```
>
> ```CSS
> * {
>     margin: 0;
>     padding: 0;
>     box-sizing: border-box;
> }
> 
> .container {
>     display: flex;
>     width: 100%;
>     position: relative;
>     padding-left: 200px;
>     padding-right: 200px;
> }
> 
> .main {
>     flex: 1;
>     order: 2;/* 保证主内容在文档结构中优先展示 */
>     background-color: #fff;
> }
> 
> .left,.right {
>     width: 200px;
>     flex-shrink: 0;/* 防止左右侧栏缩小 */
> 
>     position: absolute;
>     top: 0;
>     bottom: 0;
> }
> 
> .left {
>     left: 0;
>     order: 1;
>     background-color: #ccc;
> }
> 
> .right {
>     right: 0;
>     order: 3;
>     background-color: #aaa;
> }
> 
> ```
>
> 学习Flex用法，参考这个链接：[CSS Flex](https://www.nowcoder.com/discuss/500430238178881536)




4. css3有哪些新特性，怎么实现一个简单动画？

> 1. **过渡与动画（Transitions and Animations）**：
>
>    - **过渡（Transitions）**：`transition` 属性允许定义属性变化时的平滑过渡效果。
>
>    - **动画（Animations）**：`@keyframes` 规则和 `animation` 属性允许创建复杂的动画效果。
>
> 2. **变换（Transforms）**：
>    - **2D 和 3D 变换**：`transform` 属性支持旋转、缩放、倾斜和平移元素，还支持 3D 变换。
>
> 3. **弹性盒容器（Flexbox Container）**:
>    - **Flexbox 容器**：通过 `display: flex` 可以将一个元素设为弹性盒容器，其子元素自动成为弹性盒项目，支持各种排列方式。
>
> 4. **媒体查询（Media Queries）**：
>    - **媒体查询**：`@media` 规则允许根据不同的设备特性（如屏幕大小、分辨率等）应用不同的 CSS 样式，实现响应式设计。
>
> 5. **背景与渐变（Backgrounds and Gradients）**：
>    - **多背景图片**：一个元素可以使用多个背景图片，使用 `background-image` 属性定义。
>    - **线性渐变和径向渐变**：`linear-gradient` 和 `radial-gradient` 属性允许创建平滑的颜色过渡效果。


5. 对BFC规范的理解，高度塌陷怎么修复？
> BFC（Block Formatting Context，块级格式化上下文）是CSS中的一个重要概念，它决定了元素如何布局以及它们与其他元素的关系。理解BFC对于控制页面布局和解决一些常见的CSS问题（如浮动、边距重叠等）非常有用。
>
> **BFC的形成条件**
>
> 一个元素可以通过以下几种方式形成BFC：
>
> 1. **根元素**：通常是`<html>`标签，它本身就是一个BFC。
> 2. **浮动元素**：应用了`float`属性且值不为`none`的元素。
> 3. **绝对定位元素**：应用了`position: absolute`或`position: fixed`的元素。
> 4. **`display`值为`inline-block`、`table-cell`、`table-caption`、`flex`、`inline-flex`、`grid`、`inline-grid`等的元素**。
> 5. **`overflow`值不为`visible`的元素**：如`overflow: hidden`、`auto`或`scroll`。
>
> **BFC的作用与特性**
>
> 1. **阻止外边距折叠**：BFC元素内部的块级子元素的垂直外边距不会与其外部元素发生折叠。也就是说，当两个相邻的块级元素位于不同的BFC中时，它们的外边距不会重叠。
> 2. **包含浮动元素**：当一个元素形成BFC时，它会包含内部的浮动元素，而不会影响到外部的布局。通常用于清除浮动。
> 3. **阻止元素被浮动元素覆盖**：在BFC中，子元素不会被浮动元素覆盖，它们会根据正常的文档流进行布局。
> 4. **自适应高度**：BFC会扩展以包含它的子元素，不会像普通容器一样塌陷。
>
> **BFC的常见应用场景**
>
> 1. **清除浮动**：通常使用`overflow: hidden`或`overflow: auto`来清除浮动，确保父容器可以正确包裹浮动元素。
> 2. **防止外边距折叠**：通过创建BFC可以防止外边距折叠，解决因外边距引起的布局问题。
> 3. **处理复杂布局**：通过创建BFC可以更好地控制和管理复杂的页面布局，特别是在浮动、绝对定位和网格布局中。
