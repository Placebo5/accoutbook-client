// 숫자만 입력가능
export const numberForMat = (str: string) => {
  console.log(str.replace(/[^0-9]/g, ""));
  return Number(str.replace(/[^0-9]/g, ""));
};

// 3자리마다 콤마찍기(,)
export const numberCommas = (str: number) => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 3자리마다 콤마풀기(,)
export const numberNuCommas = (str: number) => {
  return str.toString().replace(/[^\d]+/g, "");
};
