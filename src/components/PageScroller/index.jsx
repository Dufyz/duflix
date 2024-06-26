import './styles.css'

export const PageScroller = ({handleNextPage, handlePreviousPage}) => {
    return (
        <div className='pagescroller-bg'>
            <div className="pagescroller">
                <div className="pagescroller-button">
                    <button onClick={handlePreviousPage}>&lt;</button>
                    <button onClick={handleNextPage}>&gt;</button>
                </div>
            </div>
        </div>
    );
}