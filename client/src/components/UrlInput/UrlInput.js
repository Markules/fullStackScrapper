import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import classes from "./UrlInput.module.css";
import * as actions from "../../store/actions";
import Spinner from "../UI/Spinner/Spinner";
import { updateObject, checkValidity } from "../../shared/utility";

const UrlInput = props =>  {
  const [urlForm, setUrlForm] = useState({
      URL: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter URL",
        },
        value: "",
        validation: {
          required: true,
          isUrl: true,
        },
        valid: false,
        touched: false,
      },
    })


  useEffect(() => {

  }, []);


  const inputChangedHandler = ( event, controlName ) => {
    const updatedControls = updateObject( urlForm, {
        [controlName]: updateObject( urlForm[controlName], {
            value: event.target.value,
            valid: checkValidity( event.target.value, urlForm[controlName].validation ),
            touched: true
        } )
    } );
    setUrlForm(updatedControls);
}

 const submitHandler = (event) => {
   console.log(urlForm.URL.value);
    event.preventDefault();
     props.onPreview(urlForm.URL.value,);
  };


    const formElementArray = [];
    for (let key in urlForm) {
      formElementArray.push({
        id: key,
        config: urlForm[key],
      });
    }

    let form = formElementArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => inputChangedHandler(event, formElement.id)}
      />
    ));

    if (props.loading) {
      form = <Spinner />;
    }

    let errorMessage = null;

    if (props.error) {
      errorMessage = <p className={classes.errorMessage}>{props.error.message}</p>;
    }

    return (
      <div className={classes.Input}>
        {errorMessage}
        <form onSubmit={submitHandler}>
          {form}
          <Button btnType="Success">PREVIEW</Button>
        </form>
      </div>
    );
  }


const mapStateToProps = (state) => {
  return {
    loading: state.preview.loading,
    error: state.preview.error,
    previewData: state.preview.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPreview: (url) => dispatch(actions.preview(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlInput);
