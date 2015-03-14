Ext.define('TestApp.model.GrowupLog', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['id', {
				name: 'type',
				type: 'string'
			}, //'1':睡觉,'2':吃奶,'3':体重,'4':身高,'5':臭臭,'6':其他
			{
				name: 'date',
				type: 'date'
			},
			'value', 'remark'
		]
	}
});