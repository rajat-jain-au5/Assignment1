import React from 'react';
import './style.scss';
import TestimonialCard from './testimonialCard';

export default function Page() {
    return (
        <div className='web-page-holder'>
            <div className='container-fluid ps-0'>
                <div className='row'>
                    <div className='col-md-7 col-12 pe-0'>
                        <div className='left-part'>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <img src='/images/bell-icon.svg' alt='' />
                                    <h4>Get notified when a highly correlated whale makes a move</h4>
                                    <p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
                                </div>
                                <div className='col-md-6'>
                                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="card">
                                                            <div className='d-flex justify-content-between'>
                                                                <img src='/images/bell-icon-black.svg' alt='' />
                                                                <span>Save</span>
                                                            </div>
                                                            <h4 className='mt-3'>We’ll be sending
                                                                notifications to you
                                                                here</h4>
                                                            <div className='mt-2'>
                                                                <input type='email' placeholder='' value={'hello@gmail.com'} className='form-control' />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="card">
                                                            <div className='d-flex justify-content-between'>
                                                                <img src='/images/bar-chart.svg' alt='' />
                                                                <input type='checkbox' checked={true} />
                                                            </div>
                                                            <h5 style={{ marginTop: 38 }}>Notify me when any wallets
                                                                move more than</h5>
                                                            <div className='select-value'>
                                                                $1000.00 &nbsp;&nbsp; <img src='/images/arrow-down.svg' alt='' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="row">
                                                    <div class="col-md-6 col-6">
                                                        <div class="card">
                                                            <div className='d-flex justify-content-between'>
                                                                <img src='/images/clock.svg' alt='' />
                                                                <input type='checkbox' checked={true} />
                                                            </div>
                                                            <h5 className='mt-3'>Notify me when any wallet dormant for</h5>
                                                            <div className='select-value'>
                                                                30days &nbsp;&nbsp; <img src='/images/arrow-down.svg' alt='' />
                                                            </div>
                                                            <h5>becomes active</h5>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        <div class="card">
                                                            <div className='d-flex justify-content-between'>
                                                                <img src='/images/clock.svg' alt='' />
                                                                <input type='checkbox' checked={true} />
                                                            </div>
                                                            <h5 className='mt-3'>Notify me when any wallet dormant for</h5>
                                                            <div className='select-value'>
                                                                30days &nbsp;&nbsp; <img src='/images/arrow-down.svg' alt='' />
                                                            </div>
                                                            <h5>becomes active</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4' style={{ marginRight: 30 }}>
                                <div className='col-md-6'>
                                    <img src='/images/img2.png' alt='' width={290} height={270} />
                                </div>
                                <div className='col-md-6 text-right'>
                                    <img src='/images/view-icon.svg' alt='' />
                                    <h4 className='text-right'>Watch what the whales are doing</h4>
                                    <p className='text-right'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
                                </div>

                            </div>
                            <div className='row mt-3' >
                                <h5 className='text-right' style={{ marginRight: 30 }}>Testimonials</h5>
                                <div style={{ border: '1px solid #E5E5E680' }}></div>
                                <div className='testimonial-cards ms-3'>
                                    <img src='/images/img1.svg' alt='' />&nbsp;&nbsp;
                                    <TestimonialCard
                                        name='Jack F'
                                        designation='Ex Blackrock PM'
                                        quote='“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
                                    />
                                    <TestimonialCard
                                        name='Yash P'
                                        designation='Research, 3poch Crypto Hedge Fund'
                                        quote={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 col-12 ps-0'>
                        <div className='right-part'>
                            <div className='input-box'>
                                <h3>Sign up for exclusive access.</h3>
                                <div className='mb-3'>
                                    <input className='form-control email-input' type='email' placeholder='Your email address' />
                                </div>
                                <div className='mb-3'>
                                    <button className='form-control'>Get started</button>
                                </div>
                                <p>You’ll receive an email with an invite link to join.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
