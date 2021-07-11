import React, { useState } from "react";
import styled from "@emotion/styled";
import "./App.css";
import Board from "./scenes/Board";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import { Form, Modal } from "antd";
import { useDispatch } from "react-redux";
import { postUser } from "./redux/ducks/user";
import "antd/dist/antd.css";
const StyledHeading = styled.h1`
  color: #ff6d00;
  font-family: Creepy, serif;
  font-weight: normal;
  text-align: center;
  font-size: 3.5em;
  margin-bottom: 8px;
`;

const StyledForm = styled(Form)`
  transform: translateY(170px);
  .ant-form-item-explain-error {
    color: #ffffff;
    font-family: Creepy, serif;
    margin-top: 6px;
    font-size: 18px;
  }
`;

const App = () => {
  const [start, setStart] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setStart(true);
    dispatch(postUser(values));
  };
  return (
    <div className="App">
      <StyledHeading>Memory - King</StyledHeading>
      <Board />

      {/* {true ? (
        <Board />
      ) : (
        <>
          <StyledForm name="basic" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please Enter your Name!" }]}
            >
              <CustomInput placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <CustomButton
                htmlType="submit"
                // onClick={handleStartGame}
              >
                Start The Game
              </CustomButton>
            </Form.Item>
          </StyledForm>
        </>
      )} */}
    </div>
  );
};

export default App;
