import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  const [localData, setLocaldata] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    //fetchUsingThen();
    fetchUsingAsync();
  }, []);

  console.log(history);
  const handleClick = () => {
    history.push(`/about/${123}`);
  };

  //Fetch using then
  const fetchUsingThen = () => {
    fetch("https://api.sampleapis.com/futurama/info")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  //Fetch using async await
  const fetchUsingAsync = async () => {
    try {
      setLoading(true);
      let data = await fetch("https://api.sampleapis.com/futurama/info");
      let jsonresponse = await data.json();
      setLocaldata(jsonresponse[0]?.creators || []);
      console.log(jsonresponse);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
      console.log("finally");
    }
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Url</th>
            </tr>
          </thead>
          <tbody>
            {localData.map((item, index) => {
              return (
                <tr key={`${index}${item.name}`}>
                  <td>{item.name}</td>
                  <td>{item.url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
