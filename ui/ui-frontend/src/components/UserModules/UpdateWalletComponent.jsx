import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { UserBalanceService } from '../../Services/UserBalanceService';

export default function UpdateWalletComponent(props) {
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  const userName = localStorage.getItem("username");

  const balance = props.balance;
  console.log(balance);

  const [updatedBalance, setUpdatedBalance] = useState(0);

  console.log(updatedBalance);
  const setUserBalance = () => {

    console.log(updatedBalance);

    UserBalanceService.updateUserBalance(userName, updatedBalance).then((Response) => {
      console.log(Response.data);

    })
    window.location.reload(true);
    setCentredModal(!centredModal)

  }

  return (
    <div>
      <button className="btn btn-info mt-5" onClick={toggleShow}>Add Money to Wallet</button>

      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Enter Amount to be added</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <input
                type="number"
                onChange={(e) => setUpdatedBalance(e.target.value)}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <button className='btn btn-info' onClick={setUserBalance}>Add Amount</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
