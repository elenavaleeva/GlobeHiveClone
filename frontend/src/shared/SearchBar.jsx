import React, {useRef} from 'react';
import './search-bar.css';
import {Col, Form, FormGroup} from "reactstrap";

 
const SearchBar = () => {



    const locationRef = useRef('')
    const distanceRef = useRef('0')
    const maxGroupSizeRef = useRef('0')


    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location===''|| distance===''|| maxGroupSize===''){
            return alert ("Fill out required fields!")
        }
    }
    
    return <Col lg='12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-fill"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where you want to go?" ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="miles" ref={distanceRef}/>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><i class="ri-group-fill"></i></span>
                    <div>
                        <h6>Number of People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                    </div>
                </FormGroup>

                <span className="search__icon" type='search' onClick={searchHandler}>
                <i class="ri-search-eye-line"></i>
                </span>
            </Form>
        </div>
    </Col>
      
       
    
}

export default SearchBar;