import React from 'react'
// import '../custom.css'

export default function Footer() {
  return (
    <footer class="bg-dark text-center rounded-2">
        <div class="container py-3">
            <div class="py-4 d-flex">
                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"/>
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 flex-grow-1">
                    <h6 class="text-uppercase font-weight-bold mb-4 text-light">Company</h6>
                    <ul class="list-unstyled mb-0">
                        <li class="mb-2"><a href="#" class="text-muted btn">Login</a></li>
                        <li class="mb-2"><a href="#" class="text-muted btn">Register</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="py-3">
        <div class="container text-center">
            <p class="text-muted mb-0 py-2">© 2022 | taskI | All rights reserved.</p>
        </div>
        </div>
    </footer>
  )
}
