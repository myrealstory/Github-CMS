import React from 'react';
import { Skeleton } from '@/CMS_Skeleton_Bone_V1';
import { SkeletonApplication } from '@/CMS_Skeleton_Application_V1';
import {
  Button,
  DynamicComponentProps,
  DynamicTableProps,
  LanguageList,
  Section,
  SkeletonProps,
} from '../app/globalStyle';
import SearchModal from '../app/component/Modal/SearchModal';
import EditModal from '../app/component/Modal/EditModal';
import NoModal from '../app/component/Modal/NoModal';
// import { SkeletonPromote } from '@/CMS_Skeleton_Promote';
import TableModal from '@/app/component/Modal/TableModal';
// import { SkeletonMessager } from '@/CMS_Skeleton_Message_V1';
import { find } from 'lodash';
import { useAppSelector } from '@/app/redux/hooks';
import { editSkeleton } from '@/CMS_Skeleton_EditPage_V1';
// import { editSkeleton } from '@/CMS_Skeleton_EditPage_V1';
// import { MenuProps, Section } from '../globalStyle';

export interface getSectionProps {
  title: string;
}

export interface buttonProps {
  key: string;
  buttonType?: 'button' | 'submit' | 'reset' | 'edit' | 'add';
  label: LanguageList;
}

interface getArrayFindProps extends getSectionProps {
  getArray: buttonProps[];
}

interface getModalProps {
  modal: string | undefined;
  getArray: (DynamicComponentProps | DynamicTableProps)[] | undefined;
  getSubmit?: Button | undefined;
  getReset?: Button | undefined;
  getEdit?: Button | undefined;
  getTitle: LanguageList;
  lang?: 'en' | 'zh';
  path?: string;
}

interface getElementsProps {
  path: string;
  getMaster: SkeletonProps | undefined;
  editPage?: boolean;
}

export function FunctionLibary() {
  return (
    <div>
      <p>FunctionLibary</p>
    </div>
  );
}

export const sampleHandle = (props: string) => {
  console.log(props);
};

export const getElements = ({
  path,
  getMaster,
  editPage,
}: getElementsProps): {
  getSection: Section;
  submitBTN: Button | undefined;
  resetBTN: Button | undefined;
  editBTN: Button | undefined;
} => {
  const getSection = getMaster
    ? Object.values(getMaster).flatMap((item) => {
        return item.menu.sections.filter((item: Section) => item.path === path);
      })[0]
    : undefined;

  const getEdit = find(editSkeleton, { path: path });

  console.log('getEdit', getEdit);

  const getMenu: Section = editPage ? getEdit : getSection;

  const result = getButton(getMenu);
  let submitBtn: Button | undefined;
  let resetBtn: Button | undefined;
  let editBtn: Button | undefined;

  if (Array.isArray(result)) {
    console.log('No Buttons Found');
  } else {
    submitBtn = result.findSubmitBTN;
    resetBtn = result.findResetBTN;
    editBtn = result.findEditBTN;
  }

  return {
    getSection: getMenu,
    submitBTN: submitBtn,
    resetBTN: resetBtn,
    editBTN: editBtn,
  };
};

export const getBranch = ({ title }: getSectionProps) => {
  return find(Skeleton.menu.sections, { path: title });
};

export const getApplication = ({ title }: getSectionProps) => {
  return find(SkeletonApplication.menu.sections, { path: title });
};

// export const getPromote = ({ title }: getSectionProps) => {
// 	return _.find(SkeletonPromote.menu.sections, { title: title });
// };

// export const getMessager = ({ title }: getSectionProps) => {
// 	return _.find(SkeletonMessager  .menu.sections, { title: title });
// };

export const getSection = () => {
  // JSON.stringify(SkeletonMaster);
};

export const findBTN = ({ getArray, title }: getArrayFindProps) => {
  return find(getArray, { buttonType: title });
};

// export const getEditPage = ({ title }: getSectionProps) => {
// 	return _.find(editSkeleton.edit.editPage, { title: title });
// };

export function getModal({
  modal,
  getTitle,
  getArray,
  getSubmit,
  getEdit,
  getReset,
  path,
}: getModalProps) {
  switch (modal) {
    case 'SearchModal':
      return (
        <SearchModal
          getArray={getArray as DynamicComponentProps[]}
          getSubmit={getSubmit}
          getReset={getReset}
          getEdit={getEdit}
          getTitle={getTitle}
        />
      );
    case 'EditModal':
      return (
        <EditModal
          getArray={getArray as DynamicComponentProps[]}
          getSubmit={getSubmit}
          getReset={getReset}
          getEdit={getEdit}
          getTitle={getTitle}
        />
      );
    case 'AddModal':
      break;
    case 'DeleteModal':
      break;
    case 'TableModal':
      return (
        <TableModal
          getArray={getArray as DynamicTableProps[]}
          path={path as string}
        />
      );
    case undefined:
      return <NoModal getArray={getArray as DynamicComponentProps[]} />;
  }
}
export const getButton = (section: Section | undefined) => {
  if (!section) {
    return [];
  }
  // getAllbuttons from props section
  const getAllButtons = section?.elements?.flatMap(
    (element) => element.buttons
  );

  //return submit button, reset button, edit button
  const findSubmitBTN = getAllButtons?.find(
    (btn) => btn.buttonType === 'submit'
  );
  const findResetBTN = getAllButtons?.find((btn) => btn.buttonType === 'reset');
  const findEditBTN = getAllButtons?.find((btn) => btn.buttonType === 'edit');

  return { findSubmitBTN, findResetBTN, findEditBTN };
};

export const clearCache = () => {
  // Here to clear cache
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
  alert('Cache cleared');
};

export function getPathFromLocation(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  const { pathname } = window.location;
  const path = pathname.split('/').slice(2).join('/');

  return path;
}

export function T(label: LanguageList): string {
  const defaultLanguage = 'en';
  const [currentLanguage, setCurrentLanguage] = React.useState<string>(defaultLanguage);
  const langState = useAppSelector((state) => state.langReducer.lang);

  React.useEffect(() => {
    if (langState && !langState) {
      setCurrentLanguage(langState);
    } else {
      const saveLang = window.localStorage.getItem('lang');
      if (saveLang) {
        const langObj = JSON.parse(saveLang);
        setCurrentLanguage(langObj.lang);
        // console.log('subscribing to saveLang state updates',saveLang);
      } else {
        setCurrentLanguage(defaultLanguage);
      }
    }
    // console.log('subscribing to lang state updates', langState);
  }, [langState]);

  if (label == null) {
    return '';
  }
  if (label[currentLanguage as keyof LanguageList]) {
    return label[currentLanguage as keyof LanguageList];
  }

  return label[defaultLanguage as keyof LanguageList];
}
