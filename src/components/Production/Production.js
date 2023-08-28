"use client";
import React from "react";
import ProdLeft from "./ProdLeft";
import ProdRight from "./ProdRight";

export default function Production() {
  return (
    <>
      <div className="productionsplus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ProdLeft />
            </div>
            <div className="col-lg-6">
              <ProdRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
