import { createContext, useContext } from 'react';

type lectureContextType = {
  inpValue: string;
  btnValue: string;
  totalPage: number;
  currentPage: number;
  // setBtnValue: React.Dispatch<React.SetStateAction<string>>;
  setInpValue: (value: string) => void;
  setBtnValue: (value: string) => void;
  setTotalPage: (value: number) => void;
  // setCurrentPage: React.Dispatch<React.SetStateAction<number>>; //
  setCurrentPage: (value: number) => void; //
};

export const LectureContext = createContext<lectureContextType | null>(null);

export const useLectureContext = () => {
  const context = useContext(LectureContext);

  if (!context) {
    throw new Error('useLectureContext는 Provider 안에서만 사용');
  }
  return context;
};
