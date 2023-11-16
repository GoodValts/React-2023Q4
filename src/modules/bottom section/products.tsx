import styles from './products.module.scss';
// import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setItemId } from '../../common/redux/viewMode';
import { selectResults } from '../../common/redux/search';

const ResultsBlock = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { page } = useContext(AppContext);
  // const { searchStr } = useContext(ApiContext);

  const results = useAppSelector(selectResults);
  const products = results ? results.products : null;
  // const { setItem, setIsItem, products, setIsLoading } = useContext(ApiContext);

  const handleItem = async (id: number) => {
    try {
      // setIsLoading(true);
      // const itemData = await getItemFromApi(id);
      dispatch(setItemId(id));
      // navigate(`../?search=${searchStr}&page=${page}&id=${id}`);
    } catch (error) {
      throw new Error('failed to load item from API');
    }
  };

  return (
    <div className={styles.resultsBlock}>
      {products &&
        products.length > 0 &&
        products.map((params, index) => (
          <div key={index} className={styles.itemBlock} data-testid="card">
            <h3 className={styles.header} data-testid="card-header">
              {params.title}
            </h3>
            <img
              className={styles.img}
              src={params.thumbnail}
              data-testid="card-image"
              alt={`${params.title} image`}
            ></img>
            <div className={styles.params}>
              <p className={styles.property} data-testid="card-category">
                Category: {params.category}
              </p>
              <p className={styles.property} data-testid="card-property">
                Price: {Math.round(params.price).toString()}${' '}
                {`(-${params.discountPercentage.toString()}%)`}
              </p>
            </div>
            <p
              className={styles.link}
              data-testid="card-link"
              onClick={() => handleItem(params.id)}
            >
              See more
            </p>
          </div>
        ))}

      {!products && (
        <div className={styles.error} data-testid="no_results">
          No products with this params!
        </div>
      )}
    </div>
  );
};

export default ResultsBlock;
