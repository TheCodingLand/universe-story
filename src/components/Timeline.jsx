import React from 'react';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import articles from './articles'
import Article from './Article'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Typography from 'material-ui/Typography';
import { setArticle } from '../actions/userActions'


function getSteps() {
  return articles.map((el) => { return el.date })
}

function getStepContent(step) {
  return (<Article article={articles[step]} />)
}


class TimeLine extends React.Component {

  render() {


    const steps = getSteps();

    console.log(this.props.user.progression)

    console.log(this.props)
    return (
      <div><div>


      </div>
        <Stepper activeStep={this.props.user.progression} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel onClick={() => this.props.setArticle(index)}>{label}</StepLabel>
                <StepContent>
                  {getStepContent(index)}
                </StepContent>
              </Step>
            );
          })}
        </Stepper></div>
    )
  }

}


function mapStateToProps(state) {
  return {
    user: state.user
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setArticle,

  }, dispatch)


}




export default connect(mapStateToProps, mapDispatchToProps)(TimeLine)