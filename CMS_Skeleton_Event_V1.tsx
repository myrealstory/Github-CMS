import { SkeletonProps } from './app/globalStyle';

export const SkeletonEvent: SkeletonProps = {
	menu: {
		title:
			"幸運抽獎管理",
		sections: [
			{
				title:{ 
					en:"Event Management",
					zh:"幸運抽獎管理"
				},
				path: 'admin/event',
				icon: {title:'BackupTableIcon',sx:'iconWhite'},
				elements: [
					{
						modal: 'TableModal',
						translateKey: 'event',
						components: [
							{
								key: 'table',
								type: 'CustomTable',
								editPath: 'admin/event/edit/',
								tableList: {
									tr1: {
										key:"eventname",
										label:{
											en: 'Event Name',
											zh: '名稱',
											}},
									tr2: {
										key:"eventnameEN",
										label:{
											en: 'Event Name(EN)',
											zh: '名稱(EN)',
										}},
									tr3: {
										key:"status",
										label:{
											en: 'status',
											zh: '狀態',
										}},
									tr4: {
										key:"startdate",
										label:{
											en: 'Start On',
											zh: '由',
										}},
									tr5: {
										key:"enddate",
										label:{
											en: 'End To',
											zh: '至',
										}},
								},
								grid: 12,
								editables: true,
								translateKey: 'event',
								operation:[
									{
									add:{
										en:"Add",
										zh:"新增"
									},
									delete:{
										en:"Delete",
										zh:"刪除"
									},
									}
								],
							},
						], 
						buttons: [{ key: 'noBTN',label:{en:"",zh:""}, buttonType: undefined }],
					},
				],
			},
			{
				title:{ 
					en:"Event Report",
					zh:"幸運抽獎報告"
				},
				path: 'admin/report',
				icon: {title:'BackupTableIcon',sx:'iconWhite'},
				elements: [
					{
						modal: 'TableModal',
						translateKey: 'event',
						components: [
							{
								key: 'table',
								type: 'CustomTable',
								editPath: 'admin/report/edit/',
								tableList: {
									tr1: {
										key:"eventname",
										label:{
											en: 'Event Name',
											zh: '名稱',
											}},
									tr2: {
										key:"eventnameEN",
										label:{
											en: 'Event Name(EN)',
											zh: '名稱(EN)',
										}},
									tr3: {
										key:"status",
										label:{
											en: 'status',
											zh: '狀態',
										}},
									tr4: {
										key:"startdate",
										label:{
											en: 'Start On',
											zh: '由',
										}},
									tr5: {
										key:"enddate",
										label:{
											en: 'End To',
											zh: '至',
										}},
								},
								grid: 12,
								editables: true,
								translateKey: 'event',
								operation:[{}],
							},
						], 
						buttons: [{ key: 'noBTN',label:{en:"",zh:""}, buttonType: undefined }],
					},
				],
			},			
		],
	},
};
