import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./css/widget.css"


function Widget() {
  return (
    <div className="widget">
        <div className="widget_top">
        <div className="widget_header">
            <h4>Linkedin  News</h4>
            <InfoIcon/>


        </div>
        <div className='widget_body'>
            <ul className='widget_option'>
                <li>
                    <h4>slaying Job search Fees</h4>
                    <p>6d ago* 4,55 readers</p>
                </li>
                <li>
                <h4>A two pizza rule for eation</h4>
                    <p>6d ago* 4,55 readers</p>

                </li>
                <li>
                <h4>slaying Job search Fees</h4>
                    <p>6d ago* 4,55 readers</p>
                </li>
                <li><h4>slaying Job search Fees</h4>
                    <p>6d ago* 4,55 readers</p></li>

            </ul>
        </div>
        </div>
       <div className='widget_bottom'>
       <div className='widget_header'>
        <h4>Tosay top cauese </h4>
        <InfoIcon/>

       </div>
       <div className='widget_body'>
       <ul className='widget_option'>
       <li>
                    <h4>Leading with a heavy rain</h4>
                    <p>moly paork</p>
                </li>
                <li>
                <h4>A two pizza rule for eation</h4>
                    <p>6d ago* 4,55 readers</p>

                </li>
                <li>
                <h4>ewader dearm make ateam</h4>
                    <p>Rohit sharma</p>
                </li>
                <li><h4>critical thinking for bettier judgement</h4>
                    <p>6d ago* 4,55 readers</p></li>


        </ul>
       </div>



      </div>
    </div>
  )
}

export default Widget
