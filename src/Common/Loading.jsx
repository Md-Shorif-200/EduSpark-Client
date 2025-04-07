import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900 bg-opacity-90">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
          Loading, please wait...
        </p>
      </div>
    );
};

export default Loading;