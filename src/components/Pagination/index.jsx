import styles from './Pagination.module.scss'

function Pagination({currentPage, totalPages, onPageChange}) {
    const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);

    const handlePageClick = (page) => {
        if(page !== currentPage){
            onPageChange(page);
        }
    };

    const handlePrev = () => {
        if(currentPage > 1){
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if(currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    };


    return (
        <nav className={styles.pagination}>
            <button onClick={handlePrev} disabled={currentPage === 1}>
                &laquo; Previous
            </button>

            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => handlePageClick(number)}
                    className={currentPage === number ? styles.active : ''}
                >
                    {number}
                </button>
            ))}

            <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next &raquo;
            </button>
        </nav>
    )
}

export default Pagination;