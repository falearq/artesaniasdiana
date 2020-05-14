import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Faq from './pages/Faq'
import Nota from './pages/Nota'

import Contact from './pages/Contact'
import {Paleta} from './Colors.js';


const App = () => {
                return (
                    <Router>
                       
                            <GlobalStyle/>
                               <React.Fragment>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" exact  component={About} />
                                <Route exact path="/shop" exact component={Shop} />
                                <Route exact path="/faq" exact component={Faq} />
                                <Route exact path="/contact"  component={Contact} />
                                <Route path="/nota/:id" component={Nota} />
                                </React.Fragment>
                               
                   
                    </Router>
                )
}

            const GlobalStyle = createGlobalStyle`
                html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td{background: transparent;border: 0;margin: 0;padding: 0;vertical-align: baseline} a{text-decoration:none}
                /*GENERALES*/
                *, *:after ,*:before{
                    -ms-box-sizing:border-box;
                    -moz-box-sizing:border-box;
                    -webkit-box-sizing:border-box;
                    box-sizing:border-box;
                    

                }
                body{
                    background: ${Paleta.primarybg};
                }
                
            `
export default App;
