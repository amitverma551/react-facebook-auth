import React,{Component} from 'react';
import GoogleLogin from 'react-google-login';

class Google extends Component{
 
    state={
        isLoggedIn:false,
        userId:'',
        name:'',
        email:'',
        picture:''
    }
    responseGoogle =(res)=>{
        console.log(res);
    }
    responseGoogle=(err)=>{
        console.log(err)
    }
    render(){
        let gContent;
        if(this.state.isLoggedIn){

        }else{
            gContent =(
                <GoogleLogin
                    clientId="177541070600-8754buposbejernu1genqvu48k1os30g.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            )
        }
        return (
            <div>{gContent}</div>
            )
    }
}

export default Google;