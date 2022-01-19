import React, { useState, useEffect } from "react";
import { Form, Button, Select, DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { getDevices, getInterfaces } from "../api/api";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
    lg: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
    lg: {
      span: 10,
    },
  },
};

const HostForm = () => {
  const [form] = Form.useForm();

  const [blackoutSelect, setBlackoutSelect] = useState("host");
  const [devicesData, setDevicesData] = useState([]);
  const [interfacesData, setInterfacesData] = useState([]);

  useEffect(() => {
    getDevices()
      .then((res) => setDevicesData(res.data))
      .catch((err) => console.error(err));

    getInterfaces()
      .then((res) => setInterfacesData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleFinish = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleDescription = (e) => {
    console.log(e.target.value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleBlackout = (e) => {
    setBlackoutSelect(e);
  };
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "5%",
          marginRight: "6%",
          fontWeight: "700",
          fontSize: "1.5rem",
          lineHeight: "1.5rem",
        }}
      >
        BlackOut Form
      </h1>
      <Form
        form={form}
        name="HostForm"
        layout="horizontal"
        initialValues={{
          blackout: "host",
        }}
        onFinish={handleFinish}
        {...formItemLayout}
      >
        <Form.Item
          name="blockout"
          label="BlockOut For"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onChange={handleBlackout} defaultValue={"host"}>
            <Option value="host">Host</Option>
            <Option value="interface">Interface</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="Device"
          label="Device"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode={blackoutSelect === "interface" ? "none" : "multiple"}
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {devicesData?.map((device) => (
              <Option key={device} value={device}>
                {device}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="interface"
          label="Interface"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select interface"
            onChange={handleChange}
            disabled={blackoutSelect === "host"}
          >
            {interfacesData?.map((interfaces) => (
              <Option key={interfaces} value={interfaces}>
                {interfaces}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="startdate"
          label="Start Date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker.RangePicker showTime />
        </Form.Item>
        {/* <Form.Item
          name="endDate"
          label="End Date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker showTime style={{ paddingLeft: "30%" }} />
        </Form.Item> */}
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea
            maxLength={100}
            showCount
            onChange={handleDescription}
            allowClear
          />
        </Form.Item>
        <Form.Item style={{ marginLeft: "50%" }}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default HostForm;
