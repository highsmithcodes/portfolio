import React from 'react';
import { Transition } from "react-transition-group";
import '../../css/main.css';
import image_1_logo from '../../img/hauptman-obrien-wolf-and-lathrop.svg';
import image_2_logo from '../../img/coplan-crane-personal-injury-lawyers.png';
import image_3_logo from '../../img/Henry-Carus-Associates-Injury-Lawyer.png';
import image_4_logo from '../../img/The-Bishop-Law-Group.png';
import image_5_logo from '../../img/cannabis-benchmarks-logo-white.png';
import image_6_logo from '../../img/maggiano-personal-injury-lawyers-logo.png';



const Work: React.FC = () => {

    return (
        <div id="work">
            <div className="tabs is-centered">
                <ul className='tab-controls'>
                    <li className="is-active"><a>Hauptman O'Brien</a></li>
                    <li><a>Coplan & Crane</a></li>
                    <li><a>Henry Carus</a></li>
                    <li><a>Cannabis Benchmarks</a></li>
                    <li><a>Bishop Law</a></li>
                    <li><a>Maggiano</a></li>
                </ul>
            </div>
            <div className="tabs-content is-centered">
                <ul>
                    <li className="is-active">
                        <div className='tab-details'>
                            <div className='detail-image'>
                                <a href='#' target='_blank'>
                                    <img src={image_1_logo} />
                                </a>
                            </div>
                            <div className='text-left detail-body'>
                                <div className='h4 text-left'>About</div>
                                <p>Lorem ipsum dolor sit amet, pri at ceteros inciderint. Sea et mutat feugiat, his aliquip nominavi no. Cum at purto legimus. Tibique offendit euripidis ne per. Te illum ceteros sed, ut aeque inimicus qui. Eu appareat urbanitas ius, magna lorem no per, et quo mutat nostro aliquip. Corpora iracundia adversarium sea cu, et mollis nominavi mediocritatem mel, ius alia evertitur tincidunt cu.</p>
                                <div className='h4 text-left'>Technology used</div>
                                <ul>
                                    <li>Test</li>
                                    <li>test</li>
                                    <li>test</li>
                                </ul>
                                <p className='new-window'><a href="#" target="_blank"><i className="fas fa-arrow-up-right-from-square"></i></a></p>
                            </div>
                        </div>
                    </li>
                    {/* <li><a>Coplan & Crane</a></li>
                    <li><a>Henry Carus</a></li>
                    <li><a>Cannabis Benchmarks</a></li>
                    <li><a>Bishop Law</a></li>
                    <li><a>Maggiano</a></li> */}
                </ul>
            </div>
        </div>
    
    );
}

export default Work;
