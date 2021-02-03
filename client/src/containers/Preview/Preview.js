import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './Preview.module.css';



export class Preview extends Component {


    state = {
        image: null,
        title: null,
        price: null
    }

    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.ImageContainer}><img className={classes.Image} src={this.props.preview ? this.props.preview.data.image : null } /></div>
                <h2 className={classes.Title}>{this.props.preview ? this.props.preview.data.title : null }</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    preview: state.preview.data
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
