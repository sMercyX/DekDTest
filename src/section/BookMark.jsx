import React, { useState } from "react";
import { data } from "../data/book";
import AddBook from "../component/AddEditBook";
import Delete from "../component/Delete";

function BookMark() {
  const [books, setBooks] = useState(data);
  const [isAddEditBookOpen, setisAddEditBookOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [bookToDelete, setBookToDelete] = useState(null);

  const handleAddBook = (newBook) => {
    if (newBook) {
      if (currentBook) {
        setBooks(books.map(book => (book.id === currentBook.id ? { ...newBook, id: currentBook.id } : book)));
      } else {
        const newId = books.length + 1
        setBooks([...books, { ...newBook, id: newId }]);
      }
    }
    setisAddEditBookOpen(false);
    setCurrentBook(null);
  };

  const handleEditBook = (book) => {
    setCurrentBook(book); 
    setisAddEditBookOpen(true);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setBookToDelete(null); 
  };

  return (
    <div>
      <div className="mt-14 text-lg mx-5 pb-3 border border-t-0 border-x-0 border-spacing-8 border-black">
        <p className="text-lg m-auto lg:text-4xl ">รายการที่คั่นไว้</p>
      </div>

      <div className="m-auto  mt-6">
        <div className="flex justify-between items-end mx-5">
          <p className="flex text-end text-xs lg:text-base text-gray-400">
            รายการทั้งหมด {books.length} รายการ
          </p>

          <button
            onClick={() => {
              setCurrentBook(null);
              setisAddEditBookOpen(true);
            }}
            className="text-xs lg:text-base py-1 px-3 text-gray-400 border rounded-full border-gray-400"
          >
            เพิ่ม
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-6 mx-5 ">
          {books.map(({ id, title, author, chapter, date, img }) => (
            <div key={id} className="w-96 lg:w-[28rem]  flex gap-3">
              <img
                src={img}
                alt={title}
                className="h-36 w-24 object-cover rounded-md lg:w-48 lg:h-72 "
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-lg lg:text-1xl font-semibold break-all">{title}</h2>
                  <p className="text-xs lg:text-sm text-gray-500">{author}</p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs lg:text-sm text-gray-400 mt-2">ตอนที่ {chapter}</p>
                    <p className="text-xs lg:text-sm text-gray-400">คั่นล่าสุด {date}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleEditBook({ id, title, author, chapter, date, img })}
                      className="text-xs lg:text-sm text-blue-400 mx-3 hover:underline"
                    >
                      แก้ไข
                    </button>
                    <button
                    onClick={() => setBookToDelete(id)} 
                    className="text-xs lg:text-sm text-red-400 hover:underline"
                  >
                    ลบ
                  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isAddEditBookOpen && <AddBook onAdd={handleAddBook} book={currentBook} />}
      {bookToDelete && (
        <Delete
          onConfirm={() => handleDeleteBook(bookToDelete)}
          onCancel={() => setBookToDelete(null)}
        />
      )}
    </div>
  );
}

export default BookMark;
