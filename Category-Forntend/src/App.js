import React, { useState, useEffect } from "react";
import RowComponents from './RowComponent';
import './App.css';
import axios from 'axios';

function App() {
  const url = 'http://localhost:8000';
  const [data, setData] = useState();

  useEffect(() => {
    getAllData();
  },[]);

  const getAllData = async () => {
    axios.get(url+'/getAllCategory').then((res) => {
      console.log(res);
      if(res.data) {
        setData([]);
        setData(res.data);
      } else {
        setData([ { id: 0, name: "", parent: 0 }]);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const createNew = (name, parent_id) => {
    let body = {};
    body['name'] = name;
    body['parent_id'] = parent_id;
    axios.post(url+'/store', body).then((res) => {
      console.log('post',res);
      getAllData()
    })
  }

  const edit = (name, id) => {
    let body = {};
    body['name'] = name;
    axios.put(url+`/update/${id}`, body).then((res) => {
      getAllData()
    })
  }

  const deleteCategory = (id) => {
    axios.delete(url+`/delete/${id}`).then((res) => {
        getAllData();
    })
  }

  return (
    <div className="App">
      { data && data.map((item) => (
        <>
          <RowComponents name={item.name} addRow={createNew} id={item.id} parent_id={item.parent_id} save={createNew} item={item} edit={edit} deleteCategory={deleteCategory}/>
        </>
      )) }
    </div>
  );
}

export default App;
