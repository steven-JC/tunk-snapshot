import {create, action} from 'tunk';


/*

     缓存词典
     记忆应用部分状态




* */






@create
export default class counter {
  //不允许异步，应该保持简单
  constructor(){
    this.state = {
      count:0
    };
  }

  @action
  increment(){
    console.log(this);
    this.increment_();
  }

  @action({snapshot:'local'})
  decrement(){
    return {count:this.state.count-1};
  }

  @action
  incrementIfOdd(){
    if ((this.state.count + 1) % 2 === 0) {
      this.increment();
    }
  }

  @action
  incrementAsync(){
    setTimeout(() => {
      this.dispatch('increment');
    }, 1000)
  }

  increment_(){
    this.dispatch({count:this.addOne()});
  }

  addOne(){
    return this.state.count+1;
  }
}

