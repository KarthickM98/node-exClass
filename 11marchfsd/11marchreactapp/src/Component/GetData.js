import axios from "axios";
import React,{useEffect} from "react";

const GetData = () => {
  useEffect(async() => {
    const data = await axios.post(
      "http://localhost:8000/api/v1/emproute/employee"
    );
    console.log(data);
  });

  return <div>GetData</div>;
};

export default GetData;
