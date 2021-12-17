import React from 'react'
import {footer} from './footer.module.css'

const FooterMessage = (props) => (
    <div className={footer}>
    <div className="container">
        <span className="text-muted">© Gatsby Bootstrap project 2021</span>
    </div>
</div>

);
/*class FooterMessage extends Component{
    render()
    {
        return (
            <div className={footer}>
                <div className="container">
                    <span className="text-muted">© Gatsby Bootstrap project 2021</span>
                </div>
            </div>
        );
    }
};*/
export default FooterMessage;