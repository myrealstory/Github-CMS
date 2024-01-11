import dynamic from 'next/dynamic';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MapIcon from '@mui/icons-material/Map';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  ButtonProps,
  ContextProps,
  CustomSearchProps,
  DatePickerProps,
  IPBlockProps,
  InputProps,
  EditorProps,
  MobileProps,
  SwitchProps,
  customSelectorProps,
  ImageProps,
  TagProps,
} from '@/app/globalStyle';

const CustomSearch = dynamic(() => import('../app/component/CustomSearch'));
const CustomSelector = dynamic(() => import('../app/component/CustomSelector'));
const CustomInput = dynamic(() => import('../app/component/CustomInput'));
const CustomSwitch = dynamic(() => import('../app/component/CustomSwitch'));
const CustomButton = dynamic(() => import('../app/component/CustomButton'));
const CleanCache = dynamic(() => import('../app/component/CleanCache'));
const CustomContent = dynamic(() => import('../app/component/CustomContent'));
const CustomImages = dynamic(() => import('../app/component/CustomImages'));
const CustomEditor = dynamic(() => import('../app/component/CustomEditor'));
const CustomDatepicker = dynamic(
  () => import('../app/component/CustomDatepicker')
);
const CustomMobile = dynamic(() => import('../app/component/CustomMobile'));
const CustomMapPicker = dynamic(
  () => import('../app/component/CustomMapPicker')
);
const CustomVersionUpgrade = dynamic(
  () => import('../app/component/CustomVersionUpgrade')
);
const IPBlock = dynamic(() => import('../app/component/IPBlock'));
const CustomTagKey = dynamic(() => import('../app/component/CustomTagKey'));
const CustomColorPicker = dynamic(
  () => import('../app/component/CustomColorPicker')
);
const RolePermission = dynamic(() => import('../app/component/RolePermission'));
const CustomGift = dynamic(() => import('../app/component/CustomGift'));
const CustomAuthToken = dynamic(()=> import('../app/component/CustomAuthToken'));

export type CustomComponentMap = {
  CustomSearch: React.ComponentType<CustomSearchProps>;
  CustomSelector: React.ComponentType<customSelectorProps>;
  CustomInput: React.ComponentType<InputProps>;
  CustomSwitch: React.ComponentType<SwitchProps>;
  CustomButton: React.ComponentType<ButtonProps>;
  CleanCache: React.ComponentType;
  CustomContent: React.ComponentType<ContextProps>;
  CustomImages: React.ComponentType<ImageProps>;
  CustomEditor: React.ComponentType<EditorProps>;
  CustomDatepicker: React.ComponentType<DatePickerProps>;
  CustomMobile: React.ComponentType<MobileProps>;
  CustomMapPicker: React.ComponentType;
  CustomVersionUpgrade: React.ComponentType;
  IPBlock: React.ComponentType<IPBlockProps>;
  CustomTagKey: React.ComponentType<TagProps>;
  CustomColorPicker: React.ComponentType<InputProps>;
  RolePermission: React.ComponentType;
  CustomGift: React.ComponentType;
  CustomAuthToken: React.ComponentType;
};

export type CustomIconMap = {
  BackupTableIcon: React.ElementType;
  BrandingWatermarkIcon: React.ElementType;
  Inventory2Icon: React.ElementType;
  MapIcon: React.ElementType;
  RemoveIcon: React.ElementType;
};

export const COMPONENT_MAPPING: CustomComponentMap = {
  CustomSearch: CustomSearch,
  CustomSelector: CustomSelector,
  CustomInput: CustomInput,
  CustomSwitch: CustomSwitch,
  CustomButton: CustomButton,
  CleanCache: CleanCache,
  CustomContent: CustomContent,
  CustomImages: CustomImages,
  CustomEditor: CustomEditor,
  CustomDatepicker: CustomDatepicker,
  CustomMobile: CustomMobile,
  CustomMapPicker: CustomMapPicker,
  CustomVersionUpgrade: CustomVersionUpgrade,
  IPBlock: IPBlock,
  CustomTagKey: CustomTagKey,
  CustomColorPicker: CustomColorPicker,
  RolePermission: RolePermission,
  CustomGift: CustomGift,
  CustomAuthToken: CustomAuthToken,
};

export const ICON_MAPPING: CustomIconMap = {
  BackupTableIcon: BackupTableIcon,
  BrandingWatermarkIcon: BrandingWatermarkIcon,
  Inventory2Icon: Inventory2Icon,
  MapIcon: MapIcon,
  RemoveIcon: RemoveIcon,
};

const getPath = () => {
  const path = window.location.pathname.split('/')[1];
  return path;
};

export default getPath;
