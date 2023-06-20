import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalBody, } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { SecurityService } from '../../Services/SecurityService';
import { OrderService } from '../../Services/OrderService';
import ChangePassword from './ChangePassword';
import "../../StyleSheets/ForgotPassword.css";

export const ForgotPassword = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [emails, setEmails] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const [showOtpButton, setShowOtpButton] = useState(true);
    const [passwordComponent, setPasswordComponent] = useState(false);
    const [OTP, setOTP] = useState('')
    const [userEnteredOtp, setUserEnteredOtp] = useState('');


    const checkEmail = async () => {
        const newError = {};
        const user = await SecurityService.getUserByEmail(email).then()
        console.log(user.data);
        if (user.data === null) {
            newError.email = "There is no account with this email, please sign up"
        } else {
            const otp = await OrderService.generateOtp(email).then()
            setOTP(otp.data)

            setShowOTP(true)
            setShowOtpButton(false)
        }

        setErrors(newError)
    }

    const checkOtp = () => {
        const newError = {}
        console.log(OTP)

        if (userEnteredOtp == OTP) {
            console.log("......otp")
            setPasswordComponent(true)
            setOTP("")
            setEmails(email)

        }
        else {
            newError.OtpCheck = "please enter correct OTP."
        }

        setErrors(newError);
    }

    return (
        <div>
            <a><span style={{ color: "blue" }} onClick={() => setShow(true)}>click here</span></a>
            <MDBModal show={show} onHide={() => setShow(false)}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <Modal.Title>Change Password</Modal.Title>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className='forgotPassword'>
                                {!passwordComponent &&
                                    <div>
                                        <label>Email
                                            <input name="email" type="email" placeholder='enter your email' onChange={(e) => { setEmail(e.target.value) }} />
                                            {errors.email && <span>{errors.email}</span>}
                                        </label>
                                        {showOTP &&
                                            <label> OTP
                                                <input name="otp" type="Number" placeholder="enter OTP" onChange={(e) => { setUserEnteredOtp(e.target.value) }}></input>
                                                {errors.OtpCheck && <span>{errors.OtpCheck}</span>}
                                            </label>}
                                        {showOtpButton &&
                                            <div>
                                                <button className='btn btn-primary' onClick={(e) => checkEmail(e)}>Get OTP</button>
                                            </div>}

                                        {!showOtpButton &&
                                            <div>
                                                <button className='btn btn-primary' onClick={(e) => checkOtp(e)}>submit</button>
                                            </div>
                                        }
                                    </div>}
                                {passwordComponent && <ChangePassword email={emails} />}
                            </div>

                        </MDBModalBody>

                    </MDBModalContent>
                </MDBModalDialog>

            </MDBModal>
        </div >
    )
}