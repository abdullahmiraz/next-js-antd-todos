import React from "react";
import { Button, DatePicker, Form, Input } from "antd";
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const TaskForm = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={["user"]}>
        <MyFormItemGroup prefix={["name"]}>
          <MyFormItem name="taskTitle" label="Task Title">
            <Input />
          </MyFormItem>
          <MyFormItem name="taskDesc" label="Task Description">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="date" label="Date">
          <DatePicker style={{ width: "100%" }} />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
export default TaskForm;
