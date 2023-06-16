import React, { Component } from "react";

class ListMenuUtama extends Component{
    render() {
        return (
            <div>
                <h1>
                    <center> selamat Datang Di Warung Nusantara</center>
                </h1>
                <center>
                    <img src={this.props.link} alt="Masakan Nusantara" />
                </center>
            </div>
        )
    }
}

export default ListMenuUtama