import { useMemo } from "react";
import { useNoteContext } from "../noteContext";

function useTagFilter(val) {
    const { notes } = useNoteContext();

    const tagFilteredData = useMemo(() => {
        // Handle the '0' / default case
        if (val === '0') {
            return notes;
        }
        return notes.filter(element => element['tags'].includes(val));
        
    }, [notes, val]); 

    return tagFilteredData;
}

export default useTagFilter;