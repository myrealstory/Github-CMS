import { SkeletonRolePermissionProps } from "./app/globalStyle";

export const Skeleton_RolePermission:SkeletonRolePermissionProps = {
    title:{
        en:"Permission Management",
        zh:"管理權限"
    },
    selectAll:true,
    cancelAll:true,
    tableList:{
        thList:[
            {
                type:"",
                label:{en:"feature",zh:"功能"},
                hint:{en:"function of all listed",zh:"所有列出的功能"},
                disablePadding:"normal",
                align:"inherit",
            },
            {
                type:"",
                label:{en:"Checked",zh:"查看"},
                hint:{en:"function of all listed",zh:"所有列出的功能"},
                disablePadding:"none",
                align:"center",
            },
            {
                type:"",
                label:{en:"Add",zh:"新增"},
                hint:{en:"function of all listed",zh:"所有列出的功能"},
                disablePadding:"none",
                align:"center",
            },
            {
                type:"",
                label:{en:"Edit",zh:"編輯"},
                hint:{en:"function of all listed",zh:"所有列出的功能"},
                disablePadding:"none",
                align:"center",
            },
            {
                type:"",
                label:{en:"Delete",zh:"刪除"},
                hint:{en:"function of all listed",zh:"所有列出的功能"},
                disablePadding:"none",
                align:"center",
            },
            {
                type:"",
                label:{en:"Export",zh:"匯出"},
                hint:{en:"function of all listed",zh:"所有列出的功能"},
                disablePadding:"none",
                align:"center",
            },
        ],
        tdList:[
            {
                title:{en:"Brand",zh:"品牌管理"},
                td:[
                    {
                        title:{en:"Brand",zh:"品牌管理"},
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Branch',
                            zh: '商品管理',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Category',
                            zh: '商品分類',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Area',
                            zh: '地區分類',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                ]
            },
            {
                title:{en:"Application Content",zh:"應用程式内容"},
                td:[
                    {
                        title: {
                            en: 'T&C',
                            zh: '一般T&C',
                        },
                        checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                    {
                        title: {
                            en: 'FAQ Category',
                            zh: '常見問題種類',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                         title: {
                            en: 'FAQ',
                            zh: '常見問題',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Contact',
                            zh: '聯絡我們',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Tutorial',
                            zh: '導覽圖片',
                        },
                        checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                    {
                        title: {
                            en: 'App Version',
                            zh: '強制更新',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                     {
                        title: {
                            en: 'Maintenance',
                            zh: '系統維護',
                        },
                        checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                ]
            },
            {
                title:{en:"Promote Management",zh:"推廣管理"},
                td:[
                    {
                        title: {
                            en: 'Banner',
                            zh: '首頁橫額',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'stampCard',
                            zh: '印仔卡圖案',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'referral',
                            zh: '邀請好友',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'campaign',
                            zh: '宣傳頁面',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Popup-Banner',
                            zh: '彈出式廣告',
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                ]
            },
            {
                title:{en:"Information Management",zh:"系列訊息管理"},
                td:[
                    {
                        title: {
                            en: 'Reward Sharing Content',
                            zh: '獎賞分享内容',
                        },
                         checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Shop Sharing Content',
                            zh: '店鋪分享內容',
                        },
                         checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Reward Content Remark',
                            zh: '獎賞記錄備註',
                        },
                         checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                    {
                        title: {
                            en: 'Transition History Remark',
                            zh: '消費記錄備註',
                        },
                        checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                ]
            },
            {
                title:{en:"LuckyDraw Management",zh:"幸運抽獎"},
                td:[
                    {
                       title:{ 
                            en:"Event Management",
                            zh:"幸運抽獎管理"
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title:{ 
                            en:"Event Report",
                            zh:"幸運抽獎報告"
                        },
                        checked:true,
                        add:false,
                        edit:true,
                        delete:false,
                        export:false,
                    },
                ]
            },
            {
                title:{en:"Setting Management",zh:"設定"},
                td:[
                    {
                       title:{ 
                            en:"User Management",
                            zh:"用戶群"
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                    {
                        title:{ 
                            en:"Account Management",
                            zh:"賬戶"
                        },
                        checked:true,
                        add:true,
                        edit:true,
                        delete:true,
                        export:false,
                    },
                ]
            },
        ],
    },
}