Ext.define('TestApp.view.ShuijiaoList', {
	extend: 'Ext.Panel',
	xtype: 'shuijiaolist',
	requires: ['Ext.List', 'TestApp.model.GrowupLog',
		'TestApp.store.GrowupLogStore', 'TestApp.view.ShuijiaoEditor'
	],
	config: {
		loadingText: false,
		emptyText: '暂无内容',
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			title: '睡觉记录',
			items: [{
				text: '返回',
				ui: 'action',
				handler: function() {
					this.up('shuijiaolist').up('shuijiao').up('toolkit').setActiveItem(0);
				}
			}, {
				xtype: 'spacer'
			}, {
				text: '新建',
				ui: 'action',
				handler: function() {
					var shuijiaoEditor = Ext
						.create('TestApp.view.ShuijiaoEditor');
					Ext.getCmp('shuijiao').push(shuijiaoEditor);
				}
			}]
		}, {
			xtype: 'list',
			id: 'shuijiaoList',
			width: '100%',
			height: '100%',
			grouped: true,
			onItemDisclosure: { // 若配置该项，list每一项的右侧都会出现一个小图标。其他功能请查看api
				handler: function(record, btn, index) {

				}
			},
			itemTpl: new Ext.XTemplate(
				"<div>",
				//"<div class='list-item-number'>{#}</div>",
				"<div class='list-item-content'>",
				"<div class='list-item-title'>时间：{date:date('H:i')} </div>",
				"<div class='list-item-narrative'>时长：{value}分钟</div>",
				"<div class='list-item-remark'>{remark}</div>",
				"</div>",
				"</div>"
			),
			listeners: {

			}
		}]
	},
	initialize: function() {
		this.page = 1;
		this.pageSize = 10;

		var growupLog = {
			"id": 11,
			"type": "1",
			"date": "2015-03-01 20:22:00",
			"value": "1",
			"remark": "睡的不错"
		};
		localStorageManager.setGrowupLog('11', growupLog);

		growupLog = {
			"id": 12,
			"type": "1",
			"date": "2015-03-02 20:22:00",
			"value": "1",
			"remark": "睡的不错"
		};
		localStorageManager.setGrowupLog('12', growupLog);

		Ext.getCmp('shuijiaoList').getScrollable().getScroller().on('scrollend', this.onScrollerEnd);
		this.loadDate();
	},
	loadDate: function() {
		var data = [{
			"id": 1,
			"type": "1",
			"date": "2015-02-23 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 2,
			"type": "1",
			"date": "2015-02-23 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 3,
			"type": "1",
			"date": "2015-02-23 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 4,
			"type": "1",
			"date": "2015-02-23 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 5,
			"type": "1",
			"date": "2015-02-23 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 6,
			"type": "1",
			"date": "2015-02-22 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 7,
			"type": "1",
			"date": "2015-02-22 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 8,
			"type": "1",
			"date": "2015-02-22 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 9,
			"type": "1",
			"date": "2015-02-22 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}, {
			"id": 10,
			"type": "1",
			"date": "2015-02-22 20:22:00",
			"value": "1",
			"remark": "睡的很香"
		}];
		growupLogStore.setData(data);
		Ext.getCmp('shuijiaoList').setStore(growupLogStore);

	},
	onScrollerEnd: function(scroller, offsets) {
		var growupLog = localStorageManager.getGrowupLog('11');
		var m = Ext.create('TestApp.model.GrowupLog');
		m.set('id', growupLog.id);
		m.set('type', growupLog.type);
		m.set('date', growupLog.date);
		m.set('value', growupLog.value);
		m.set('remark', growupLog.remark);
		Ext.getCmp('shuijiaoList').getStore().insert(0, m);

		growupLog = localStorageManager.getGrowupLog('12');
		m = Ext.create('TestApp.model.GrowupLog');
		m.set('id', growupLog.id);
		m.set('type', growupLog.type);
		m.set('date', growupLog.date);
		m.set('value', growupLog.value);
		m.set('remark', growupLog.remark);
		Ext.getCmp('shuijiaoList').getStore().insert(0, m);
	}
});