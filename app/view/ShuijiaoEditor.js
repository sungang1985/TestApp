Ext.define('TestApp.view.ShuijiaoEditor', {
	extend: 'Ext.Panel',
	xtype: ['shuijiaoeditor'],
	requires: ['Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Number',
		'Ext.field.DatePicker', 'TestApp.ux.field.DateTimePicker'
	],
	config: {
		id: 'shuijiaoEditor',
		width: '100%',
		height: '100%',
		title: '编辑',
		items: [{
			xtype: 'formpanel',
			id: 'shuijiaoEditorFormPanel',
			width: '100%',
			height: '100%',
			items: [{
				xtype: 'fieldset',
				title: '',
				instructions: '',
				items: [{
					xtype: 'datetimepickerfield',
					name: 'date',
					value: new Date(),
					dateTimeFormat: 'Y-m-d H:i',
					label: '日期',
					picker: {
						useTitles: true,
						yearFrom: 1980,
						minuteInterval: 1,
						ampm: false,
						yearText: '年',
						monthText: '月',
						dayText: '日',
						hourText: '时',
						minuteText: '分',
						slotOrder: ['year', 'month', 'day', 'hour', 'minute']
					}
				}, {
					xtype: 'numberfield',
					name: 'value',
					minValue: 0,
					maxValue: 1000,
					label: '时长'
				}, {
					xtype: 'textareafield',
					name: 'remark',
					label: '备注'
				}]
			}]
		}, {
			xtype: 'toolbar',
			title: '睡觉记录',
			dock: 'top',
			items: [{
				text: '返回',
				ui: 'back',
				handler: function() {
					Ext.getCmp('shuijiao').pop();
				}
			}, {
				xtype: 'spacer'
			}, {
				text: '清空',
				ui: 'action',
				handler: function() {
					Ext.getCmp('shuijiaoEditorFormPanel').reset();
				}
			}, {
				text: '保存',
				ui: 'action',
				handler: function() {
					var shuijiaoEditorFormPanel = Ext.getCmp('shuijiaoEditorFormPanel');
					var growupLog = shuijiaoEditorFormPanel.getRecord();
					var values = shuijiaoEditorFormPanel.getValues();
					growupLog.set('date', Ext.Date.format(values.date, "Y-m-d H:i"));
					growupLog.set('value',values.value);
					growupLog.set('remark',values.remark);

					growupLogStore.add(growupLog);
					growupLogStore.sync();

					Ext.getCmp('shuijiao').pop();
				}
			}]
		}]
	}
});