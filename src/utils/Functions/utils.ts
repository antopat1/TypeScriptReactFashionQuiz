import { IGetQuestions } from "../Interface/interface";

// La  mixArray accetta un array di oggetti che rappresentano le domande del quiz
//e tramite un valore casuale le mischia

export const mixArray = (object: IGetQuestions[]) => {
  const randomSort = () => Math.random() - 0.5;
  return object.map((items) => ({
    ...items,
    answers: [...items.answers].sort(randomSort), // Clona l'array prima di chiamare il metodo sort
  }));
};


