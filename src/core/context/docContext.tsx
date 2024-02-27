'use client'
import { Document } from "@/core/dtos/api-modal/Document";
import React, { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface DocContextProps {
    doc?: Document;
    setDoc?: (doc: Document) => void;
}

const DocContext = createContext<DocContextProps | undefined>({});

export const useDocContext = () => {
    const context = useContext(DocContext);
    if (!context) {
        throw new Error('DocContext must be used within a DocContextProvider');
    }
    return context;
};

export const DocContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [doc, setDoc] = useState<Document | undefined>();

    return (
        <DocContext.Provider value={useMemo(() => ({ doc, setDoc }), [doc, setDoc])}>
            {children}
        </DocContext.Provider>
    )
}