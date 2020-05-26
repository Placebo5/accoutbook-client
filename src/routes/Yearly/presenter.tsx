import React from "react";
import "./styles.scss";

interface IProps {
  list: any;
}

const Presenter: React.FC<IProps> = ({ list }) => {
  return (
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>수입</th>
            <th>지출</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: any, i: number) => {
            let sum = 0;
            if (item) {
              // sum = item.incom - item.spending;
            }
            return (
              <tr key={i}>
                {/* <td>{item.date}</td>
                  <td>{item.incom}</td>
                  <td>{item.spending}</td> */}
                <td>{sum}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Presenter;
