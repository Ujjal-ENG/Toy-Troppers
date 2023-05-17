/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

function ForgotPassword() {
    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    return (
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl  mx-auto bg-base-100">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text hover-stroke text-2xl font-bold text-violet-600">Send a forgot password link via email!</span>
                    </label>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button type="button" className="btn btn-primary" onClick={() => resetPassword(email)}>
                        Send an email with a forgot password link
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
