import React from 'react';

function FlexDemo() {
    return (
        <div className='container border border-primary'>
            <div className='row '>
                <div className='col-4 border border-secondary'>
                    col1
                </div>
                <div className='col-8 border border-success'>
                    col2
                </div>
            </div>
        </div>
    );
}

export default FlexDemo;