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
                <div className={`${window.screen.availWidth <= 768 ? 'px-0' : 'px-24'} my-10`}><Header isEdit={true} /></div>
                <div className={`flex flex-col items-center justify-between ${window.screen.availWidth <= 768 ? 'px-2' : 'px-24'}`}>
                    <div className="h-full w-full">
                        <DisabledSSREditor onChange={(value: string) => setContent(value)} />
                    </div>
                </div>
            </>}
        </main>
    )
}

export default Edit;