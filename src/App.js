import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import {Router, Switch, Route, BrowserRouter} from "react-router-dom";
import PostItem from "./Components/PostItem";
import AppRouter from "./Components/AppRouter";
import ItemDescription from "./Components/ItemDescription";
import PicItem from "./Components/PicItem";

function App() {
    const [posts, setPosts] = useState([
        {pic:"pci1.jpg", descr1: 'pci1.jpg', descr2: "pci1.jpg", descr3: "pci1.jpg", title: "Apollo Running short", price: 50, id:1, description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
        {pic:"pci2.jpg", descr1: "pci2.jpg", descr2: "pci2.jpg", descr3: "pci2.jpg", title: "Apollo Running short", price: 50, id:2, description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
        {pic:"pci3.jpg", descr1: "pci3.jpg", descr2: "pci3.jpg", descr3: "pci3.jpg", title: "Apollo Running short", price: 50, id:3, description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
        {pic:"pci4.jpg", descr1: "pci4.jpg", descr2: "pci4.jpg", descr3: "pci4.jpg", title: "Apollo Running short", price: 50, id:4, description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
        {pic:"pci5.jpg", descr1: "pci5.jpg", descr2: "pci5.jpg", descr3: "pci5.jpg", title: "Apollo Running short", price: 50, id:5, description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
        {pic:"pci6.jpg", descr1: "pci6.jpg", descr2: "pci6.jpg", descr3: "pci6.jpg", title: "Apollo Running short", price: 50, id:6, description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."}
    ])


  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <AppRouter title={"Category name"} posts={posts} />
        </div>
      </BrowserRouter>
  );
}

export default App;
