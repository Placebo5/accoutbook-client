import React from "react";
import Presenter from "./presenter";

interface IState {
  list: any;
}

class Yearly extends React.Component<any, IState> {
  state = {
    list: [],
  };

  componentDidMount() {
    this.setState({
      list: [
        {
          date: "2020-02-01",
          incom: 20000,
          spending: 10000,
        },
        {
          date: "2020-02-01",
          incom: 20000,
          spending: 10000,
        },
        {
          date: "2020-02-01",
          incom: 20000,
          spending: 10000,
        },
        {
          date: "2020-02-01",
          incom: 20000,
          spending: 10000,
        },
      ],
    });
  }

  public render() {
    const { list } = this.state;
    return <Presenter list={list} />;
  }

  // public render() {
  //   const { list } = this.state;
  //   return <Presenter list={list} />;
  // }
}

export default Yearly;
