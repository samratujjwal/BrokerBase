import React from 'react';
function Hero() {
    return (
        <div style={{ backgroundColor: "#f6f6f6" }}>
            <div className="container">
                <div className="row py-5">
                    <div className='d-flex justify-content-between'>
                        <h2 className='fs-1'>Support Portal</h2>
                        <button className='btn btn-primary btn-sm'>My Tickets my link</button>
                    </div>

                    <div class="input-group input-group-lg py-4">
                        <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" placeholder="Eg: How do I open my account, How do i activate F&amp;O..." class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;