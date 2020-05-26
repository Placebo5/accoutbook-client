import React from "react";
import "./styles.scss";
import { formatDateDisplay } from "../../utils/formatDate";
import { IMonthlyList, ILedger } from "../../types/routes";
import { WriteButton } from "../../components/Button";
import Search from "../../components/Search";

interface IProps {
  monthlyList: Array<IMonthlyList | null>;
  handleClick: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, date?: string | undefined) => void;
  dailyList: Array<ILedger | null>;
  openModal: (event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement, MouseEvent>, data?: ILedger) => void;
  handleDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void;
  searchHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchDate: string;
}

const Presenter: React.FC<IProps> = ({ monthlyList, handleClick, dailyList, openModal, handleDelete, searchHandleChange, searchDate }) => {
  return (
    <>
      <Search name={"searchDate"} value={searchDate} searchHandleChange={searchHandleChange} />
      <WriteButton onClick={openModal} />
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>카테고리</th>
              <th>수입</th>
              <th>지출</th>
              <th>합계</th>
              <th>메모</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {monthlyList.map((monthly, i: number) => {
              const amountDate = monthly ? formatDateDisplay(monthly.amountDate || "") : undefined;
              let sum = 0;
              if (monthly) {
                sum = monthly.incomeSUM - monthly.spendingSUM;
              }
              console.log(amountDate);
              return (
                monthly && (
                  <React.Fragment key={i}>
                    <tr onClick={(e) => handleClick(e, amountDate)}>
                      <td>{amountDate}</td>
                      <td />
                      <td>{monthly.incomeSUM}</td>
                      <td>{monthly.spendingSUM}</td>
                      <td>{sum}</td>
                      <td />
                      <td />
                      <td />
                    </tr>

                    {dailyList.map((daily, index: number) => {
                      /** 클락한 일자 데이터 출력 */
                      return (
                        amountDate === formatDateDisplay(daily?.amountDate || "") && (
                          <tr key={index} className={"table__row"}>
                            <td>{formatDateDisplay(daily?.amountDate || "")}</td>
                            <td>{daily?.classiflcation}</td>
                            <td>{daily?.code === "income" ? daily.amount : 0}</td>
                            <td>{daily?.code === "spending" ? daily.amount : 0}</td>
                            <td />
                            <td>{daily?.memo}</td>
                            <td>
                              <span onClick={(e) => openModal(e, daily || undefined)}>수정</span>
                            </td>
                            <td>
                              <span onClick={(e) => handleDelete(e, daily?.id || 0)}>삭제</span>
                            </td>
                          </tr>
                        )
                      );
                    })}
                  </React.Fragment>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Presenter;
