import React from "react";

function Delete({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">ยืนยันการลบ</h2>
        <p className="text-sm text-gray-500 mb-6">คุณแน่ใจว่าต้องการลบรายการนี้?</p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="text-sm px-4 py-2 mr-2 text-gray-500 border border-gray-300 rounded-lg"
          >
            ยกเลิก
          </button>
          <button
            onClick={onConfirm}
            className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
