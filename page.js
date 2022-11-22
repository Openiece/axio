import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Card } from "./component/card";
import { instance } from "./home";

export const PostPage = () => {
    const { postId } = useParams();
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchValue] = useState('');
    const [data, setData] = useState({});
    const [setComment] = useState({ data: [] });

    const getPostData = async () => {
        const res = await instance.get(`/post/${postId}`)
        setData(res.data)
    }

    const getPostComment = async () => {
        const res = await instance.get(`/post/${postId}/comment`)
        setComment(res.data);
    }

    // const postComment = async () => {
        // const res = await instance.post(`/comment/create`, {
        //     message: value,
        //     owner: "60d0fe4f5311236168a109cc",
        //     post: postId
        // })
        // const res = await axios({
        //     method: 'POST',
        //     baseURL: 'https://dummyapi.io/data/v1/comment/create',
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //         "app-id": "636a0100b23c1794f297d097"
        //     },
        //     data: {
        //         message: value,
        //         owner: "60d0fe4f5311236168a109cc",
        //         post: postId
        //     }
        // })

        // console.log(res);
    // }




    function Text({ value, index, list, setList }) {
        const deleteTodo = () => {
          const newList = list.filter((cur) => cur !== value);
          setList(newList);
        }
      
        return (
          <div className='task-container'>
            <p>{`comment#${index + 1} - ${value}`}</p>
      
            <Button className="button2" onClick={deleteTodo} value="Delete" />
          </div>
        )
      }
      
      function Button(props) {
        return <button className={props.className} onClick={props.onClick}>{props.value}</button>
      }




    useEffect(() => {
        getPostData()
        getPostComment()
    }, []);

    return (
        <div className="App">
            <Card text={data.text} image={data.image} tags={data.tags} firstName={data.firstName} />

            <div className="content-container">


                <input value={inputValue} className='comment' placeholder='comment' onChange={(e) => setInputValue(e.target.value)} />
                <button className="button1" onClick={() => { setList([...list, inputValue]); setInputValue('') }} value="Add" >Comment</button>




                <div className='tasks'>
                {list.filter((todo) => todo.toLowerCase().includes(searchValue.toLowerCase())).map((todo, index) => <Text value={todo} index={index} list={list} setList={setList} />)}
                </div>


            </div>

        </div>
    )
}
