import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/rootReducer";
import {t} from 'i18next';

const LoadingSpinner = () => {
  const { loading } = useSelector((state: State) => state.common);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (loading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [loading]);

  return <>{isLoading && <div className="loading">{t('string.loadding')} Loadding &#8230;</div>}
    <h1>{t('string.title')}</h1>
    <p>{t('string.content')}</p>
  </>;
};
export default LoadingSpinner;
