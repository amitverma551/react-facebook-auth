import React,{ Component} from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component{
    state= {
        isLoggedIn:false,
        userId:'',
        name:'',
        email:'',
        picture:'',
    }
  
    responseFacebook = (res)=>{
        console.log(res)
       this.setState({
        isLoggedIn:true,
        userId: res.userId,
        name: res.name,
        email: res.email,
        picture:  res.picture.data.url
       })
    }

    componentClicked =()=>{
       console.log("clicked")
    }
  
    render(){
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent=(<div>
             <img src={this.state.picture} alt={this.state.name} />
             <h2>Welcome {this.state.name}</h2>
              Email: {this.state.email}
           </div>)
        }else{
            fbContent=(
            <FacebookLogin
            appId="527833861398176"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
            )  
        }

        return(
            <div>
               {fbContent} 
            </div>
        );
    }
}
export default Facebook;