var React = require("react");
var { Modal,ModalManager,Effect} =require('react-dynamic-modal');
var that;

class Edit extends React.Component{

  constructor(props){

    super(props)

    this.state={
      rec:this.props.rec,
      ing:this.props.ing

    }
      that =this;


  }


  changeHandler=(e)=>{

      this.setState({ing:e.target.value})


  }


  submitHandler=(e)=>{

    e.preventDefault();
    console.log(this.props)
    this.props.addfun(this.state.rec,this.state.ing)
ModalManager.close();

  }


  render(){

        const { text,onRequestClose } = this.props;
    return (



         <Modal onRequestClose={this.props.onRequestClose} effect={Effect.ScaleUp}>
           <div>
               <h2>Edit Recipe</h2>
               <form onSubmit={this.submitHandler}>
                 <label htmlFor="recipe_name">Recipe Name  <input type="text" ref="recipe_name" value={this.state.rec}
                   /> </label>

                 <label htmlFor="ing">Ingredients  <input type="text" ref="ing" value={this.state.ing} onChange={this.changeHandler}/> </label>

                 <button className="btn btn-primary btn-block" type="submit">Edit</button>
               </form>



         </div>
         </Modal>


    )


  }



}


module.exports=Edit
