import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css"
import { Redirect } from 'react-router-dom';
import "./Error"

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
  const Demo = () => {
    let history = useHistory();
    const onFinish = (values) => {
      console.log(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onSubmit = () =>{
      history.push("/suss");
       }

    const signUp = () =>{
      history.push("/login");
  };
  
    return (
      <div style={{ marginTop: "5%" }}>
         <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>

          <span>
            <Button type="primary" htmlType="signup" onClick={signUp}>
                Signup
            </Button>
            
            {/* <Button type="primary" htmlType="login" onClick={onSubmit}>
                Login
            </Button>  */}
            <p> <a href="/" onClick={onSubmit}>Back</a>
            </p>
          </span>   
        </Form.Item>
      </Form>
    </div>
    )
  }

export default Demo;