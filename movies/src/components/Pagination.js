import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Pagination.css';
import { getCurrentPage, getTotalPages } from '../redux/movies/movieSlice';

const Pagination = () => {

    const params = useParams();
    let query = (params.query);

    let mediaType = (params.media_type);
    let page = useSelector(getCurrentPage);
    let totalPages = useSelector(getTotalPages);

    let linkPrevious = '';
    let linkNext = '';

    if (!query) {
      linkPrevious = `/${mediaType}/page/${page-1}`;
      linkNext = `/${mediaType}/page/${page+1}`;
    } else {
      linkPrevious = `/query/${query}/${page-1}`;
      linkNext = `/query/${query}/${page+1}`;
    }

        return (
      <div className="Pagination">
        {page > 1 && <Link to={linkPrevious}  className="PaginationLink PaginationLinkPrev">Prev</Link>}
        <div className="PaginationPage">{page}</div>
        {page !== totalPages && <Link to={linkNext}  className="PaginationLink PaginationLinkNext">Next</Link>}
      </div>
    );

}

export default Pagination;
