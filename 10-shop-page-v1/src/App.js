import { useState } from "react";

function App() {

  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1000.00,
      description: "New mac pro",
      image: "images/laptop.png"
    },
    {
      id: 2,
      name: "Mobile",
      price: 500.00,
      description: "New model",
      image: "images/mobile.png"
    }
  ]);
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabChange = (e, tabIndex) => {
    e.preventDefault();
    setCurrentTab(tabIndex);
  }

  const renderTabPanel = (product) => {
    let panel;
    switch (currentTab) {
      case 1: panel = <div>{product.description}</div>; break;
      case 2: panel = <div>Not Yet</div>; break;
      case 3: panel = <div>None Yet</div>; break;
      default: panel = null;
    }
    return panel;
  }

  const renderProduct = (product) => {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-4">
            <img className="img-fluid" src={product.image} alt={product.name} />
          </div>
          <div className="col-8">
            <div>{product.name}</div>
            <div>&#8377;{product.price}</div>
            <button className="btn btn-primary">Add to cart</button>
            <ul className="mt-3 nav nav-tabs">
              <li className="nav-item">
                <a onClick={e => handleTabChange(e, 1)}
                  className={'nav-link ' + (currentTab === 1 ? 'active' : '')}
                  href="/">
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={e => handleTabChange(e, 2)}
                  className={'nav-link ' + (currentTab === 2 ? 'active' : '')}
                  href="/">Spec..</a>
              </li>
              <li className="nav-item">
                <a onClick={e => handleTabChange(e, 3)}
                  className={'nav-link ' + (currentTab === 3 ? 'active' : '')}
                  href="/">Reviews</a>
              </li>
            </ul>
            {renderTabPanel(product)}
          </div>
        </div>
      </div>
    );
  }

  const renderProducts = () => {
    return products.map(product => (
      <div key={product.id} className="mt-4 list-group">
        {renderProduct(product)}
      </div>
    ));
  }

  return (
    <div className="container">
      <div className="display-1">shop-IT</div>
      <hr />
      {renderProducts()}
    </div>
  );
}

export default App;
