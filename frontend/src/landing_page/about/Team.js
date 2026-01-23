import React from 'react';
function Team() {
    return (
        <div className="container">
            <h3 className='text-center mb-5'>People</h3>
            <div className="row">
                <div className="col-6 mt-2">
                    <img className='rounded-pill' src="../media/images/ujjwal.jpg" alt="Project-Creator:Ujjwal Maurya" style={{ width: "50%", marginLeft: "9rem" }} />
                    <p className='mt-4 border-top' style={{ marginLeft: "5rem" }}>Project Creator : <strong>Ujjwal Maurya</strong>,Btech(CSE) 3rd year Student </p>
                    <p style={{ marginLeft: "5rem" }}>College: <strong>IMS ENGINEERING COLLEGE,GHAZIABAD</strong> </p>
                    <p style={{ marginLeft: "5rem" }}>Skills :<strong> MERN</strong>&nbsp;Stack Devloper,<strong>DSA</strong>(Java)</p>
                    <p style={{ marginLeft: "5rem" }}>Connect :<a href="mailto:ujjawalmaurya45@gmail.com" style={{ fontWeight: "600", textDecoration: "none" }}>Email </a> <a href="https://www.linkedin.com/in/ujjwal-maurya-369a3b294/" style={{ fontWeight: "600", textDecoration: "none" }}>  LinkdIn</a> <a href="https://github.com/samratujjwal" style={{ fontWeight: "600", textDecoration: "none" }}>Github</a></p>
                </div>
                <div className="col-6">
                    <p className="lh-lg">Hi, I'm <strong>Ujjwal</strong> — a full-stack developer skilled in the <strong>MERN stack: MongoDB, Express.js, React.js, and Node.js</strong>.
                        I build modular, scalable apps with clean architecture and reusable components.
                        My frontend work combines dynamic React interfaces with responsive layouts using <strong>Bootstrap</strong> and custom <strong>CSS</strong>,
                        while my backend focuses on <strong>RESTful APIs</strong> and schema-based data modeling with <strong>Mongoose</strong>.</p>
                    <p className="lh-lg">I’m driven by debugging, performance tuning, and writing maintainable code. With tools like VS Code, Emmet, and custom snippets, I streamline development and boost productivity.
                        I also create mnemonics and shortcuts to simplify workflows and help others code smarter.</p>
                </div>
            </div>
        </div>
    );
}

export default Team;