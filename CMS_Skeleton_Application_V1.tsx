import { SkeletonProps } from './app/globalStyle';

// const path = window.location.pathname.split('/')[1];
// const fakeQuestionCategories = ['Ordering', 'Payment', 'Delivery', 'Others'];

export const SkeletonApplication: SkeletonProps = {
  menu: {
    title: 'SecondTitle',
    sections: [
      {
        title: {
          en: 'T&C',
          zh: '一般T&C',
        },
        path: 'admin/tnc',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'tandc',
            components: [
              {
                key: 't&ctitle',
                type: 'CustomInput',
                label: {
                  en: 'Term & condition Title',
                  zh: '條款及細則標題',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 't&ccontent',
                type: 'CustomEditor',
                label: {
                  en: 'Term & condition Content',
                  zh: '條款及細則內容',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'privacypolicy',
                type: 'CustomInput',
                label: {
                  en: 'Privacy Policy Title',
                  zh: '私隱政策標題',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'privacycontent',
                type: 'CustomEditor',
                label: {
                  en: 'Privacy Policy Content',
                  zh: '私隱政策內容',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'editby',
                type: 'CustomInput',
                label: {
                  en: 'Edit By',
                  zh: '更新由',
                },
                grid: 12,
                translateKey: 'tandc',
              },
              {
                key: 'editfrom',
                type: 'CustomInput',
                label: {
                  en: 'Edit on',
                  zh: '更新於',
                },
                grid: 12,
                translateKey: 'tandc',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'FAQ Category',
          zh: '常見問題種類',
        },
        path: 'admin/faq-category',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'faqCategory',
            components: [
              {
                key: 'table',
                editPath: 'admin/faq-category/edit',
                type: 'CustomTable',
                tableList: {
									tr1: {
										key:"faqcategory",
										label:{
											en: 'FAQ Category',
											zh: '常見問題種類',
											}},
									tr2: {
										key:"status",
										label:{
											en: 'Status(On/Off)',
											zh: '狀態 (啟用/停用)',
										}},
									tr3: {
										key:"updatedat",
										label:{
											en: 'Updated At',
											zh: '更新於',
										}},
								},
                grid: 12,
                editables: true,
                translateKey: 'faqCategory',
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
                label: {
                  en: '',
                  zh: '',
                },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'FAQ',
          zh: '常見問題',
        },
        path: 'admin/faq',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'faq',
            components: [
              {
                key: 'keyword',
                type: 'CustomSearch',
                label: {
                  en: 'Keyword',
                  zh: '關鍵字',
                },
                grid: 12,
                translateKey: 'faq',
              },
              {
                key: 'faq-category',
                type: 'CustomSelector',
                label: {
                  en: 'FAQ Category',
                  zh: '常見問題種類',
                },
                grid: 12,
                translateKey: 'faq',
              },
            ],
            buttons: [
              {
                key: 'search',
                label: {
                  en: 'Search',
                  zh: '搜尋',
                },
                buttonType: 'submit',
              },
            ],
          },
          {
            modal: 'TableModal',
            translateKey: 'faq',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/faq/edit',
                tableList: {
									tr1: {
										key:"faqcategory",
										label:{
											en: 'FAQ Category',
											zh: '常見問題種類',
											}},
									tr2: {
										key:"question",
										label:{
											en: 'Question',
											zh: '問題',
										}},
									tr3: {
										key:"answer",
										label:{
											en: 'Answer',
											zh: '答案',
										}},
									tr4: {
										key:"status",
										label:{
											en: 'Status',
                      zh: '狀態',
										}},
									tr5: {
										key:"updatedat",
										label:{
											en: 'Updated At',
											zh: '更新於',
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
                label: {
                  en: '',
                  zh: '',
                },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Contact',
          zh: '聯絡我們',
        },
        path: 'admin/contact',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'SearchModal',
            translateKey: 'contact',
            components: [
              {
                key: 'contactus',
                type: 'CustomMobile',
                label: {
                  en: 'Contact Us',
                  zh: '聯絡我們',
                },
                grid: 12,
                translateKey: 'contact',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'Save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
          {
            modal: 'TableModal',
            translateKey: 'contact',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/contact/edit',
                tableList: {
									tr1: {
										key:"emailtitle",
										label:{
											en: 'Email Title',
                      zh: '電郵主題',
											}},
									tr2: {
										key:"status",
										label:{
											en: 'Status',
                      zh: '狀態',
										}},
								},
                grid: 12,
                editables: true,
                translateKey: 'contact',
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
                key: 'save',
                label: {
                  en: 'Save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Tutorial',
          zh: '導覽圖片',
        },
        path: 'admin/tutorial',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'tutorial',
            components: [
              {
                key: 'gallery',
                type: 'CustomImages',
                label: {
                  en: 'Tutorial',
                  zh: '導覽圖片',
                },
                grid: 12,
                translateKey: 'tutorial',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'Save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'App Version',
          zh: '強制更新',
        },
        path: 'admin/app-version',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'TableModal',
            translateKey: 'appVersion',
            components: [
              {
                key: 'table',
                type: 'CustomTable',
                editPath: 'admin/app-version/edit',
                tableList: {
									tr1: {
										key:"iosversion",
										label:{
											en: 'IOS Version',
                      zh: 'IOS版本',
											}},
									tr2: {
										key:"ios",
										label:{
											en: 'IOS Force update',
                      zh: 'IOS強制更新',
										}},
									tr3: {
										key:"androidversion",
										label:{
											en: 'Android Version',
                      zh: 'Android版本',
										}},
									tr4: {
										key:"android",
										label:{
											en: 'Android Force Update',
                      zh: 'Android強制更新',
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
                  tr7: {
										key:"status",
										label:{
											en: 'Status(On/Off)',
											zh: '狀態 (啟用/停用)',
										}},
								},
                grid: 12,
                editables: true,
                translateKey: 'appVersion',
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
                label: {
                  en: '',
                  zh: '',
                },
                buttonType: undefined,
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Maintenance',
          zh: '系統維護',
        },
        path: 'admin/maintenance',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'maintenance',
            components: [
              {
                key: 'systemmaintenance',
                type: 'CustomSwitch',
                label: {
                  en: 'System Maintenance',
                  zh: '系統維護',
                },
                grid: 3,
                translateKey: 'maintenance',
              },
              {
                key: 'ipblock',
                type: 'IPBlock',
                label: {
                  en: 'IP Block',
                  zh: '不包括 IP',
                },
                grid: 12,
                translateKey: '',
              },
              {
                key: 'maintenancecontent',
                type: 'CustomInput',
                label: {
                  en: 'Maintenance Content',
                  zh: '維護頁面內容',
                },
                grid: 12,
                translateKey: 'maintenance',
              },
              {
                key: 'startingtime',
                type: 'CustomDatepicker',
                label: {
                  en: 'Started Date',
                  zh: '開始日期',
                },
                grid: 6,
                translateKey: 'maintenance',
              },
              {
                key: 'endingtime',
                type: 'CustomDatepicker',
                label: {
                  en: 'Ended Date',
                  zh: '結束日期',
                },
                grid: 6,
                translateKey: 'maintenance',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'Save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Clean Cache',
          zh: '清除快取',
        },
        path: 'admin/clean-cache',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'cleanCache',
            components: [
              {
                key: 'cleancache',
                type: 'CleanCache',
                label: {
                  en: 'Clean Cache',
                  zh: '清除快取',
                },
                grid: 12,
                translateKey: 'cleanCache',
              },
            ],
            buttons: [
              {
                key: 'save',
                label: {
                  en: 'Save',
                  zh: '儲存',
                },
                buttonType: 'submit',
              },
            ],
          },
        ],
      },
    ],
  },
};
