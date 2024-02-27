import { UI_BASE_URL } from "@/core/constants/api-url-constant";
import Link from "next/link";

function Modal({ id }: Readonly<{ id: string }>) {
    return (
        <dialog
            className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
            <div className="bg-white m-auto px-8 py-6 rounded-xl">
                <div className="flex flex-col items-center max-w-sm overflow-hidden">
                    <div>
                        <div className="font-bold text-xl mb-2">Congratulations !</div>
                        <p className="text-gray-700 text-base">
                            You've successfully posted your amazing content.
                        </p>
                        <div className="pt-4">
                            <div className="group flex relative">
                                <Link rel="noopener noreferrer" target="_blank" href={`${UI_BASE_URL}/${id}`} className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                                    Chekout how it looks {"->"}
                                </Link>
                                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 p-1 text-sm text-gray-100 rounded-md absolute bottom-10 left-10 -translate-x-10 translate-y-full opacity-0 m-6 mb-11 mx-auto">
                                    {`${UI_BASE_URL}/${id}`}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="group flex relative">
                                <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 hover:cursor-default">
                                    Content Identifier Id:
                                    <pre className="font-mono font-thin hover:cursor-text">{id}</pre>
                                </span>
                                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 p-1 text-sm text-gray-100 rounded-md absolute -bottom-6 left-10 -translate-x-10 translate-y-full opacity-0 m-6 mx-auto">
                                    {`Keep this at some save place`}
                                </span>
                            </div>
                        </div>
                        <div className="flex float-end mt-5">
                            <Link rel="noopener noreferrer" target="_blank" href={`${UI_BASE_URL}/edit`} className="hover:bg-black border hover:text-white border-black text-black font-bold py-2 px-4 rounded">
                                Create new
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export default Modal;