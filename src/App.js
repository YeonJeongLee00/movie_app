import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );

    // class이기 때문에 this라고 해야한다...?
    // ()는 즉시를 의미한다. 그래서 클릭했을때 호출하려면 () 빼고 적어준다.
  }
}

export default App;

/*
npm i prop-types 
: 내가 전달받는 props가 내가 원하는 props인지 확인하는 것
- type만  체크할 수 도 있고 
또는 required를 호출하는 방식으로 type과 required 체크 가능
*/

/*
Class의 경우에는 function이 아니기 때문에 return을 가지지 않고 "render"를 가진다. 
- react는 자동적으로 모든 class componentdml render method를 실행하려고 한다. 
*/

/*
* STATE
- state는 'object'이고 component의 data를 넣을 공간이 있고 이 데이터는 "변한다". 
- state에 바꾸고 싶은 data를 넣는다. 
- 매번 state의 상태를 변경할 때 react가 render함수를 호출해서 바꿔주길 원한다. 
*/
