
function getPaginationPages(currentPage, totalPages){
    const delta = 2;
    const range = [];
    const dots = [];
    let lastPage;

    for (let i = 1; i < totalPages; i++) {
       if(i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)){
        range.push(i);
       }
    }
    range.forEach(page => {
        if(lastPage){
            if(page - lastPage === 2){
                dots.push(lastPage + 1);
            } else if (page - lastPage !== 1){
                dots.push('...');
            }
        }
        dots.push(page);
        lastPage = page;
    })
    console.log(dots);
    
    return dots;
}

const Pagination = ({currentPage, totalPages}) => {
    const pages = getPaginationPages(currentPage, totalPages);
  return (
    <div className="flex justify-center mt-10">
        {currentPage > 1 && (
            <a href={`?page=${currentPage-1}`} className="bg-gray-300 text-black py-2 px-4 mx-1 rounded hover:bg-gray-400">
                &larr; Previos 
            </a>
        )}
        {pages.map((p, index)=> (
            <a href={`?page=${p}`} className={`py-2 px-4 mx-1 rounded ${
            p === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`}>
                {p}
            </a>
        ))}
        {currentPage < totalPages && (
            <a href={`?page=${currentPage+1}`} className="bg-gray-300 text-black py-2 px-4 mx-1 rounded hover:bg-gray-400">
                Next &rarr;
            </a>
        )}
    </div>
  )
}

export default Pagination