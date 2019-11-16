import React from 'react';
import './DashboardContentItem.css'

const formatter = (item) => item.replace('<p>', '').replace('</p>','')

const DashboardContentItem = ({title, body}) => (
    <li className="list__item"><div><h3>{formatter(title).substring(0,30)}</h3><p>{formatter(body).substring(0,100)}</p></div></li>
    );


export default DashboardContentItem;