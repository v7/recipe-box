var React = require("react");
var { Modal,ModalManager,Effect} =require('react-dynamic-modal');


var Add=React.createClass({


  addfun:function(event){
      event.preventDefault();

      this.props.addfun(this.refs.recipe_name.value,this.refs.ing.value);

    ModalManager.close();


  },

   render:function(){
      const {onRequestClose } = this.props;
      return (
         <Modal onRequestClose={this.props.onRequestClose} effect={Effect.ScaleUp}>
           <div>
               <h2>Add Recipe</h2>
               <form onSubmit={this.addfun}>
                 <label htmlFor="recipe_name">Recipe Name  <input type="text" ref="recipe_name"/> </label>

                 <label htmlFor="ing">Ingredients  <input type="text" ref="ing"/> </label>

                 <button className="btn btn-primary btn-block" type="submit">ADD</button>
               </form>



         </div>
         </Modal>
      );
   }
});




module.exports=Add;
