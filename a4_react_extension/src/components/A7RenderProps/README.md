## 7. render props
如何向組件內部動態傳入帶內容的結構(標籤)?
- Vue 中:
使用 slot 技術, 也就是通過組件標籤體傳入結構 `<A><B/></A>`
- React 中:
使用 children props: 通過組件標體傳入結構
使用 render props: 通過組件標屬性傳入結構, 而且可以攜帶數據, 一般用 render 函數屬性
### children props
```jsx
<A>
    <B>xxxx</B>
</A>
{this.props.children}
```
問題: 如果 B 組件需要 A 組件內的數據, -> 做不到
### render props
```jsx
<A render={(data) => <c data={data}></c>}></A>
```
A 組件: {this.props.render(內部 state 數據)}
C 組件: 讀取 A 組件傳入的數據顯示 {this.props.data}