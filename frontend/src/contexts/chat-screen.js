import React, { createContext, useContext, useReducer } from 'react';

const ChatScreenStateContext = createContext({ display: false });
const ChatScreenDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'DISPLAY':
      return { ...state, display: true };
    case 'NOT_DISPLAY':
      return { ...state, display: false };
    default:
      return state;
  }
}

export const ChatScreenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { display: false });

  return (
    <ChatScreenDispatchContext.Provider value={dispatch}>
      <ChatScreenStateContext.Provider value={state}>
        { children }
      </ChatScreenStateContext.Provider>
    </ChatScreenDispatchContext.Provider>
  );
};

export const useChatScreenState = () => useContext(ChatScreenStateContext);
export const useChatScreenDispatch = () => useContext(ChatScreenDispatchContext);
