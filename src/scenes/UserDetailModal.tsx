import styled from "@emotion/styled";
import { Form, Modal, Row, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { postUser } from "../redux/ducks/user";
import conSecMin from "./../components/conSecMin";

const { Text } = Typography;
const StyledForm = styled(Form)`
  width: 60%;
  margin: auto;
  .ant-form-item-label{
    margin: auto;
    label{
      color: #fff;

    }
  }
  .ant-form-item-explain-error {
    color: #ffffff;
    margin-top: 6px;
    font-size: 18px;
  }
  input{
    :focus{
      box-shadow: 0 0 0 2px rgb(211 218 224 / 20%);
  }
  
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background: radial-gradient(#9d5900, #3d2200);
    .ant-modal-close-x {
      color: #ffffff;
    }
    .ant-modal-header {
      background: radial-gradient(#9d5900, #5b4d3c);
      border-bottom: 1px solid #633903;
      .ant-modal-title {
        color: #ffffff;
      }
    }
  }
`;

const StyledText = styled(Text)`
  color: #ffffff;
`;

const StyledButton = styled(CustomButton)`
  width: 100%;
  margin: 0;
`;
type userProps = {
  visible: any;
  flips: number;
  timer: any;
  handleCancel: () => void;
};
const UserDetailModal: React.FC<userProps> = ({
  visible,
  flips,
  timer,
  handleCancel,
}) => {
  const dispatch = useDispatch();
  console.log(flips, "flips");
  const onFinish = (values: any) => {
    console.log("Success:", { ...values, flips, timer });
    dispatch(postUser({ ...values, flips, timer }));
  };

  return (
    <div>
      <StyledModal
        title="Score"
        visible={visible}
        footer={false}
        onCancel={handleCancel}
      >
        <Row>
          <StyledForm name="basic" onFinish={onFinish} hideRequiredMark>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please Enter your Name!" }]}
            >
              <CustomInput placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item label="No of Flips">
              <StyledText>{flips}</StyledText>
            </Form.Item>
            <Form.Item label="Duration">
              <StyledText>{conSecMin(timer)}</StyledText>
            </Form.Item>

            <Form.Item>
              <StyledButton htmlType="submit">Submit</StyledButton>
            </Form.Item>
          </StyledForm>
        </Row>
      </StyledModal>
    </div>
  );
};

export default UserDetailModal;
