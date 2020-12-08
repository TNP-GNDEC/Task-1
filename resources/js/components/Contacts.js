import React from "react";
import axios from "axios";
import Contact from "./Contact"


class Contacts extends React.Component {


    state = {
        contacts: [],
        loading: true,
    }
    fetchContacts = async () => {
        const res = await axios.get("/contact") // got from toute list.
        if(res.data.status === 200){
            this.setState({
                contacts: res.data.contacts
            });
            this.setState({
                loading: false
            });
        }
    }

    deleteContact = async (id) => {
        const res = await axios.delete(`/contact/${id}`);
        if(res.data.status === 200){
            this.fetchContacts();
        }
    }

    componentDidMount(){
        this.fetchContacts();
    }
    render(){
        if(this.state.loading === true){
            return <h1>Loading.......</h1>
        }
        return(
            <div>
                {this.state.contacts.map(contact =>(
                    <Contact contact={contact} key={contact.id} deleteContact={this.deleteContact}/>
                ))}
            </div>
        )
    }
}

export default Contacts;