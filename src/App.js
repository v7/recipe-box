var React = require("react");
var {ModalManager} = require('react-dynamic-modal');
var Add = require("./Add.js");
var Edit = require("./Edit");

var App = React.createClass({


getInitialState:function(){

  return {

    local:localStorage


  };
},

  addfun:function(recipe_name,ingr){


      localStorage.setItem(recipe_name,ingr.split(","));

        console.log("exec");

      this.setState({
        local: localStorage
      });
  },


  deletefun: function(name){

    localStorage.removeItem(name);

    this.setState({
      local:localStorage
    });

  },


  componentDidMount:function(){


      this.storagefun();

  },


    openAdd:function(){

         ModalManager.open(<Add addfun={this.addfun} onRequestClose={() => true}/>);
      },
      openEdit:function(rec,ing){
           const text = "edit";
           ModalManager.open(<Edit rec={rec} ing={ing} addfun={this.addfun} onRequestClose={() => true}/>);
        },


  storagefun:function(){



    if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.

    console.log("ok there is local storage");
  } else {
  // Sorry! No Web Storage support..
      console.log("your shitty browser does't support localStorage pls shit yourself and fuck off");
      }


  },

  loopOver :function(){
    var rec = [];
    var ing = [];

    for(var k in this.state.local){

      rec.push(k);
      ing.push(this.state.local[k]);



    }
    return [rec,ing];

  }
,


  showOptions:function(theID){
    var list = document.getElementById(theID);

    if (list.style.display == "block"){
        list.style.display = "none";
    }else{
        list.style.display = "block";
    }
},


  render:function(){
      var rec = this.loopOver()[0];
      var ing = this.loopOver()[1];
      var that = this;
      var recDom = rec.map(function(rec,i){

        return (

          <li key={i} className="list-group-item" >
            <span className="badge">{ing[i].split(",").length}</span>

            <a href="javascript:void(" onClick={()=>{that.showOptions(i)}}>{rec}</a>
            <div id={i}className="options">
              <ul className="list-group">
                {ing[i].split(",").map((ing,i)=>{ return <li key={i} className="list-group-item">{ing}</li> })}

              </ul>
      <button className="btn btn-danger" onClick={()=>{ that.deletefun(rec)}}>DELETE</button>
      <button className="btn btn-default" type="button" onClick={()=>{that.openEdit(rec,ing[i])}}>Edit</button>

              </div>

            </li>


        );
      })


    return (
        <div className="container">
        <div className='titel'><h1>Recipe Box</h1></div>
          <div className="box">
            <ul className="list-group">

                {recDom}


            </ul>

            <button type="button" onClick={this.openAdd} id='addB'>Add</button>
          </div>

        </div>
    );
  }
});


module.exports = App;
