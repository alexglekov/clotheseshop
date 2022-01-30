import React from 'react';
import {useParams} from "react-router-dom";
import cl from "./ItemDescription.module.css"
import PicList from "./PicList";
import AddToChartButton from "./UI/Buttons/AddToChartButton";
import * as URL from "url";

const ItemDescription = (props) => {

    const {id} = useParams()

    return (
        <div className={cl.bllock}>
                <div className={cl.content}>
                    <div className={cl.picContent}>
                        <div className={cl.litpics}>
                            <ul>
                                <li className={cl.litPicLi1}>
                                    <button className={cl.litPicBtn}>
                                        <img src={props.posts[id-1].descr1}/>
                                    </button>
                                </li>
                                <li className={cl.litPicLi2}>
                                    <button className={cl.litPicBtn}>
                                        <img src={props.posts[id-1].descr2}/>
                                    </button>
                                </li>
                                <li className={cl.litPicLi3}>
                                    <button className={cl.litPicBtn}>
                                        <img src={props.posts[id-1].descr3}/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className={cl.bPic}>
                            <div className={cl.bigPicWindow}>
                                <img src={props.posts[id-1].pic}/>
                            </div>
                        </div>
                    </div>
                    <div className={cl.infContent}>
                        <div className={cl.infContentTitle}>
                            <p className={cl.pFirst}>{props.posts[id-1].title.substr(0, 6)}</p>
                            <p className={cl.pSecond}>{props.posts[id-1].title.substr(7)}</p>
                        </div>
                        <div className={cl.infContentSize}>
                            <p className={cl.itemSizeTitle}>SIZE:</p>
                            <ul>
                                <li className={cl.itemSizes1}>
                                    <button className={cl.itemSizesButton} disabled={true}>XS</button>
                                </li>
                                <li className={cl.itemSizes2}>
                                    <button className={cl.itemSizesButton}>S</button>
                                </li>
                                <li className={cl.itemSizes3}>
                                    <button className={cl.itemSizesButton}>M</button>
                                </li>
                                <li className={cl.itemSizes4}>
                                    <button className={cl.itemSizesButton}>L</button>
                                </li>
                            </ul>
                        </div>
                        <div className={cl.infContentPrice}>
                            <p className={cl.itemPriceTitle}>PRICE:</p>
                            <p className={cl.itemPrice}>{props.posts[id-1].price}</p>
                        </div>
                        <div className={cl.addToChartBtn}>
                            <AddToChartButton>ADD TO CART</AddToChartButton>
                        </div>
                        <div className={cl.infContentText}>
                            <p className={cl.itemDescriptionText}>
                                {props.posts[id-1].description}
                            </p>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default ItemDescription;