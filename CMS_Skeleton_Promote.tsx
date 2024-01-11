import { SkeletonProps } from './app/globalStyle';

export const SkeletonPromote: SkeletonProps = {
	menu: {
		title: 'Promotion',
		sections: [
			{
				title: {
					en: 'Banner',
					zh: '首頁橫額',
				},
				path: 'admin/banner',
				icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
				elements: [
					{
						modal: 'TableModal',
						translateKey: 'banner',
						components: [
							{
								key: 'table',
								type: 'CustomTable',
								editPath: 'admin/banner/edit/',
								tableList: {
									tr1: {
										key:"internaltitle",
										label:{
											en: 'Internal Title',
											zh: 'Internal 標題',
											}},
									tr2: {
										key:"promotionid",
										label:{
											en: 'Promotion ID',
											zh: 'Promotion ID',
											}},
									tr3: {
										key:"bannerimage",
										label:{
											en: 'Banner Image',
											zh: '橫額圖片',
											}},
									tr4: {
										key:"startdate",
										label:{
											en: 'Start On',
											zh: '開始日期',
										}},
									tr5: {
										key:"enddate",
										label:{
											en: 'Ended To',
											zh: '結束日期',
										}},
									tr6: {
										key:"status",
										label:{
											en: 'Status(On/Off)',
											zh: '狀態 (啟用/停用)',
										}},
								},
								grid: 12,
								editables: true,
								translateKey: 'brand',
								operation: [
									{
										add: {
											en: 'Add',
											zh: '新增',
										},
										sort: {
											en: 'Sort',
											zh: '排序',
										},
										delete: {
											en: 'Delete',
											zh: '刪除',
										},
									},
								],
							},
						],
						buttons: [
							{
								key: 'noBTN',
								label: { en: '', zh: '' },
								buttonType: undefined,
							},
						],
					},
				],
			},
			{
				title: {
					en: 'stampCard',
					zh: '印仔卡圖案',
				},
				path: 'admin/stampCard',
				icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
				elements: [
					{
						modal: 'TableModal',
						translateKey: 'stampCard',
						components: [
							{
								key: 'table',
								type: 'CustomTable',
								editPath: 'admin/stampCard/edit/',
								tableList: {
									tr1: {
										key:"colorpicker",
										label:{
											en: 'Coupon Color',
											zh: '印仔顔色',
											}},
									tr2: {
										key:"giftimage",
										label:{
											en: 'Gift Image',
											zh: '禮物圖案',
											}},
									tr3: {
										key:"startdate",
										label:{
											en: 'Start On',
											zh: '開始日期',
										}},
									tr4: {
										key:"enddate",
										label:{
											en: 'Ended To',
											zh: '結束日期',
										}},
									tr5: {
										key:"status",
										label:{
											en: 'Status(On/Off)',
											zh: '狀態 (啟用/停用)',
										}},
								},
								grid: 12,
								editables: true,
								translateKey: 'stampCard',
								operation: [
									{
										add: {
											en: 'Add',
											zh: '新增',
										},
										sort: {
											en: 'Sort',
											zh: '排序',
										},
										delete: {
											en: 'Delete',
											zh: '刪除',
										},
									},
								],
							},
						],
						buttons: [
							{
								key: 'noBTN',
								label: { en: '', zh: '' },
								buttonType: undefined,
							},
						],
					},
				],
			},
			{
				title: {
					en: 'referral',
					zh: '邀請好友',
				},
				path: 'admin/referral',
				icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
				elements: [
					{
						modal: 'EditModal',
						translateKey: 'stampCard',
						components: [
							{
								key: 'referral',
								// TODO: {...all} to pass value and onChange to searchModal
								type: 'CustomSwitch',
								label: {
									en: 'Status',
									zh: '狀態',
								},
								grid: 3,
								translateKey: 'referral',
							},
						],
						buttons: [
							{
								key: 'confirm',
								label: {
									en: 'confirm',
									zh: '確認',
								},
								buttonType: 'submit',
							},
						],
					},
					{
						modal: 'TableModal',
						translateKey: 'stampCard',
						components: [
							{
								key: 'table',
								type: 'CustomTable',
								editPath: 'admin/referral/edit/',
								tableList: {
									tr1: {
										key:"referralname",
										label:{
											en: 'Referral Name',
											zh: '名稱',
											}},
									tr2: {
										key:"modal",
										label:{
											en: 'Modal',
											zh: '模板',
											}},
									tr3: {
										key:"status",
										label:{
											en: 'Status(On/Off)',
											zh: '狀態 (啟用/停用)',
										}},
								},
								grid: 12,
								editables: true,
								translateKey: 'stampCard',
								operation: [
									{
										add: {
											en: 'Add',
											zh: '新增',
										},
										sort: {
											en: 'Sort',
											zh: '排序',
										},
										delete: {
											en: 'Delete',
											zh: '刪除',
										},
									},
								],
							},
						],
						buttons: [
							{
								key: 'noBTN',
								label: { en: '', zh: '' },
								buttonType: undefined,
							},
						],
					},
				],
			},
			{
				title: {
					en: 'campaign',
					zh: '宣傳頁面',
				},
				path: 'admin/campaign',
				icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
				elements: [
					{
						modal: 'TableModal',
						translateKey: 'stampCard',
						components: [
							{
								key: 'table',
								type: 'CustomTable',
								editPath: 'admin/stampCard/edit/',
								tableList: {
									tr1: {
										key:"campaignid",
										label:{
											en: 'Campaign ID',
											zh: '活動 ID',
											}},
									tr2: {
										key:"internaltitle",
										label:{
											en: 'Internal Title',
											zh: 'Internal 標題',
											}},
									tr3: {
										key:"maintitle",
										label:{
											en: 'Main Title',
											zh: '標題',
											}},
									tr4: {
										key:"status",
										label:{
											en: 'Status(On/Off)',
											zh: '狀態 (啟用/停用)',
										}},
									tr5: {
										key:"startdate",
										label:{
											en: 'Start On',
											zh: '開始日期',
										}},
									tr6: {
										key:"enddate",
										label:{
											en: 'Ended To',
											zh: '結束日期',
										}},
								},
								grid: 12,
								editables: true,
								translateKey: 'stampCard',
								operation: [
									{
										add: {
											en: 'Add',
											zh: '新增',
										},
										delete: {
											en: 'Delete',
											zh: '刪除',
										},
									},
								],
							},
						],
						buttons: [
							{
								key: 'noBTN',
								label: { en: '', zh: '' },
								buttonType: undefined,
							},
						],
					},
				],
			},
			{
				title: {
					en: 'Popup-Banner',
					zh: '彈出式廣告',
				},
				path: 'admin/popup-banner',
				icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
				elements: [
					{
						modal: 'TableModal',
						translateKey: 'stampCard',
						components: [
							{
								key: 'table',
								type: 'CustomTable',
								editPath: 'admin/popup-banner/edit/',
								tableList: {
									tr1: {
										key:"popupname",
										label:{
											en: 'PopUp Banner Name',
											zh: '名稱',
											}},
									tr2: {
										key:"popupimage",
										label:{
											en: 'Popup Image',
											zh: '宣傳圖片',
											}},
									tr3: {
										key:"status",
										label:{
											en: 'Status(On/Off)',
											zh: '狀態 (啟用/停用)',
										}},
									tr4: {
										key:"startdate",
										label:{
											en: 'Start On',
											zh: '開始日期',
										}},
									tr5: {
										key:"enddate",
										label:{
											en: 'Ended To',
											zh: '結束日期',
										}},
									tr6: {
										key:"setmainimages",
										label:{
											en: 'Active Main Images',
											zh: '主要圖片',
										}},
								},
								grid: 12,
								editables: true,
								translateKey: 'stampCard',
								operation: [
									{
										add: {
											en: 'Add',
											zh: '新增',
										},
										delete: {
											en: 'Delete',
											zh: '刪除',
										},
									},
								],
							},
						],
						buttons: [
							{
								key: 'noBTN',
								label: { en: '', zh: '' },
								buttonType: undefined,
							},
						],
					},
				],
			},
		],
	},
};
