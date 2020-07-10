import React, { Component } from 'react';
import './PageLoading.css';
import Loader from './Loader';

export function PageLoading() {
    return (
        <div className="PageLoading">
            <Loader />
        </div>
    );
}
export default PageLoading;