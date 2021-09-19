## github 搜索案例相關知識點

1. 設計狀態時要考慮全面, 例如帶有網絡請求的組件, 要考慮請求失敗怎麼辦。
2. ES6 小知識點: 解構賦值 + 重命名
   let obj = {a:{b:1}}
   const {a} = obj; // 傳統構賦值
   const {a:{b}) = obj; // 連續解構賦值
   const {a:{b:value}} = obj; // 連續解構賦值 + 重命名
3. 消息訂閱與發布機制
   1. 先訂閱, 再發布(理解: 有一種隔空對話的感覺)
   2. 適用於任意組件間通信
   3. 要在組件的 componentwillUnmount 中消訂閱
4. fetch 發送請求(關注分離的設計思想)

   ```js
   try {
     const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`);
     const data = await response.json()
     console.log(data);
   }catch (error) {
     console.log('請求出錯,error);
   }
   ```
