import React from "react";

const HomePage = () => {
  return (
    <>
      <main className="center" id="main">
        <div className="page-area">
          <article>
            <h1>Stay on track</h1>
            <meta name="description" content="Tips for staying on track" />
            <p>
              <i>
                you know where you are spending your money? If you really stop
                to track it down, you would get surprised! Proper budget
                management depends on real data... and this app will help you
                with that!
              </i>
            </p>
          </article>

          <article>
            <h1>Alerts</h1>
            <meta name="description" content="Related Alerts" />
            <p>
              <i>
                What if your clothing budget ended? You will get an alert. The
                goal is to never go over the budget.
              </i>
            </p>
          </article>

          <article>
            <header>
              <h1>Results</h1>
            </header>
            <p>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>

          <article>
            <h1>Free</h1>
            <p>
              This app is free!!! And you are the only one holding your data!
            </p>
          </article>

          <article>
            <header>
              <h1>Stay on track</h1>
            </header>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </p>
          </article>

          <article>
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </p>
          </article>

          <article>
            <h1>Results</h1>
            <p>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>

          <article>
            <h1>Chart</h1>
            <p>
              <canvas id="myChart" width="410" height="410"></canvas>
            </p>
          </article>
          <div>
            <h1>D3js Chart</h1>
            <svg width="1100px" height="650px" style={{ margin: "5px" }}></svg>
          </div>
        </div>
        <button className="randomize">randomize</button>
      </main>{" "}
    </>
  );
};

export default HomePage;
