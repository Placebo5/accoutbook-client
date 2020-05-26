export interface IMonthlyList {
  // amount: number;
  amountDate?: string;
  // categoryId: number;
  // classiflcation: string;
  // createAt?: Date;
  // id: number;
  incomeSUM: number;
  // code: string;
  // memberId: number;
  // memo: string;
  spendingSUM: number;
  // updateAt?: Date;
}

export interface ILedger {
  amount: number;
  amountDate: string;
  categoryId: number;
  createAt?: Date;
  id: number;
  memberId: number;
  memo: string;
  updateAt?: Date;
  classiflcation?: string;
  code: String;
}

export interface ICategory {
  id: number;
  classiflcation: string;
  code: String;
}

// export interface IDailyList {
//   amount: number;
//   amountDate: string;
//   categoryId: number;
//   createAt?: Date;
//   id: number;
//   memberId: number;
//   memo: string;
//   updateAt?: Date;
//   classiflcation: string;
//   code: String;
// }
