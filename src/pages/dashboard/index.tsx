import React from 'react';
import PageTitle from '../../components/pageTitle';
import Card from '../../components/card';
import './style.scss';
import Button from '../../components/button';

const Dashboard = () => (
  <div className="dashboard-wrapper">
    <PageTitle title="Dashboard" />
    <section>
      <div className="row mb-4">
        <div className="col-md-6">
          <Card>
            <div className="d-flex justify-content-between card-inner-wrapper">
              <img src="./assets/icons/doller.svg" alt="$" />
              <div className="description">
                <p>USDC</p>
                <h4>12,200.50</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between card-inner-wrapper mt-2">
              <Button type="button" size="sm" buttonType="primary" label="Send" />
              <Button type="button" size="sm" label="Convert" buttonType="secondary" />
            </div>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <div className="d-flex justify-content-between card-inner-wrapper">
              <img src="./assets/icons/aed.svg" alt="$" />
              <div className="description">
                <p>UAE DIRHAM</p>
                <h4>12,200.50</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between card-inner-wrapper mt-2">
              <button type="button" className="btn btn-primary btn-sm">Send</button>
              <button type="button" className="btn btn-secondary btn-sm">Convert</button>
            </div>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="table-active">
                  <th scope="col">

                    <div className="d-flex">
                      <span>From</span>
                      <div className="filters">
                        <div className="arrow-up" />
                        <div className="arrow-down" />
                      </div>
                    </div>

                  </th>
                  <th scope="col">
                    <div className="d-flex">
                      <span>To</span>
                      <div className="filters">
                        <div className="arrow-up" />
                        <div className="arrow-down" />
                      </div>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="d-flex">
                      <span>Currency</span>
                      <div className="filters">
                        <div className="arrow-up" />
                        <div className="arrow-down" />
                      </div>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="d-flex">
                      <span>100.00</span>
                      <div className="filters">
                        <div className="arrow-up" />
                        <div className="arrow-down" />
                      </div>
                    </div>

                  </th>
                  <th scope="col">
                    <div className="d-flex">
                      <span>Action</span>
                      <div className="filters">
                        <div className="arrow-up" />
                        <div className="arrow-down" />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Finvault</td>
                  <td>My Wallet</td>
                  <td>USD Coin (PoS)</td>
                  <td>100.00</td>
                  <td><Button label="Received" buttonType="success" size="sm" round renderNonButton /></td>
                </tr>
                <tr>
                  <td>Finvault</td>
                  <td>My Wallet</td>
                  <td>USD Coin (PoS)</td>
                  <td>100.00</td>
                  <td><Button label="Sent" buttonType="danger" size="sm" round renderNonButton /></td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

  </div>
);

export default Dashboard;
