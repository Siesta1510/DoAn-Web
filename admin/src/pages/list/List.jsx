import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@mui/icons-material";
import { updateList } from "../../context/listContext/apiCalls";
import { useState, useContext } from "react";
import { ListContext } from "../../context/listContext/ListContext";

export default function List() {
  const location = useLocation();
  const list = location.state.list;
  const [listInfo, setListInfo] = useState();

  const { dispatch } = useContext(ListContext);

  const handleUpdated = (e) => {
    e.preventDefault();
    updateList(listInfo, dispatch);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setListInfo({ ...listInfo, [e.target.name]: value });
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input
              type="text"
              placeholder={list.title}
              name="title"
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type="text"
              placeholder={list.type}
              name="type"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={list.genre}
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdated}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
