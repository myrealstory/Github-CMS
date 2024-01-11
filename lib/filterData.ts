export interface FilterDatas {
  id: number;
  brandCode: number;
  brandName: string;
  brandStatus: boolean;
  modifiedDate: string;
  startTime: string;
  endTime: string;
}

export const filteredData = (data: FilterDatas[], pathId?: string) => {
  let matchedData: FilterDatas[] | null = null;
  matchedData = data
    .map((item) => item)
    .filter((item) => item.id === parseInt(pathId!));
  return matchedData;
};
