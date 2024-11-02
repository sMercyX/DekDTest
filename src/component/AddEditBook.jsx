import React, { useState } from "react";
import { data as initialData } from "../data/book";

function AddBook({ onAdd ,book}) {
    const [title, setTitle] = useState(book ? book.title : "");
    const [author, setAuthor] = useState(book ? book.author : "");
    const [chapter, setChapter] = useState(book ? book.chapter : "");
    const [date, setDate] = useState(book ? book.date : "");
    const [img, setImg] = useState(book ? book.img : "");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({ title, author, chapter, date, img });
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-xl font-semibold mb-4">เพิ่มหนังสือใหม่</h2>
        
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">ชื่อเรื่อง</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">ผู้แต่ง</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">ตอนที่</label>
          <input
            type="text"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">วันที่</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">URL รูปภาพ</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => onAdd(null)} 
            className="text-sm px-4 py-2 mr-2 text-gray-500 border border-gray-300 rounded-lg"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="text-sm px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            เพิ่ม
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
