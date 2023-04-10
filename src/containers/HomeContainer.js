import register from '../Components/register'
import {connect} from 'react-redux'
import {addToCart} from '../Services/Actions/action'

const mapStateToProps=state=>({
     data:state.cardItems
})
const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(register);
// export default register;