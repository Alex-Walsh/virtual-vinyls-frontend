import React from "react";
import axios from 'axios';

export default function TestPlatform() {
  let link;
  axios.get("http://localhost:5001/virtual-vinyls/us-central1/api/test", {
  })
  .then(function(res) {
    link = res;
    console.log(link);
  })
  .catch(function(error) {
    console.log(error);
});
return (
  <div>
    <h1>{link}</h1>
  </div>
)
}

