import { createContext, useContext } from "react";

export const NoteContext = createContext();

export const useNoteContext = () => useContext(NoteContext);