import { SkeletonProps } from './app/globalStyle';

export const SkeletonMessager: SkeletonProps = {
  menu: {
    title:
      // path === 'zh' ? LangSkeleton_Bone.zh.title : LangSkeleton_Bone.en.title,
      '系列訊息管理',
    sections: [
      {
        title: {
          en: 'Reward Content',
          zh: '獎賞分享内容',
        },
        path: 'admin/RewardSharingContent',
        icon: { title: 'BackupTableIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'RewardSharingContent',
            components: [
              {
                key: 'vouchersharecontent',
                type: 'CustomInput',
                label: {
                  en: 'Voucher Share Content',
                  zh: '優惠卷分享内容',
                },
                grid: 12,
                translateKey: 'RewardSharingContent',
              },
              {
                key: 'giftsharecontent',
                type: 'CustomInput',
                label: {
                  en: 'Gift Share Content',
                  zh: '禮卷分享内容',
                },
                grid: 12,
                translateKey: 'RewardSharingContent',
              },
              {
                key: 'pointssharecontent',
                type: 'CustomInput',
                label: {
                  en: 'Collector Share Content',
                  zh: '印卡仔分享内容',
                },
                grid: 12,
                translateKey: 'RewardSharingContent',
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
          en: 'Shop Sharing Content',
          zh: '店鋪分享內容',
        },
        path: 'admin/store-sharing-content',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'RewardSharingContent',
            components: [
              {
                key: 'brandsharecontent',
                type: 'CustomInput',
                label: {
                  en: 'Brand Share Content',
                  zh: '品牌分享内容',
                },
                grid: 12,
                translateKey: 'RewardSharingContent',
              },
              {
                key: 'shopsharecontent',
                type: 'CustomInput',
                label: {
                  en: 'Shop Content',
                  zh: '店鋪分享内容',
                },
                grid: 12,
                translateKey: 'RewardSharingContent',
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
          en: 'Reward Content Remark',
          zh: '獎賞記錄備註',
        },
        path: 'admin/reward-history-remark',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'RewardSharingContent',
            components: [
              {
                key: 'brandsharecontent',
                type: 'CustomInput',
                label: {
                  en: 'Reward Remark',
                  zh: '獎賞記錄備注',
                },
                grid: 12,
                translateKey: 'RewardSharingContent',
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
          en: 'Transition History Remark',
          zh: '消費記錄備註',
        },
        path: 'admin/transaction-history-remark',
        icon: { title: 'MapIcon', sx: 'iconWhite' },
        elements: [
          {
            modal: 'EditModal',
            translateKey: 'RewardSharingContent',
            components: [
              {
                key: 'transitionhistoryremark',
                type: 'CustomInput',
                label: {
                  en: 'Transition Remark',
                  zh: '消費記錄備註',
                },
                grid: 12,
                translateKey: 'RewardSharingContent',
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
    ],
  },
};
