'use client';
import React, { useEffect, useState } from 'react';
import { useGetDataQuery } from '@/app/redux/services/dataApi';
// Custom stlye
import { DynamicTableProps } from '../globalStyle';
import { usePathname } from 'next/navigation';

import {
  Table,
  TableHeader,
  ToolBarList,
  TableHeaderList,
  TableBody,
  DataType,
  ToolbarIconType,
  RenderEditButtonProps,
  PaginationProps,
} from './style/style.table';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TablePagination,
} from '@mui/material';
// MUI icons
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LinearProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

function CustomTable({
  tableList,
  editables,
  editPath,
  operation,
  path,
}: DynamicTableProps) {
  const [checked, setChecked] = useState<boolean[]>([]);
  const { data, error, isLoading } = useGetDataQuery(
    path ? path?.replace('admin/', '') : ''
  );
  const tableHeaderList = Object.values(tableList).map((item) => {
    return item.label;
  });

  const [tableData, setTableData] = useState<DataType[]>([]);
  const [checkedId, setCheckedId] = useState<number[]>([]);
  // const [deleteData] = useDeleteDataMutation();
  useEffect(() => {
    function fetchData() {
      data ? setTableData(data && data.data) : null;
    }
    fetchData();
  }, [data, error, isLoading]);

  useEffect(() => {
    tableData.length
      ? setChecked(new Array(tableData.length).fill(false))
      : null;
  }, [tableData]);

  const [order, setOrder] = useState('ASC');
  const sorting = (col: string) => {
    const sorted = [...tableData].sort((a, b) => {
      const propA = a[col];
      const propB = b[col];

      switch (typeof propA) {
        case 'string':
          return order === 'ASC'
            ? propA.toLowerCase().localeCompare((propB as string).toLowerCase())
            : (propB as string)
                .toLowerCase()
                .localeCompare(propA.toLowerCase());
        case 'number':
        case 'boolean':
          return order === 'ASC'
            ? Number(propA) - Number(propB)
            : Number(propB) - Number(propA);
        default:
          return 0;
      }
    });
    setTableData(sorted);
    setOrder(order === 'ASC' ? 'DSC' : 'ASC');
  };

  // lang
  const pathName = usePathname();
  // data
  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const indexOfLastItem = (page + 1) * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (
    e: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  // Toolbar
  const toolBarIcons: ToolbarIconType = {
    Add: <AddIcon />,
    Sort: <ModeEditIcon />,
    Delete: <DeleteIcon />,
  };

  const toolBarIcon = (name: string) => toolBarIcons[name];

  const toolBarFunction = (name: string) => {
    switch (name) {
      case 'Add':
        return () => router.push(`${path}/create/`);
      case 'Delete':
        // return async () => {
        //   const res = await fetch(
        //     `https://cms-backend-ow3b.onrender.com/table/brand/1`,
        //     {
        //       method: 'DELETE',
        //     }
        //   );
        //   const data = await res.json();
        //   console.log(data);
        // };
        // return deleteData({ id: 1, title: 'brand' });
        return () => {
          setTableData(
            tableData.filter((data) => !checkedId.includes(data.id as number))
          );
        };
    }
  };

  // Edit button
  const router = useRouter();
  const RenderEditButton = ({ dataId }: RenderEditButtonProps) => {
    return (
      <Button
        variant='contained'
        color='primary'
        size='small'
        onClick={() => router.push(`${editPath}/${dataId}`)}
      >
        {pathName.includes('zh') ? '編輯' : 'Edit'}
      </Button>
    );
  };

  // checkbox control
  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(new Array(tableData.length).fill(event.target.checked));
    console.log(checked);
  };

  const handleChildChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    id: number
  ) => {
    setChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = event.target.checked;
      return newState;
    });
    setCheckedId((prevId) => {
      const newId = [...prevId, id];
      const removeDuplicates = (arr: number[]): number[] => {
        return arr.reduce((acc: number[], curr) => {
          acc.includes(curr)
            ? acc.splice(acc.indexOf(curr), 1)
            : acc.push(curr);
          return acc;
        }, []);
      };
      const arr = removeDuplicates(newId);
      return arr;
    });
  };

  return (
    <Table>
      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <TableHeader>
        <ToolBarList>
          {operation?.map((item, i) =>
            Object.values(item).map((item) => {
              return (
                <li key={i}>
                  <Button
                    variant='text'
                    style={{
                      color:
                        item.en === 'Delete'
                          ? checked.some((item) => item === true)
                            ? 'rgb(211, 47, 47)'
                            : 'rgba(0, 0, 0, 0.26)'
                          : '',
                      pointerEvents:
                        item.en === 'Delete'
                          ? checked.some((item) => item === true)
                            ? 'auto'
                            : 'none'
                          : undefined,
                    }}
                    onClick={toolBarFunction(item.en)}
                  >
                    {toolBarIcon(item.en)}
                    {pathName.includes('zh') ? item.zh : item.en}
                  </Button>
                </li>
              );
            })
          )}
        </ToolBarList>
        <TableHeaderList>
          <FormControlLabel
            label=''
            control={
              <Checkbox
                checked={checked.every(Boolean)}
                indeterminate={!checked.every(Boolean) && checked.some(Boolean)}
                onChange={handleParentChange}
              />
            }
          />

          {tableHeaderList.map((item, i) => {
            return (
              item && (
                <li key={i}>
                  <p>{pathName.includes('zh') ? item.zh : item.en}</p>
                  <IconButton
                    aria-label='arrowUpward'
                    size='small'
                    onClick={() =>
                      sorting(Object.keys(tableData?.[1]).slice(1)[i])
                    }
                  >
                    <ArrowUpwardIcon fontSize='small' />
                  </IconButton>
                  <IconButton aria-label='moreVert' size='small'>
                    <MoreVertIcon fontSize='small' />
                  </IconButton>
                </li>
              )
            );
          })}
          {editables ? (
            <li>
              <p>{pathName.includes('zh') ? '編輯' : 'Edit'}</p>
              <IconButton aria-label='moreVert' size='small'>
                <MoreVertIcon fontSize='small' />
              </IconButton>
            </li>
          ) : (
            ''
          )}
        </TableHeaderList>
      </TableHeader>
      <TableBody>
        {currentItems.map((item, i) => {
          const isChecked = checked[i] ?? false;
          return (
            <ul
              key={item.id}
              style={{ backgroundColor: isChecked ? 'rgb(247, 249, 252)' : '' }}
            >
              <FormControlLabel
                label={``}
                control={
                  <Checkbox
                    checked={isChecked}
                    onChange={(e) => handleChildChange(e, i, item.id as number)}
                    value={item.id}
                  />
                }
              />
              {Object.values(item)
                .slice(1, tableHeaderList.length + 1)
                .map((item, i) => {
                  return (
                    <li key={i}>
                      <p>
                        {typeof item === 'boolean'
                          ? item === true
                            ? '啟用'
                            : '禁用'
                          : item}
                      </p>
                    </li>
                  );
                })}
              <li>
                <RenderEditButton dataId={item.id} />
              </li>
            </ul>
          );
        })}
      </TableBody>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalItems={tableData.length}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
        page={page}
      />
    </Table>
  );
}

const Pagination = ({
  rowsPerPage,
  totalItems,
  handleChangeRowsPerPage,
  handleChangePage,
  page,
}: PaginationProps) => {
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
  // 	pageNumbers.push(i);
  // }

  return (
    <TablePagination
      component='div'
      count={totalItems}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5, 15, 25]}
      style={{ overflow: 'hidden' }}
    />
  );
};

export default CustomTable;
