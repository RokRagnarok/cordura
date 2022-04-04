import React from "react";
import { Card } from "antd";
import { Typography } from "antd";
  
const { Title } = Typography;
  
const weaponMap = {
  s: "tijeras",
  p: "papel",
  r: "piedra"
};
const statusMap = {
  w: "Ganas",
  l: "Pierdes"
};
  
const DecisionBox = props => {
  return (
    <Card
      title="Decision Box"
      style={{
        width: "300px",
        height: "250px",
        alignItems: "center",
        marginTop: "15px"
      }}
      bodyStyle={{ textAlign: "center" }}
    >
      <Title level={1} type="warning">
        {weaponMap[props.weapon]}
      </Title>
      <Title level={2} mark type="secondary">
        {statusMap[props.status]}
      </Title>
    </Card>
  );
};
  
export default DecisionBox;