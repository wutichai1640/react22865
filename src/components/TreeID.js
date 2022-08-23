import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../App.css';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

  function Click() {
    let navigate = useNavigate();
    return (
      <div style={{textAlign: "center"}}>
        <button 
          type="button"
          onClick={ () => {
            navigate(`/tree`);
          }} 
        > <h3 >ย้อนกลับไป Tree</h3> </button>
      </div>
    );
  }

class TreeID extends Component {
    constructor (props) {
        super(props)
        this.state ={
            response: null,
            data: null,
            id_breed: null,
            id: null,
            tree: null,
            name_thai: "",
            name_eng: "",
            weight: null,
            price: null,
            idtree: null
        }
        // this.state = {show_detail: null}
        // this.setState({ show_detail: show_detail }) 
        console.log(this.props.params.idtree)
    }

    componentDidMount() {
        this.getApi(this.props.params.idtree).then(data => {
          // console.log(data)
          this.setState({ id_breed: data.id_breed })
          this.setState({ id: data.id })
          this.setState({ tree: data.tree })
          this.setState({ name_thai: data.name_thai })
          this.setState({ name_eng: data.name_eng })
          this.setState({ weight: data.weight })
          this.setState({ price: data.price })
        })
        // let id = this.props.params.show_detail
        // this.setState({ show_detail: id })
      }

    getApi = (id)=> {
        const myPromise = new Promise((resolve, reject) => {
            fetch('http://localhost:3100/tree/'+id)
            .then(response => response.json())
            .then(data => {
              // let idtree = this.data
              // this.setState({ data: idtree })
              // this.setState({ idtree: data})
              // console.log()
              resolve(data)
            });
            
        })
        return myPromise
    }

    CreateDetail = (data) => {
        // console.log(data)
        const dataSet = new Promise((resolve, reject) => {
          resolve((
            <div>
              <h6>"id_breed": {data.id_breed}</h6>
              <h6>"id": {data.id}</h6>
              <h6>"tree": {data.tree}</h6>
              <h6>"name_thai": {data.name_thai}</h6>
              <h6>"name_eng": {data.name_eng}</h6>
              <h6>"weight": {data.weight}</h6>
              <h6>"price": {data.price}</h6>
            </div>
          ) )
        });
        return dataSet
      }

    getDetail = (id) => {
        // console.log(id)
        
          fetch("http://localhost:3100/tree/"+id)
          .then(response => response.json())
          .then(data => {
                this.CreateDetail(data).then(dataSet => {
                this.setState({ show_detail: dataSet })
              })
            // console.log(data)
            // this.setState({ id_breed: data.id_breed })
            // this.setState({ id: data.id })
            // this.setState({ tree: data.tree })
            // this.setState({ name_thai: data.name_thai })
            // this.setState({ name_eng: data.name_eng })
            // this.setState({ weight: data.weight })
            // this.setState({ price: data.price })
            // console.log(data)
        })
      }

    render () {
      return (
        <div>
          <div>
            <h2 style={{textAlign: "center"}}>เเสดงรายละเอียดข้อมูล</h2>
            <Click />
          </div>
          <h3 style={{textAlign: "center"}}>"id_breed": {this.state.id_breed}</h3>  
          <h3 style={{textAlign: "center"}}>"id": {this.state.id}</h3>  
          <h3 style={{textAlign: "center"}}>"tree": {this.state.tree}</h3>  
          <h3 style={{textAlign: "center"}}>"name_thai": {this.state.name_thai}</h3>  
          <h3 style={{textAlign: "center"}}>"name_eng": {this.state.name_eng}</h3>  
          <h3 style={{textAlign: "center"}}>"weight": {this.state.weight}</h3>   
          <h3 style={{textAlign: "center"}}>"price": {this.state.price}</h3>
        </div> 
      );
    }
}

export default withParams(TreeID);