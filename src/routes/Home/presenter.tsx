import React from "react";
import "./styles.scss";
import Search from "../../components/Search";

interface IProps {
  searchDate: string;
  searchHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Presenter: React.FC<IProps> = ({ searchDate, searchHandleChange }) => {
  return (
    <>
      <Search name="searchDate" value={searchDate} searchHandleChange={searchHandleChange} />
      <div className="sction">
        <div className="content">
          <div className="content__row">
            <label>월 수입</label>
            <span>
              <input type="text" />
            </span>
          </div>
          <div className="content__row">
            <label>월 지출</label>
            <span>
              <input type="text" />
            </span>
          </div>
          <div className="content__row">
            <label>합계</label>
            <span>
              <input type="text" />
            </span>
          </div>
          <div className="content__row">
            <label>월 지출 목표</label>
            <span>
              <input type="text" />
            </span>
          </div>
          <div className="content__row">
            <label>목표현황</label>
            <span>
              <input type="text" />
            </span>
          </div>
          {/* <div className="content__item">
            <div>월 수입</div>
            <div>월 지출</div>
            <div>합계</div>
            <div>월 지출 목표</div>
            <div>목표현황</div>
          </div>
          <div className="content__item">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <div>50,000</div>
            <div>30,000</div>
            <div>20,000</div>
            <div>200,000</div>
            <div>170,000</div>
          </div> */}
        </div>
        <div className="content">
          <div>차트</div>
          <div>테이블</div>
        </div>
        <div className="content">길게게게ㅔ게게겍 차트!</div>
      </div>
    </>
  );
};

export default Presenter;
