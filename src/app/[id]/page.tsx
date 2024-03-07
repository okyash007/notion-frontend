"use client";
import DocumentService from "@/api/services/documentService/DocumentService";
import { DisabledSSREditor } from "@/components/editor/DisabledSSREditor";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Document } from "@/core/dtos/api-modal/Document";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const View = () => {
    const [loading, setLoading] = useState(false);
    const docService = new DocumentService();
    const params = useParams<{ id: string }>();

    const [fetchedDoc, setFetchedDoc] = useState<Document>();

    useEffect(() => {
        setLoading(true);
        docService.getDocumentById(params.id)
            .then((res) => {
                if (res) {
                    if (res.code === 200 && res.data.length != 0) {
                        setFetchedDoc(res.data[0]);
                    }
                }
                setLoading(false);
            })
    }, [])

    return (
        <main >
            {!loading && fetchedDoc ? <>
                <div className="p-[5%]">
                    <Header isEdit={false} initialTitle={fetchedDoc.title} />

                    <DisabledSSREditor editable={false} initialContent={fetchedDoc.content} />

                </div>
            </> : <Loading />}
        </main>
    )
}

export default View;