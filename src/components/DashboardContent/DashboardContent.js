import React, { Component, useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Button from '../shared/Button';
import './DashboardContent.css';
import DashboardContentItem from  './DashboardContentItem/DashboardContentItem'

const DashboardContent = ({list = []}) => {

    return (
          <div className="dashboardContent">
            <ul className="list">
          
               {list.map(item => <DashboardContentItem key={item.id} body={item.body} title={item.title}/>)}
        
            </ul>
          </div>


    );
  }

//   {list.length === 0 ? (<p>Loading...</p>) : 
//     (list.map(item => <DashboardContent body={item.body} title={item.body}/>))
//  }

const mapStateToProps = (state) => ({
  list: state.session.list
})




export default connect(mapStateToProps)(DashboardContent);
