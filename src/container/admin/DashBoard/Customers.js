import React, {Component} from "react";
import Table from '../../../components/CustomTabs/Table';
import customerList from "../../../assets/routerAdmin/customers-list.json";
import {CustomerService} from "../../../services/CustomerService";
const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]
const renderHead = (item, index) => <th key={index}>{item}</th>



class Customers extends Component{
    constructor() {
        super();
        this.state = {
            data:{},
            listDataTable:[],
        }
        this.service = new CustomerService();
    }
    componentDidMount = () => {
        this.getListDataCustomer();
    }

    getListDataCustomer = async ()=>{
        let rs = await this.service.getListCustomer();
        console.log('rs',rs);
        if(rs && rs.data && rs.data.data){
            this.setState({
               listDataTable: rs.data.data
            })
        }
        this.setState({
            listDataTable : rs?.data?.data || []
        })
    }

    render() {

        const renderBody = (item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.total_orders}</td>
                <td>{item.total_spend}</td>
                <td>{item.location}</td>
            </tr>
        )
        return (
            <div>
                <h2 className="page-header">
                    customers
                </h2>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">
                                <Table
                                    limit='10'
                                    headData={customerTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={customerList}
                                    renderBody={(item, index) => renderBody(item, index)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Customers;