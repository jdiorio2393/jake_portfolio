import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <div className='container contact-form'>
      <div className='card'>
        {/* <img src='./bg-head-02.jpg' className='card-img-top'></img> */}

        <div className='card-body'>
          <h2 className='card-title text-white'>Get In Touch</h2>
          <form>
            <div class='form-row pb-3'>
              <div class='form-group col-md-6'>
                <label for='inputEmail4'>First Name</label>
                <input type='email' class='form-control' id='inputEmail4' />
              </div>
              <div class='form-group col-md-6'>
                <label for='inputPassword4'>Password</label>
                <input
                  type='password'
                  class='form-control'
                  id='inputPassword4'
                />
              </div>
            </div>
            <div class='form-group pb-3'>
              <label for='inputAddress'>Address</label>
              <input
                type='text'
                class='form-control'
                id='inputAddress'
                placeholder='1234 Main St'
              />
            </div>
            <div class='form-group pb-3'>
              <label for='inputAddress2'>Address 2</label>
              <input
                type='text'
                class='form-control'
                id='inputAddress2'
                placeholder='Apartment, studio, or floor'
              />
            </div>
            {/* <div class='form-row'>
              <div class='form-group col-md-6'>
                <label for='inputCity'>City</label>
                <input type='text' class='form-control' id='inputCity' />
              </div>
              <div class='form-group col-md-4'>
                <label for='inputState'>State</label>
                <select id='inputState' class='form-control'>
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class='form-group col-md-2'>
                <label for='inputZip'>Zip</label>
                <input type='text' class='form-control' id='inputZip' />
              </div>
            </div>
            <div class='form-group'>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='gridCheck'
                />
                <label class='form-check-label' for='gridCheck'>
                  Check me out
                </label>
              </div>
            </div> */}
            <button type='submit' class='btn'>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
