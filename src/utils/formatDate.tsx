import { format } from "date-fns";
import add from "date-fns/add";

/** 날짜 표시형식 ("YYYY-MM-DD") */
export const formatDateDisplay: (date: string | Date) => string = (date) => {
  if (date === "") {
    return date;
  }
  return format(new Date(date), "yyyy-MM-dd");
};

/** 날짜,시간 표시 형식 ("YYYY-MM-DD HH:MM:SS") */
export const formatDateTimeDisplay: (date: string | Date) => string = (date) => {
  if (date === "") {
    return date;
  }
  return format(new Date(date), "yyyy-MM-dd HH:mm:ss");
};

/** 한달 날짜 구하기 */
export const makeDateRange = (from: string) => {
  // const from = "2020-05";
  const year = Number(from.substring(0, 4));
  const month = Number(from.substring(5, 7));
  const lastDay = formatDateDisplay(new Date(year, month, 0));

  console.log(year);
  console.log(month);

  // let startDate = "2020-05-01";
  // const endDate = "2020-05-31";
  let startDate = from + "-01";
  const endDate = from + lastDay;

  // console.log(formatDateDisplay(new Date(year, month, 0)));

  const dateRange: string[] = [];

  while (startDate <= endDate) {
    if (!dateRange.includes(startDate)) {
      dateRange.push(startDate);
    }
    startDate = formatDateDisplay(add(new Date(startDate), { days: 1 }));
  }
  console.log(Array.from(new Set(dateRange)));
  return Array.from(new Set(dateRange));
};
