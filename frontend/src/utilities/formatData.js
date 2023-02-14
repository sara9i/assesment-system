import { type } from "./constants";

export const addSorters = (tableData) => {
  return tableData.map((data) => {
    const skipSorter = data?.skipInjectedSorter ?? false;

    //skip adding the below sorter functionality
    if (skipSorter) return data;

    const dataIndex = data?.dataIndex;
    const dataType = data?.type;
    const sortDirections = ["descend", "ascend"];
    const sorter =
      dataType === type.NUMBER
        ? function (a, d) {
            const numA = a?.[dataIndex] ?? 0;
            const numD = d?.[dataIndex] ?? 0;
            return numA - numD;
          }
        : function (a, d) {
            const strA = a?.[dataIndex]?.toString() ?? "";
            const strD = d?.[dataIndex]?.toString() ?? "";
            return strA.localeCompare(strD);
          };

    return {
      sorter,
      sortDirections,
      ...data,
    };
  });
};
