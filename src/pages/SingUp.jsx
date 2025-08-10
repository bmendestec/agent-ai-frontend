export function SignUp() {
    return (
        <>
            <div className="signup-container">
                <div className="signup-title">
                    <h1>Signup</h1>
                </div>
                <div className="signup-form">
                    <form action="submit">
                        <input type="text" name="name" placeholder="Full name" />
                        <input type="text" name="email" placeholder="E-mail" />
                    </form>
                </div>
            </div>
        </>
    )
}