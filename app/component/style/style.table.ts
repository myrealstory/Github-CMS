import * as global from '../../globalStyle';
import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
  text-align: left;
  & > * {
    box-sizing: border-box;
  }
  /* max-width: 470px; */
  @media (max-width: 992px) {
    overflow: auto hidden;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: ${global.margin.ml};
  /* height: 20px; */
  & div {
    height: 30px;
  }
  & li {
    list-style: none;
    & a {
      border-radius: 3px;
      margin: 5px;
      border: 1px solid #000;
      padding: 5px;
      &:hover {
        background-color: #b6b6b6;
      }
    }
  }
  & span {
    margin-left: 0px;
  }
`;

export const TableHeader = styled.div`
  font-weight: 500;
  /* padding-left: ${global.margin.sm}; */
  padding-bottom: ${global.margin.s};
  white-space: nowrap;
  font-size: ${global.fontSizes.sm};
  cursor: pointer;
`;

export const ToolBarList = styled.ul`
  display: flex;
  padding: ${global.margin.xs};
  margin: 0 0 ${global.margin.m} 0;
  cursor: initial;

  & li {
    text-decoration: none;
    list-style: none;
  }
  & button {
    font-size: ${global.fontSizes.xs};
    height: 100%;
  }
`;

export const TableHeaderList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${global.margin.s} 0;
  margin: 0;
  position: relative;
  cursor: initial;
  & > * {
    border-right: 2px solid ${global.colors.lightGray};
  }
  & span {
    position: absolute;
    /* top: ${global.margin.s}; */
    border-right: unset;
    left: ${global.margin.s};
    padding-right: ${global.margin.ss};
  }
  & li {
    min-width: 180px;
    width: 180px;
    list-style: none;
    padding: 0 ${global.margin.m};
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:nth-child(2) {
      padding: 0 ${parseFloat(global.margin.xl) * 1.5}rem;
    }
    &:first-child {
      width: 20px;
    }
    &:last-child {
      margin-left: auto;
      border-right: unset;
    }
    @media (max-width: 768px) {
    }
    & button {
      outline: none;
      border: none;
      background-color: transparent;
      margin-left: ${global.margin.ss};
      opacity: 0;
      transition: all 250ms;
      & svg {
        fill: ${global.colors.darkGray};
        transition: all 250ms;
      }
      &:last-child {
        position: absolute;
        right: 0;
        margin-right: ${global.margin.xs};
        & svg {
          fill: ${global.colors.black};
        }
      }
    }
    &:hover {
      & button[aria-label='arrowUpward'] {
        opacity: 1;
      }
    }
    & button[aria-label='moreVert'] {
      opacity: 1;
    }
  }
`;

export const TableBody = styled.div`
  padding: 0;
  & ul {
    min-width: 100%;
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    align-items: center;
    margin: 0;
    line-height: '50px';
    padding: 0;
    transition: all 250ms;
    position: relative;
    border-top: 1px solid ${global.colors.lightGray};

    &:hover {
      background-color: ${global.colors.gray};
    }
    & li input:checked ~ li {
      background-color: #f00;
    }
    & span {
      position: absolute;
      left: ${global.margin.s};
    }
    & li {
      height: 100%;
      /* border-top: 1px solid ${global.colors.lightGray}; */
      justify-content: flex-start;
      line-height: 1;
      list-style: none;
      font-size: ${global.fontSizes.sm};
      padding: ${global.margin.s} ${global.margin.m};
      min-width: 180px;
      width: 180px;
      display: flex;
      align-items: center;
      &:nth-child(2) {
        padding: ${global.margin.s} ${parseFloat(global.margin.xl) * 1.5}rem;
      }
      &:last-child {
        margin-left: auto;
      }
      & p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
      }
      @media (max-width: 768px) {
        /* min-width: 92px;
				width: 92px; */
      }
    }
  }
`;

export interface PaginationProps {
  rowsPerPage: number;
  totalItems: number;
  page: number;
  handleChangeRowsPerPage: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleChangePage: (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
}
export interface DataType {
  [key: string]: number | string;
}
export interface RenderEditButtonProps {
  dataId: number | string;
}
export interface ToolbarIconType {
  [key: string]: JSX.Element | string | undefined;
}
