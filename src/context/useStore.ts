import { create } from "zustand";
import { ICharacters } from "../interfaces/ICharacters";

interface StoreState {
  data: ICharacters[];
  addItems: (newItems: ICharacters[]) => void;
  editItems: (editedItem: ICharacters) => void;
  deleteItems: (itemId: number) => void;
}

const useStore = create<StoreState>((set) => ({
  data: [],

  addItems: (newItems) =>
    set((state) => ({ data: [...state.data, ...newItems] })),

  editItems: (editedItem) =>
  
    set((state) => ({
      
      data: state.data.map((item) =>
        item.id === editedItem.id ? editedItem : item
      ),
    })),

  deleteItems: (itemId) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== itemId),
    })),
}));

export default useStore;
