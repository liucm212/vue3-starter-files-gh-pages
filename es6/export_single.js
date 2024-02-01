//! 匯出單個：export寫在單項變數、函式、物件名稱後面。

//目標匯出物件：像是之後Vue框架裡設計的元件會被整個匯出
export const family = {
	data : ['Andy', 'Vivi', 'QQ', 'Lolo'],
	showData(){
    const data = this.data
    data.forEach(item => console.log(item))
	},
	init(){
		this.showData()
	}
}
//目標匯出變數
export let variable = "I'm variable."
//目標匯出函式
export function fn(){
	console.log("I'm function")
}