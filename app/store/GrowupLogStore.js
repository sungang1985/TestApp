Ext.define('TestApp.store.GrowupLogStore', {
	extend: 'Ext.data.Store',
	config: {
		// storeId: 'growupLogStore',
		model: 'TestApp.model.GrowupLog',
		grouper: {
			sortProperty: "date", // 按照创建日期进行分组
			direction: "DESC", // 日期倒序分组
			groupFn: function(record) {
				return Ext.Date.format(record.get('date'), "Y-m-d");
			}
		},
		sorters: [{
			property: 'date',
			direction: 'DESC'
		}],
		autoLoad: true
	}
});