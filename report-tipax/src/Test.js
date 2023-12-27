// import 'mdbreact/dist/css/mdb.css';
// import 'mdbreact/dist/css/style.css';
import "./mdbreact/dist/css/mdb.css";
import "./App.css";
import React, { useEffect } from "react";
import { MDBDataTable, MDBCard, MDBCardHeader, MDBCardTitle, MDBBtn, CSVLink, FontAwesomeIcon, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Test() {
    useEffect(() => {
        // getRequest();
    }, []);
    return (
        <MDBCard>
            <MDBCardHeader>
                <MDBCardTitle>
                    <div>Graph Data ( Total Pieces: {this.props.count} )</div>
                    <div className="flex-row d-flex justify-content-end">
                        <MDBBtn size="sm" color="primary" style={{ border: 'none' }}
                            onClick={this.handleButtonClick} role="button" tag="a">
                            <CSVLink className="btn btn-primary btn-sm" id="csvLink" style={{
                                border: 'none',
                                color: 'inherit',
                                padding: '0px',
                                font: 'inherit',
                                outline: 'inherit',
                                zIndex: 'inherit',
                                boxShadow: 'none'
                            }} onClick={(e) => {
                                e.stopPropagation();
                            }}
                                filename={'BinSummaryReport_' + process.env.REACT_APP_SORTER_NAME.replace(" ", "") + '.csv'}
                                headers={this.props.data.zipColumns} data={this.props.data.rows}>
                                <FontAwesomeIcon icon="download" />&nbsp;DOWNLOAD CSV
                            </CSVLink>
                        </MDBBtn>
                    </div>
                </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
                <MDBDataTable striped data={this.props.data} hover sortable={true} />
            </MDBCardBody>
        </MDBCard>
    );
}

export default Test;