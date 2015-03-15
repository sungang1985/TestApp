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

					var now = new Date();
					var id = (now.getTime()).toString() + (getRandomInt(0, 100)).toString();
					var growupLog = Ext.create('TestApp.model.GrowupLog', {
						'id': id,
						'type': '1',
						'date': new Date(),
						'value': 0,
						'remark': ''
					});
					Ext.getCmp('shuijiaoEditorFormPanel').setRecord(growupLog);
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

		Ext.getCmp('shuijiaoList').getScrollable().getScroller().on('scrollend', this.onScrollerEnd);
		this.loadData();
	},
	loadData: function() {
		Ext.getCmp('shuijiaoList').setStore(growupLogStore);
	},
	onScrollerEnd: function(scroller, offsets) {}
});