"use client";
import { DisabledSSREditor } from "@/components/editor/DisabledSSREditor";
import Header from "@/components/Header";
import { useDocContext } from "@/core/context/docContext";
import { useEffect, useState } from "react";

const Edit = () => {
    const { setDoc } = useDocContext();
    const [content, setContent] = useState<string>();
    const [hasWindow, setHasWindow] = useState<boolean>();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true)
        }
        content && setDoc!({ content: content });
    }, [content]);



    return (
        <main >
            {hasWindow && <>
                <div className="p-[5%]">
                    <Header isEdit={true} />
                    <DisabledSSREditor onChange={(value: string) => setContent(value)} />

                </div>
            </>}
        </main>
    )
}

export default Edit;