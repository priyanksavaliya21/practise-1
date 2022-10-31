import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onpageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount === 1)) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <>
      <nav className="page_nav">
        <ul className="pagination-tab">
          {pages.map((pagex) => {
            return (
              <>
                <li className={pagex === currentPage ?" page-item-x active " : "page-item-x" } key={pagex}  >
                  <a  className="page-link-x" onClick={()=> onpageChange(pagex)}>
                    {pagex}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export { Pagination };
