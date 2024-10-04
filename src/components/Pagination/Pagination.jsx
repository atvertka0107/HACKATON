import classes from './Pagination.module.css'

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
            <ul className={classes.pages}>
                {
                    <div className={classes.pagblock}>
                        {pageNumbers.map(number => (
                            <a className={classes.link} onClick={() => paginate(number)}>
                                <li className={classes.item} key={number}>
                                {number}
                                </li>
                            </a>
                        ))}
                    </div>
                }
            </ul>
    );
}

export default Pagination