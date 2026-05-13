import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ReceiptModal = ({ show, onHide, orderList, totalAmountDue, cashTendered, change }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ fontFamily: 'monospace', padding: '20px', lineHeight: '1.6' }}>
          <h3 style={{ textAlign: 'center' }}>Receipt</h3>
          <hr />
          <div>
            <h5>Order List:</h5>
            {orderList.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>
                <span>{item.name}</span>
                <span>{item.quantity} x ${item.amount / item.quantity}</span>
                <span>${item.amount.toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Total Amount Due:</span>
              <span>${totalAmountDue.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Cash Tendered:</span>
              <span>${cashTendered}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Change:</span>
              <span>${change.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={() => window.print()}>Print Receipt</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReceiptModal;
