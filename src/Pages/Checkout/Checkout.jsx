import React from "react";
import CheckBanner from "../../Shared/CheckBanner/CheckBanner";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const services = useLoaderData();
  console.log(services);
  const { title, _id } = services;
  return (
    <>
      <CheckBanner />

      {/*<form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button>Login</button>
          <input
            className="btn btn-secondary btn-block"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>*/}
      <div className="card-body">
        <h3>name: {title}</h3>
      </div>
    </>
  );
};

export default Checkout;
