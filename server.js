const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Home Page</h1>
        <a href="/user_reg">User Registration Form</a>
    `);
});

// Display registration form
app.get('/user_reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'user_reg.html'));
});

// form submission
app.post('/user_reg_submit', (req, res) => {

    const {
        first_name,
        middle_name,
        last_name,
        gender,
        dob,
        email,
        password,
        security_question,
        security_answer,
        hobbies
    } = req.body;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Registration Details</title>
            <style>
                body {
                    font-family: Arial;
                    background: #f2f2f2;
                    padding: 30px;
                }

                .container {
                    max-width: 600px;
                    margin: auto;
                    background: white;
                    padding: 25px;
                    border-radius: 10px;
                }

                h2 {
                    color: #333;
                }

                p {
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }
            </style>
        </head>
        <body>

            <div class="container">
                <h2>Registration Successful</h2>

                <p><b>First Name:</b> ${first_name}</p>
				<p><b>Middle Name:</b> ${middle_name}</p>
				<p><b>Last Name:</b> ${last_name}</p>
				<p><b>Gender:</b> ${gender}</p>
				<p><b>Date of Birth:</b> ${dob}</p>
				<p><b>Email:</b> ${email}</p>
				<p><b>Password:</b> ${password}</p>
				<p><b>Security Question:</b> ${security_question}</p>
				<p><b>Security Answer:</b> ${security_answer}</p>
				<p><b>Hobbies:</b> ${hobbies}</p>
                <a href="/user_reg">Go Back to Registration</a>
            </div>

        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
