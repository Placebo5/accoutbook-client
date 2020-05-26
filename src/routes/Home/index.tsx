import React from "react";
import Presenter from "./presenter";

interface IState {
  searchDate: String;
}

class Home extends React.Component<any, IState> {
  state = {
    searchDate: "2020-05",
  };

  componentDidMount() {
    this.test();
  }

  public test = async () => {
    const orgList = await fetch("/ledger")
      // const orgList = await fetch("http://localhost:4000/ledger")
      .then((res) => res.json())
      .catch((err) => console.log(err));

    console.log(orgList);
  };

  // 검색
  public searchHandleChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  public render() {
    const { searchHandleChange } = this;
    const { searchDate } = this.state;
    return (
      <Presenter
        searchDate={searchDate}
        searchHandleChange={searchHandleChange}
      />
    );
  }
}

export default Home;
