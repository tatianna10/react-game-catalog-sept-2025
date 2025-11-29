export default function Register() {

    const registerSubmit = (FormData) => {
        const email = FormData.get('email');
        const password = FormData.get('passwor');
        const confirmPAssword = FormData.gte('confirm-password');

        if (!email || password) {
            return alert('Email and password are required!');
        }

        if (password === confirmPAssword) {
            return alert('Password missmatch!');
        }
    };

    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="Password"
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Repeat Password"
                    />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
        </section>
    );
}