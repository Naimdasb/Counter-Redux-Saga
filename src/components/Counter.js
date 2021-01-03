import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Typography, Slider, Spin } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Counter = () => {
  const [delay, setDelay] = useState(0);
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const loading = useSelector((state) => state.loading);
  const handleDelay = (value) => {
    setDelay(value);
  };

  const handleNumber = (value) => {
    setNumber(value);
  };
  const handleClick = (event) => {
    if (event.target.textContent === "ADD") {
      dispatch({ type: "ADD_REQUEST", payload: { delay, number } });
    } else {
      dispatch({ type: "SUB_REQUEST", payload: { delay, number } });
    }
  };
  return (
    <div className="container ">
      <Title className="my-5">{count}</Title>
      <Button type="primary" onClick={handleClick} disabled={loading}>
        ADD
      </Button>
      <Button type="primary" onClick={handleClick} disabled={loading}>
        SUB
      </Button>
      <div className="d-flex flex-column m-auto col-6">
        <Title level={3} className="my-5">
          Delay
        </Title>
        <Slider
          max={10}
          min={0}
          value={delay}
          onChange={handleDelay}
          tooltipVisible
          disabled={loading}
        />

        <Title level={3} className="my-5">
          Number
        </Title>
        <Slider
          max={100}
          min={0}
          value={number}
          onChange={handleNumber}
          tooltipVisible
          disabled={loading}
        />
        {loading ? <Spin className="my-5" indicator={antIcon} /> : null}
      </div>
    </div>
  );
};
