import React, { useState } from "react";
import { OrderList } from "primereact/orderlist";
import { ProgressSpinner } from "primereact/progressspinner";

import "./styles.css";

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Launch {
  mission_name: string;
  rocket: Rocket;
  links: {
    mission_patch: string;
  };
}

interface LaunchProps {
  releases: Launch[];
  loaded: boolean;
}
const ListOfLaunch: React.FC<LaunchProps> = ({
  releases,
  loaded,
}: LaunchProps) => {
  const itemTemplate = (item: Launch) => {
    return (
      <div className="product-item">
        <div className="image-container">
          <img src={item.links.mission_patch} alt={item.mission_name} />
        </div>
        <div className="product-list-detail">
          <h5 className="mb-2">{item.mission_name}</h5>
          <i className="pi pi-sun product-category-icon"></i>
          <span className="product-category">{item.rocket.rocket_name}</span>
        </div>
      </div>
    );
  };
  return (
    <div>
      {loaded ? (
        <div className="orderlist-demo">
          <div className="card">
            <OrderList
              value={releases}
              itemTemplate={itemTemplate}
              header="Lançamentos"
            ></OrderList>
          </div>
        </div>
      ) : (
        <div className="loading-spinner">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
};

export default ListOfLaunch;
