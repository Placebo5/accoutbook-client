import React from "react";
import Presenter from "./presenter";
import { IMonthlyList, ILedger, ICategory } from "../../types/routes";
import { formatDateDisplay } from "../../utils/formatDate";
import Modal from "react-modal";
import { customStyles } from "../../components/Modal";
import ModalPresenter from "./modalPresenter";
import { numberForMat } from "../../utils/validations";
import Loading from "../../components/Loading";

interface IState {
  loading: boolean;
  monthlyList: Array<IMonthlyList | null>;
  dailyList: Array<ILedger | null>;
  category: Array<ICategory | null>;
  ledger: ILedger | null;
  modalIsOpen: boolean;
  searchDate: string;
}
const yearMonth = formatDateDisplay(new Date()).substring(0, 7);

class Monthly extends React.Component<any, IState> {
  public initLedger: ILedger = {
    amount: 0,
    amountDate: formatDateDisplay(new Date()),
    id: 0,
    memberId: 0,
    memo: "",
    categoryId: 0,
    code: "spending",
  };

  state = {
    loading: true,
    monthlyList: [],
    dailyList: [],
    category: [],
    ledger: this.initLedger,
    modalIsOpen: false,
    searchDate: yearMonth,
  };

  componentDidMount() {
    this.getData();
  }

  public getData = async () => {
    /** 전체 리스트 조회 */
    const monthlyList = await fetch(`/ledger/${this.state.searchDate}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    /** 카테고리 전제 조회 */
    const category = await fetch("/category")
      .then((res) => res.json())
      .catch((err) => console.log(err));

    this.setState({
      monthlyList,
      category,
      loading: false,
    });
  };

  /** 월별 테이블 click발생 이벤트 - 일자별 데이터 구하기 */
  public handleClick: (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, date: string | undefined) => void = async (e, date?: string) => {
    let amountDate = date;
    if (!date) {
      amountDate = formatDateDisplay(new Date());
    }
    const dailyList = await fetch(`/ledger/day/${amountDate}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    console.log(dailyList);

    this.setState({
      dailyList,
    });
  };

  /** 등록, 수정 */
  public handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = async (e) => {
    e.preventDefault();
    const { id } = this.state.ledger;
    const method = id === 0 ? "POST" : "PUT";
    const url = id === 0 ? "" : `/${id}`;

    await fetch("/ledger" + url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.ledger),
    })
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            modalIsOpen: false,
            ledger: this.initLedger,
          });
        } else {
          alert("에러가 발생했습니다.");
        }
      })
      .catch((err) => console.log(err));
  };

  public openModal: (event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement, MouseEvent>, data?: ILedger) => void = (e, data) => {
    let { ledger } = this.state;
    if (data) {
      ledger = {
        ...data,
        amountDate: formatDateDisplay(data.amountDate),
      };
    }

    this.setState({
      modalIsOpen: true,
      ledger,
    });
  };

  public closeModal: (event: React.MouseEvent<any, MouseEvent>) => void = () => {
    this.setState({
      modalIsOpen: false,
      ledger: this.initLedger,
    });
  };

  // modal form handleChange
  public modalHandleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void = (e) => {
    let { value }: any = e.target;
    value = e.target.name === "amount" ? numberForMat(value) : value;
    console.log(value);
    this.setState({
      ledger: {
        ...this.state.ledger,
        [e.target.name]: value,
      },
    });
  };

  /** 삭제 */
  public handleDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => void = async (e, id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await fetch(`/ledger/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 200) {
            alert("삭제가 완료되었습니다.");
          } else {
            alert("에러가 발생했습니다.");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  public searchHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    this.setState({
      searchDate: e.target.value,
    });
  };

  public render() {
    const { loading, monthlyList, dailyList, ledger, modalIsOpen, category, searchDate } = this.state;
    const { handleSubmit, handleClick, openModal, closeModal, modalHandleChange, handleDelete, searchHandleChange } = this;

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <Presenter
            monthlyList={monthlyList}
            handleClick={handleClick}
            dailyList={dailyList}
            openModal={openModal}
            handleDelete={handleDelete}
            searchHandleChange={searchHandleChange}
            searchDate={searchDate}
          />
        )}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <ModalPresenter modalHandleChange={modalHandleChange} ledger={ledger} category={category} handleSubmit={handleSubmit} />
        </Modal>
      </>
    );
  }
}

export default Monthly;
