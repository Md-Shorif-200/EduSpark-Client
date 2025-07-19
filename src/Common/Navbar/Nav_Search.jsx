import React from 'react';
import { Link } from 'react-router-dom';

const Nav_Search = ({ results, onClose }) => {
    if (!results.length) return null;

    return (
        <div className="absolute top-full mt-2 w-full bg-white shadow-md rounded-md z-50 max-h-[250px] overflow-y-auto">
            <ul className="p-2">
                {results.map((item) => (
                    <li key={item.id} className="border-b last:border-0">
                        <Link
                            to={`/course/${item.id}`}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={onClose}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav_Search;
