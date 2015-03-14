Ext.define('TestApp.view.Shuijiao', {
	extend: 'Ext.NavigationView',
	xtype: 'shuijiao',
	requires: ['TestApp.view.ShuijiaoList'],
	config: {
		id : 'shuijiao',
		autoDestroy: false,
		defaultBackButtonText: '返回',
		navigationBar: false,
		items: [{
			xtype: 'shuijiaolist'
		}]
	}
});