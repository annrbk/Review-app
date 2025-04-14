export default function Modal({ onClose }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-gray-600 mt-2">
          Your review has been sent successfully!
        </p>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
