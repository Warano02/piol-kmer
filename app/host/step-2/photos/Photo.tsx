"use client";

import { useState } from "react";
import { Images, Plus, Trash2, X } from "lucide-react";

interface PhotosSelectorProps {
    onClose: () => void;
}

export default function PhotoButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="px-6 py-4 border border-gray-300 bg-white rounded-lg cursor-pointer font-bold hover:bg-gray-50 transition"
                onClick={() => setOpen(true)}>
                Add Photos
            </button>
            {open && <PhotosSelector onClose={() => setOpen(false)} />}
        </>
    );
}

const PhotosSelector = ({ onClose }: PhotosSelectorProps) => {
    const [images, setImages] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const filesArray = Array.from(e.target.files);
        setImages(filesArray);
        setPreviews(filesArray.map((file) => URL.createObjectURL(file)));
    };

    const handleRemoveImage = (idx: number) => {
        setImages(images.filter((_, i) => i !== idx));
        setPreviews(previews.filter((_, i) => i !== idx));
    };

    const handleUpload = async () => {
        if (images.length === 0) return;
        setLoading(true);
        const formData = new FormData();
        images.forEach((img) => formData.append("images", img));

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setLoading(false);
                onClose();
            } else {
                setLoading(false);
                alert("Upload failed.");
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
            alert("Error uploading images.");
        }
    };

    return (
        <section className="fixed z-50 top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
            <div className="w-162.5 bg-white p-6 rounded-3xl shadow-2xl flex flex-col gap-6 animate-fadeIn">
                <div className="flex justify-between items-center">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition cursor-pointer">
                        <X size={24} />
                    </button>
                    <div className="text-center flex-1">
                        <h2 className="text-2xl font-bold">Upload Photos</h2>
                        <p className="text-gray-500 text-sm mt-1">
                            {images.length} item{images.length > 1 ? "s" : ""} selected
                        </p>
                    </div>

                    <button className="w-6 h-6 rounded-full flex items-center justify-center border cursor-pointer hover:bg-gray-100 transition" onClick={() => document.getElementById("file-upload")?.click()} >
                        <Plus size={18}/>
                    </button>
                </div>

                {!previews.length && (
                    <div className="w-full h-72 border-dashed border-2 border-gray-300 rounded-xl flex flex-col gap-3 justify-center items-center hover:border-gray-400 transition cursor-pointer">
                        <Images size={48} className="text-gray-400" />
                        <div className="text-center">
                            <p className="text-gray-400 text-lg font-medium mt-1">Drag and drop</p>
                            <p className="text-gray-400 text-xs mt-1">or browse for photos</p>
                        </div>
                        <input type="file" id="file-upload" onChange={handleImageChange} multiple accept="image/*" className="hidden" />
                        <button className="px-8 py-3 bg-black text-white rounded-xl cursor-pointer font-bold mt-2 hover:bg-gray-900 transition" onClick={() => document.getElementById("file-upload")?.click()}>
                            Browse
                        </button>
                    </div>
                )}

                {previews.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                        {previews.map((src, idx) => (
                            <div key={idx} className="relative rounded-xl overflow-hidden shadow hover:scale-105 transform transition"   >
                                <img src={src} alt={`preview ${idx}`} className="w-full h-36 object-cover" />
                                <button type="button" className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full hover:bg-black transition cursor-pointer" onClick={() => handleRemoveImage(idx)} >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-between border-t pt-3">
                    <button disabled={loading} className="px-6 py-3 border border-gray-300 bg-white rounded-xl font-bold cursor-pointer hover:bg-gray-50 transition" onClick={onClose} >
                        Cancel
                    </button>
                    <button className={`px-6 py-3 rounded-xl font-bold text-white transition  ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900 cursor-pointer"}`} onClick={handleUpload} disabled={loading} >
                        {loading ? (
                            <div className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" ></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                                Uploading...
                            </div>
                        ) : (
                            "Upload"
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};
