// 액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

//상태
const initstate = {
  username: '',
  number: 0,
};

//액션의 결과를 걸러내는 친구
//reducer(누산기, 결과를 스택에 채우는 것) updater
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload }; //return 되면 그걸 호출한 쪽에서 받는게 아니라 return 되는 순간 ui변경
    case 'DECREMENT':
      return { number: state.number - 1 };
    //return { ...state, number: state.number - 1 }; //이전데이터를 유지시키면서 할 거면.어차피 지금은 그냥 덮어씌우는 거라 상관이
    default:
      return state;
  }
};

export default reducer;
