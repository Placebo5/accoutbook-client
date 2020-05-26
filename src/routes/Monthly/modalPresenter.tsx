import React from "react";
import "./styles.scss";
import { formatDateDisplay } from "../../utils/formatDate";
import { SubMitButton } from "../../components/Button";
import { ILedger, ICategory } from "../../types/routes";
import { numberCommas } from "../../utils/validations";

interface IProps {
  modalHandleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  ledger: ILedger | null;
  category: Array<ICategory | null>;
  handleSubmit: any;
}

const ModalPresenter: React.FC<IProps> = ({ modalHandleChange, ledger, category, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>항목</label>
        <div>
          <input
            type="radio"
            className="from-group__radio"
            name="code"
            value="income"
            checked={ledger?.code === "income" ? true : false}
            onChange={modalHandleChange}
          />
          수입
          <input
            type="radio"
            className="from-group__radio"
            name="code"
            value="spending"
            checked={ledger?.code === "spending" ? true : false}
            onChange={modalHandleChange}
          />
          지출
        </div>
      </div>
      <div className="form-group">
        <label>날짜</label>
        <input type="date" name="amountDate" onChange={modalHandleChange} value={formatDateDisplay(ledger?.amountDate || "")} required={true} />
      </div>
      <div className="form-group">
        <label>카테고리</label>
        <select name="categoryId" onChange={modalHandleChange} value={ledger?.categoryId} required={true}>
          <option value={0}>== 선택 ==</option>
          {category.map((list, i: number) => {
            return (
              list?.code === ledger?.code && (
                <option key={i} value={list?.id}>
                  {list?.classiflcation}
                </option>
              )
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label>금액</label>
        <input type="text" name="amount" onChange={modalHandleChange} value={numberCommas(ledger?.amount || 0)} required={true} />
      </div>
      <div className="form-group">
        <label>메모</label>
        <textarea name="memo" onChange={modalHandleChange} value={ledger?.memo} />
      </div>
      <SubMitButton />
    </form>
  );
};

export default ModalPresenter;
