import React, { Fragment } from 'react';

export default function A4Fragment() {
	return (
		// 每個組件的根標籤都寫一個空的 div 會造成真實 DOM 結構複雜,
		// 使用 Fragment 作為根標籤時, React 的底層不會把 Fragment 標籤渲染到真實 DOM

		<Fragment>
			<input type='text' />
		</Fragment>
	);
}
