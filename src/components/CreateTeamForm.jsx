import React from 'react'

const CreateTeamForm = () => {
    return (
        <div>
            <form>
                <div>
                    <h1>Create Your Team</h1>
                    <p>Lorem ipsum is Simply Dummy Text Of The Printing</p>
                </div>

                <div>
                    <label htmlFor="teamName">Full Name</label>
                    <input type="text" id="fullName" name="teamName" placeholder="Enter your name" required />
                </div>

            </form>
        </div>
    )
}

export default CreateTeamForm
