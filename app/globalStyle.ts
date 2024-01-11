import { UseFormSetValue, FieldValues } from 'react-hook-form';

const base = 1;

export const TestingAPI = 'cms-backend-ow3b.onrender.com';

export const PasswordNeccessary_Content = {
  en:"If doesn't need renew password,please leave empty",
  zh:"如不需要更新密碼，請留空"
  } as LanguageList;

export const colors = {
  white: '#fff',
  black: 'rgba(0,0,0,0.6)',
  gray: 'rgb(247, 249, 252)',
  lightGray: 'rgb(238, 238, 238)',
  darkGray: '	#C0C0C0',
  selectorColor: 'rgb(30, 41, 58)',
  transparent: 'rgba(0,0,0,0)',
  deepRed: '#ff3d00',
  deepBlue: '#385bbe',
  orange: '#ff8a00',
  darkBlue: 'rgb(35, 48, 68)',
};

export const margin = {
  xs: `${0.125 * base}rem`, //2px
  ss: `${0.38 * base}rem`, //6px++
  s: `${0.5 * base}rem`, //8px
  sm: `${1 * base}rem`, //16px
  m: `${1.25 * base}rem`, //20px
  ml: `${1.5 * base}rem`, //24px
  l: `${1.9 * base}rem`, //30px
  xl: `${2.1 * base}rem`, //34px
};

export const fontSizes = {
  xl: `${1.875 * base}rem`,
  lg: `${1.375 * base}rem`,
  md: `${1.25 * base}rem`,
  base: `${1 * base}rem`,
  sm: `${0.875 * base}rem`,
  xs: `${0.75 * base}rem`,
};

export const FlexContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
};

export const LinkContainer = {
  textDecoration: 'none',
  color: colors.black,
  fontSize: fontSizes.sm,
  paddingBottom: margin.ml,
};

export const iconWhite = {
  color: colors.white,
};

export const defaultIcon = {
  color: colors.gray,
};

export const ThemeWhite = {
  backgroundColor: colors.white,
  padding: margin.sm,
  paddingBottom: margin.ml,
  marginTop: margin.ml,
  marginBottom: margin.ml,
  borderRadius: 7,
  boxShadow: '0 0 20px 0 rgba(0,0,0,0.1)',
};

export const ThemeGray = {
  backgroundColor: colors.gray,
  padding: margin.sm,
  paddingBottom: margin.ml,
  marginTop: margin.ml,
  marginBottom: margin.ml,
};

export const ThemeTransparent = {
  backgroundColor: colors.transparent,
  padding: margin.sm,
  paddingBottom: margin.ml,
  marginTop: margin.ml,
  marginBottom: margin.ml,
};

export const TableWhite = {
  backgroundColor: colors.white,
  marginTop: margin.ml,
  marginBottom: margin.ml,
  borderRadius: 7,
  boxShadow: '0 0 20px 0 rgba(0,0,0,0.1)',
};

export const MainStyle = {
  width: '100%',
  display: 'flex',
  minHeight: '100vh',
  marginTop: '80px',
  backgroundColor: colors.gray,
};

export const Main = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  minHeight: '100vh',
  padding: margin.xl,
};

export const defaultTitle = { en: '', zh: '' };
export const emptyIcon = { title: '', icon: '' };

export interface ButtonProps extends InputFunctionProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  label: LanguageList;
  colors?: string;
  duplicated?: boolean;
}

export interface InputFunctionProps {
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
  onfocus?: React.FocusEventHandler<HTMLInputElement>;
  setValue?: UseFormSetValue<FieldValues>;
}

export interface InputProps extends InputFunctionProps {
  label: LanguageList;
  disable?: boolean;
  grid?: number;
  translateKey?: string;
  customkey: string;
  passwordneccessary?: boolean;
}

export interface ImageProps {
  onChange: (file: File) => void;
  grid?: number;
  label: LanguageList;
}

export interface EditorProps {
  label: LanguageList;
  grid?: number;
  disable?: boolean;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
  onfocus?: React.FocusEventHandler<HTMLInputElement>;
  translateKey?: string;
  //  customkey:string;
}

export interface SwitchProps {
  circle?: boolean;
  label: LanguageList;
  grid?: number;
  translateKey?: string;
}

export interface IPBlockProps {
  trash?: boolean;
  grid?: number;
  label: LanguageList;
  customkey: string;
  value: string;
}

