"use client";
import { useEffect, useState } from "react";
import { useDocContext } from "@/core/context/docContext";
import DocumentService from "@/api/services/documentService/DocumentService";
import { Document } from "@/core/dtos/api-modal/Document";
import Modal from "./Modal";
import { FaShareAlt } from "react-icons/fa";

const Header = ({ isEdit, initialTitle }: { isEdit: boolean; initialTitle?: string }) => {
    const { doc } = useDocContext();
    const [title, setTitle] = useState<string>();
    const [id, setId] = useState<string | undefined>();
    const [loading, setLoading] = useState(false)

    const docService = new DocumentService();

    useEffect(() => {
        if (initialTitle) {
            setTitle(initialTitle);
        }
    }, [initialTitle]);

    const handleShareClicked = async () => {
        if (doc) {
            let req: Document = {
                title: title,
                content: doc.content
            }

            if (req.title && req.content) {
                setLoading(true)

                try {
                    const res = await docService.saveDocument(req);
                    if (res) {
                        setId(res.data);
                        setLoading(false)
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    return (
        <div className="flex items-center justify-between">
            <div className="relative flex-grow" data-te-input-wrapper-init>
                <input
                    type="text"
                    className={`peer text-4xl font-bold block min-h-[auto] w-full pr-3 rounded border-0 bg-transparent leading-[2.1] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-20`}
                    id="exampleFormControlInputHelper"
                    placeholder="Enter Title"
                    value={title ? title : ''}
                    disabled={!isEdit}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            {isEdit && <button
                disabled={title === '' && doc?.content === ''}
                onClick={handleShareClicked}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}>
                <span className="mr-2">{loading ? "loading..." : "Share"}</span>
                <FaShareAlt />
            </button>}

            {id && id != '' && <Modal id={id} />}
        </div>
    )
}

export default Header;