import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { database, storage } from "../firebase.config";
import { v4 } from "uuid";
import { RiUploadLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
import {} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const UploadFile = () => {
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState("");
    const handerAddFile = async (e) => {
        e.preventDefault();
        const res = await addDoc(collection(database, "users"), {
            image: "imgUrl",
            name: "userName",
        });
        console.log(res);
    };
    return (
        <div>
            <button
                className="btn"
                type="button"
                onClick={() => setShowModal(true)}>
                <AiOutlinePlus size="16" />
                Upload
                <BiChevronDown />
            </button>
            {showModal ? (
                <form onSubmit={handerAddFile}>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h2 className="text-3xl font-semibold">
                                        Upload File
                                    </h2>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-4 flex-auto">
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        onChange={(e) =>
                                            setFile(e.target.files[0])
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                        placeholder="Enter folder name"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit">
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </form>
            ) : null}
        </div>
    );
};

export default UploadFile;