export interface TagProps {
  trash?: boolean;
  grid?: number;
  label: LanguageList;
  key?: string;
  value: string;
}

export interface CustomSearchProps {
  grid?: number;
  label: LanguageList;
  translateKey?: string;
  customkey: string;
  // onchange?: React.ChangeEventHandler<HTMLInputElement>;
  // value?: string;
}

export interface customSelectorProps {
  label: LanguageList;
  data?: Array<string>;
  grid?: number;
  style?: React.CSSProperties;
  translateKey?: string;
  customkey: string;
}

export interface MobileProps {
  label: LanguageList;
  translateKey?: string;
  customkey: string;
}

interface styleType {
  backgroundColor?: string;
  color?: string;
  padding?: number;
  margin?: number;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: number;
  borderRadius?: number;
  border?: string;
  boxShadow?: string;
  textAlign?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
}

export interface SidebarSingleProps {
  btnText: LanguageList;
  Icon: DynamicIconProps;
  path: string;
  textColor: string;
  lang?: string;
}

export interface DatePickerProps {
  grid?: number;
  label: LanguageList;
  translateKey?: string;
  customkey: string;
}
export interface ContextProps {
  label: LanguageList;
  customkey: string;
}

export interface SkeletonElementsProps {
  key: string;
  element: JSX.Element;
}

interface editProps {
  title: string;
  elements: Element[];
}

export interface editSkeletonProps {
  edit: editProps[];
}

interface SkeletonStyle {
  logo: string;
  brandName: string;
  primaryColor: string;
  secondaryColor: string;
  warningColor: string;
  alertColor: string;
  buttonConfirm: string;
  buttonReset: string;
  selectorConfirm: string;
  sideBarTitle: string;
  sideBarText: string;
  textTitle: string;
  breadCrumbsText: string;
  theme: styleType;
}

export interface StyleSkeletonProps {
  style: SkeletonStyle[];
}



export interface getDataKeyProps {
  item: string;
}

/// **************************Skeleton All Types *************************************:
export interface SkeletonProps {
  menu: MenuProps;
}

export interface MenuProps {
  title: string;
  sections: Section[];
}

export interface Section {
  title: LanguageList;
  path: string;
  icon?: DynamicIconProps;
  elements: Element[];
}
export interface LanguageList {
  en: string;
  zh: string;
}

export interface DynamicIconProps {
  title?: string;
  sx?: string;
}

export interface Element {
  modal: 'SearchModal' | 'EditModal' | 'TableModal' | undefined;
  components: (DynamicComponentProps | DynamicTableProps)[] | undefined;
  translateKey?: string | undefined;
  buttons: Button[];
}

export interface DynamicComponentProps {
  key: string;
  type: string;
  label: LanguageList;
  grid?: number;
  translateKey?: string;
}

export interface DynamicTableProps {
  key: string;
  type: string;
  tableList:TableListSkeletonProps;
  grid?: number;
  translateKey?: string;
  editables?: boolean;
  addables?: boolean;
  deletables?: boolean;
  sortables?: boolean;
  operation: OperationProps[];
  editPath: string;
  data?: Array<TableDataProps>;
  path?: string;
}

export interface TableListSkeletonProps {
  tr1: tableTitleProps;
  tr2: tableTitleProps;
  tr3?: tableTitleProps;
  tr4?: tableTitleProps;
  tr5?: tableTitleProps;
  tr6?: tableTitleProps;
  tr7?: tableTitleProps;
  tr8?: tableTitleProps;
}

interface tableTitleProps {
  key:string;
  label: LanguageList;
}

interface TableDataProps {
  data: BrandFakeData | BranchFakeData | CategoryFakeData | AreaFakeData;
}

export interface Button {
  key: string;
  buttonType: 'button' | 'submit' | 'reset' | 'edit' | 'add' | undefined;
  label: LanguageList;
}

export interface OperationProps {
  add?: LanguageList;
  sort?: LanguageList;
  delete?: LanguageList;
  upload?: LanguageList;
  export?: LanguageList;
  download?: LanguageList;
}

//*****************************************RolePermission Type************************ */

export interface SkeletonRolePermissionProps {
  title: LanguageList;
  selectAll: boolean;
  cancelAll: boolean;
  tableList: TableListProps;
}

