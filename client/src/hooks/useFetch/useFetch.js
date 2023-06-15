// import { useState, useEffect,  } from "react";

// export const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(false);
//   const [error, setError] = useState(null);
 
//   useEffect(() => {
//     const controller = new AbortController();
//     const fetchData = async () => {
//       setIsPending(true);
//       try {
//         const res = await fetch(url, { signal: controller.signal });

//         if (!res.ok) {
//           throw new Error(res.statusText);
//         }
//         const json = await res.json();
//         setData(json);
//         setIsPending(false);
//         setError(null);
//       } catch (e) {
//         if (e.name === "AbortError") {
//           console.log("The fetch was aborted");
//         } else {
//           setError(e.message);
//           setIsPending(false);
//         }
//       }
//     };
//     fetchData();

//     return () => {
//       controller.abort();
//     };
//   }, [url]);

//   return { data, isPending, error };
// };

import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(url);
        console.log(response);
        setData(response.data);
        setIsPending(false);
        setError(null);
      } catch (e) {
        
          setError(e.message);
          setIsPending(false);
        }

    };

    fetchData();

   
  }, [url]);

  return { data, isPending, error };
};
