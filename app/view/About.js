Ext.define('TestApp.view.About', {
	extend: 'Ext.Panel',
	xtype: 'about',
	config: {
		title: '关于',
		iconCls: 'info',
		styleHtmlContent: true,
		scrollable: true,
		html: [
			"欢迎使用家有儿女初长成，",
			"该软件主要用于记录儿女的成长过程。"
		].join("")
	}
});