export interface TableListProps {
  thList: thListProps[];
  tdList: tdListProps[];
}

export interface thListProps {
  type: string;
  label: LanguageList;
  hint: LanguageList;
  disablePadding: 'normal' | 'none' | 'checkbox';
  align: 'inherit' | 'right' | 'left' | 'center';
}

export interface tdListProps {
  title: LanguageList;
  td: insideTDProps[];
}

export interface insideTDProps {
  title: LanguageList;
  checked: boolean;
  add: boolean;
  edit: boolean;
  delete: boolean;
  export: boolean;
}

//****************TableDB Type **************************** */
export interface BrandDBType {
  id: number;
  status: boolean;
  lineup: boolean;
  booking: boolean;
  ordering: boolean;
  brandcode: number;
  brandname: string;
  brandkeyword:string;
  brandimage:string; // url
  brandtype:string; //get data and get edit on category
  brandwebsite: string;
  brandendpoint:string;
  brandremark:string;
  startdate:string;
  enddate:string;
}

export interface branchDBType {
  id: number;
  status: boolean;
  lineup: boolean;
  booking: boolean;
  ordering: boolean;
  branchname: string;
  branchcode: number;
  branchlinecode:number;
  belongbranch: string;
  branchkeyword:string;
  brancharea:string;
  branchaddress:string;
  branchphone:string;
  branchworkinghour:string;
  branchbookingendpoint:string;
  startdate:string;
  maplocation:string; //get url like googlemap
}
export interface categoryDBType {
  id: number;
  categorystatus: boolean;
  categoryname: string;
}
export interface areaDBType {
  id: number;
  areaname: string;
  areatype: string; 
  areacentering: string;
  maplocation:string; //get url like googlemap
}
export interface faqCategoryDBType {
  id: number;
  status: boolean;
  faqCategory:string;

}

export interface faqDBType {
  id: number;
  status: boolean;
  faqCategory:string;
  question:string;
  answer:string;
}
export interface contactDBType {
  id: number;
  status: boolean;
  emailTitle:string;
}
export interface appVersionDBType {
  id: number;
  status: boolean;
  IOS: boolean;
  Android: boolean;
  iosversion:string;
  androidversion:string;
  forceupdatecontent:string;
  startdate:string;
  enddate:string;
  
}

export interface bannerDBType {
  id: number;
  status: boolean;
  bannerTitle:string;
  promotionID:string;
  connectiontype:string;
  connectionid:string;
  startdate:string;
  enddate:string;
  bannerImage:string;
}

export interface stampCardDBType {
  id: number;
  status: boolean;
  colorPicker:string;
  startdate:string;
  enddate:string;
  giftImage:string; //URL Link as string
}

export interface referralDBType {
  id: number;
  status: boolean;
  referralname:string;
  modal:string; //selector have to add another DB for uneditable
  referralImage:string; //URL Link as string
  introduce:string; //URL Link as string
  tandc:string; 
  startdate:string;
  enddate:string;
}

export interface campaignDBType {
  id: number;
  status: boolean;
  internaltitle:string;
  maintitle:string;
  subtitle:string;
  campiagnimage:string; ///selector have to add another DB for uneditable
  campaingbrand:string;
  campaigncontent:string;
  cta:string;
  linktype:string;
  startdate:string;
  enddate:string;
}

export interface popupbannerDBType{
  id: number;
  status: boolean;
  popupname:string;
  popupconnection:string;
  connectionID:string;
  startdate:string;
  enddate:string;
  bannerImage:string; // URL Link as string
  setmainimages:boolean;
}

export interface eventmanagementDBType{
  id: number;
  status: boolean;
  eventname:string;
  eventnameen:string;
  authtoken:string;
  tandc:string;
  tandcen:string;
  bannerimage:string;
  backgroundimage:string;
  logoimage:string;
  giftlist:number; //exclusive
}

export interface accountmanagementDBType{
  id: number;
  userid: number;
  status: boolean;
  username:string;
  useremail:string;
  usergroup:string;
  userpassword:string;
  userpasswordconfrim:string;
  userbrandgroup:string;
  usercreatedate:string;
  userlastedit:string;
  }

export interface giftBoxDBProps {
  giftid:number;
  giftname:string;
  giftnameen:string;
  gifttotalamount:number;
  giftsent:number;
  giftremain:number;
  giftrate:number;
}