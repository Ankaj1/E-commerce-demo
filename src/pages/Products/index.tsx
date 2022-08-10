import DashboardLayout from "../../Components/Layouts/DashboardLayout";
import { listData } from "../../Components/Layouts/Auth";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ProductListType {
  id: number;
  rating: number;
  price: number;
  brand: string;
  description: string;
  name: string;
  date: string;
  title: string;
  images: string[];
  length: number;
}

// const PAGE_NUMBER = 1;

const Products = () => {
  const [data, setData] = useState<ProductListType[]>([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [page, setPage] = useState(PAGE_NUMBER);

  const getProductList = async () => {
    const res = await listData();
    setData(res?.data.products);
    console.log("products=====>", res?.data.products);
  };
  useEffect(() => {
    getProductList();
  }, []);
  // console.log("products=====>", data);

  return (
    <>
      <DashboardLayout>
        <div className="products">
          <div className="col-md-12">
            <div className="title mb-0 d-flex align-items-center justify-content-between">
              <h1 className="mb-0">Products</h1>
              <button className="addbtn" onClick={handleShow}>
                Add Product
              </button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div className="row mt-3">
            {data && data.length > 0 ? (
              data.map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div className="product-box">
                    <div className="product-img">
                      <img src={item.images[0]} />
                    </div>
                    <div className="product-text">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="title">
                          <h2>{item.title}</h2>
                        </div>
                        <div className="price">
                          <h2>{item.price}</h2>
                        </div>
                      </div>
                      <div className="dis">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="">No Data Found</div>
              </>
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Products;
