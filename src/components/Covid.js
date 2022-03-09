import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI } from '../Redux/covid';

const Covid = () => {
  const store = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.covid19tracking.narrativa.com/api/2020-03-10`)
      .then((res) => res.json())
      .then((json) => {
        if (store.length === 0) {
          dispatch(getAPI(json));
          console.log(json);
        }
      });
  });
  return (
    <div>
      <input />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Covid;
