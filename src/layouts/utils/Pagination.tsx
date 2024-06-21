import React from 'react';
import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    pagination: any;
}

const Pagination: React.FC<PaginationProps> = (props) => {

    const pageList = [];

    if (props.currentPage === 1) {
        pageList.push(props.currentPage);
        if (props.totalPages >= props.currentPage + 1) {
            pageList.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageList.push(props.currentPage + 2);
        }
    } else if (props.currentPage > 1) {
        if (props.currentPage >= 3) {
            pageList.push(props.currentPage - 2);
        }
        if (props.currentPage >= 2) {
            pageList.push(props.currentPage - 1);
        }
        pageList.push(props.currentPage);
        if (props.totalPages > props.currentPage + 1) {
            pageList.push(props.currentPage + 1);
        }
        if (props.totalPages > props.currentPage + 2) {
            pageList.push(props.currentPage + 2);
        }
    }

    return (
        <ul className="pagination">
            <li className="page-item">
                <button className="page-link" onClick={() => props.pagination(1)}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            </li>
            {
                pageList.map(page => (
                    <li className="page-item" key={page} onClick={() => props.pagination(page)}>
                        <button className={"page-link " + (props.currentPage === page ? "active" : "")}>
                            {page}
                        </button>
                    </li>
                ))
            }
            <li className="page-item" onClick={() => props.pagination(props.totalPages)}>
                <button className="page-link">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </li>
        </ul>
    )
}

export default Pagination;