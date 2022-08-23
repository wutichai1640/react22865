import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';


// function click(idtree) {
//     let navigate = useNavigate();
//         navigate(`/treeid/${idtree}`);
    
//   }

//   function createInvoice(event){
//     console.log("event : ",  event)
//     return event
//   }

  function Click(props) {
    let navigate = useNavigate();
    return (
      <div style={{textAlign: "center"}}>
        <button 
          type="button"
          onClick={ () => {
            navigate(`/treeid/${props.idtree}`);
          }}
        > ดูรายละเอียด </button>
      </div>
    );
  }
  
class Tree extends Component {
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
            price: null
        }
    }



    componentDidMount = () => {
        this.getApi().then(data => {
        this.setState({ response: data })
        console.log(data)
        })
    }

    getApi = ()=> {
        const my_Promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3100/tree')
            .then(response => response.json())
            .then(data => {
             
                const dataTable = data.map(( key, index ) => {
                    return (
                      <tr key={index}>
                        <td style={{textAlign: "center"}}>{key.id_breed}</td>
                        <td style={{textAlign: "center"}}>{key.id}</td>
                        <td style={{textAlign: "center"}}>{key.tree}</td>
                        <td style={{textAlign: "center"}}>{key.name_thai}</td>
                        <td style={{textAlign: "center"}}>{key.name_eng}</td>
                        <td style={{textAlign: "center"}}>{key.weight}</td>
                        <td style={{textAlign: "center"}}>{key.price}</td>
                        <td>
                        <div>
                            <Click idtree={key.id} />
                          {/* <button type="button" onClick={() => function }>ดูรายละเอียด</button> */}
                        </div>
                        </td>
                    </tr>
                );
            });
            resolve(dataTable)
        })
        })
        return my_Promise
    }
    
    render () {
        return (
            <div>
                <h2 style={{textAlign: "center"}}>ข้อมูลตารางต้นไม้</h2>
                    <div>
                        <table>
                            <tbody>
                                <tr style={{textAlign: "center"}}>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>id_breed</h3>
                                </th>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>id</h3>
                                </th>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>tree</h3>
                                </th>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>name_thai</h3>
                                </th>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>name_eng</h3>
                                </th>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>weight</h3>
                                </th>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>price</h3>
                                </th>
                                <th className="col-md-3">
                                    <h3 style={{textAlign: "center"}}>detail</h3>
                                </th>
                                </tr>
                                {this.state.response}
                                {/* {this.state.response} การดึงข้อมูลมาทั้งตาราง */}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default Tree;