'use client';

import { useState } from "react";
import styles from './styles.module.css';
import signIn from "@/lib/firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        signIn(email, password);
    };

    return (
        <div className={styles.loginForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputBlocks}>
                    <label>
                        Email:
                    </label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className={styles.inputBlocks}>
                    <label>
                        Password:
                    </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>

                <button type="submit" value="Submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;