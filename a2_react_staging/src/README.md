參考文件: [https://ant.design/docs/react/use-with-create-react-app-cn](https://ant.design/docs/react/use-with-create-react-app-cn)

## 在 create-react-app 中使用 ant.design (antd)
1. 從 yarn 安裝並引入 antd。
    ```shell
    yarn add antd
    ```
2. 修改 src/App.jsx， 引入 antd 的按鈕組件。 
    ```jsx
    import React from 'react';
    import { Button } from 'antd';
    import './App.css';

    const App = () => (
    <div className="App">
        <Button type="primary">Button</Button>
    </div>
    );

    export default App;
    ```
3. 修改 src/App.css，在文件頂部引入 antd/dist/antd.css。 

## 高級配置 
實際開發中還有一些優化的空間，比如無法進行主題配置。
此時我們需要對 create-react-app 的默認配置進行自定義，這裡我們使用 craco （一個對 create-react-app 進行自定義配置的社區解決方案）。 
1. 安裝 craco 並修改 package.json 裡的 scripts 屬性。
    ```shell
    yarn add @craco/craco
    ```
    ```git
    /* package.json */
    "scripts": {
    -   "start": "react-scripts start",
    -   "build": "react-scripts build",
    -   "test": "react-scripts test",
    +   "start": "craco start",
    +   "build": "craco build",
    +   "test": "craco test",
    }
    ```

2. 自定義主題 
自定義主題需要用到類似 less-loader 提供的 less 變量覆蓋功能。我們可以引入 craco-less 來幫助加載 less 樣式和修改變量。
    1. 首先把 src/App.css 文件修改為 src/App.less，然後修改樣式引用為 less 文件。 

        ```git
        /* src/App.js */
        - import './App.css';
        + import './App.less';
        ```
        ```git
        /* src/App.less */
        - @import '~antd/dist/antd.css';
        + @import '~antd/dist/antd.less';
        ```

    2. 然後安裝 craco-less 

        ```shell
        yarn add craco-less
        ```

    3. 在項目根目錄創建一個 craco.config.js 用於修改默認配置。 

        ```js
        /* craco.config.js */
        const CracoLessPlugin = require('craco-less');

        module.exports = {
            plugins: [
                {
                plugin: CracoLessPlugin,
                options: {
                    lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                    },
                },
                },
            ],
        };
        ```

        這裡利用了 less-loader 的 modifyVars 來進行主題配置，變量和其他配置方式可以參考 配置主題 文檔。修改後重啟 yarn start，如果看到一個綠色的按鈕就說明配置成功了。 
## 使用暗色主題和緊湊主題 
1. 在樣式文件全量引入 antd.dark.less 或 antd.compact.less。 

    ```less
    @import '~antd/dist/antd.dark.less'; // 引入官方提供的暗色 less 样式入口文件
    @import '~antd/dist/antd.compact.less'; // 引入官方提供的紧凑 less 样式入口文件
    ```
    